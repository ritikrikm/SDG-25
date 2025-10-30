"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import StudentNav from "@/components/student-nav"
import StudentClassList from "@/components/student/class-list"
import JoinClassModal from "@/components/student/join-class-modal"

export default function StudentDashboard() {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "student")) {
      router.push("/auth/login")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user || user.role !== "student") {
    return null
  }

  const handleClassJoined = () => {
    setShowJoinModal(false)
    setRefreshKey((prev) => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNav />

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Classes</h1>
            <p className="text-gray-600 mt-1">Access your classes and materials</p>
          </div>
          <Button onClick={() => setShowJoinModal(true)} className="bg-green-600 hover:bg-green-700 text-white">
            + Join Class
          </Button>
        </div>

        <StudentClassList key={refreshKey} studentId={user.id} />

        {showJoinModal && (
          <JoinClassModal
            onClose={() => setShowJoinModal(false)}
            onClassJoined={handleClassJoined}
            studentId={user.id}
          />
        )}
      </main>
    </div>
  )
}
