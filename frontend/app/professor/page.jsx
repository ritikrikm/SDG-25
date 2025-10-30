"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import ProfessorNav from "@/components/professor-nav"
import ClassList from "@/components/professor/class-list"
import CreateClassModal from "@/components/professor/create-class-modal"

export default function ProfessorDashboard() {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "professor")) {
      router.push("/auth/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user || user.role !== "professor") {
    return null
  }

  const handleClassCreated = () => {
    setShowCreateModal(false)
    setRefreshKey((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfessorNav />

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Classes</h1>
            <p className="text-gray-600 mt-1">Manage your classes and students</p>
          </div>
          <Button onClick={() => setShowCreateModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
            + Create Class
          </Button>
        </div>

        <ClassList key={refreshKey} professorId={user.id} />

        {showCreateModal && (
          <CreateClassModal
            onClose={() => setShowCreateModal(false)}
            onClassCreated={handleClassCreated}
            professorId={user.id}
            professorName={user.name}
          />
        )}
      </main>
    </div>
  )
}
