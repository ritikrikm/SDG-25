"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { dummyClasses } from "@/lib/dummy-data"
import { Button } from "@/components/ui/button"
import ProfessorNav from "@/components/professor-nav"
import ClassTabs from "@/components/professor/class-tabs"

export default function ProfessorClassPage() {
  const router = useRouter()
  const params = useParams()
  const { user, isLoading } = useAuth()
  const classId = params.id 

  const [classData, setClassData] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (!isLoading && (!user || user.role !== "professor")) {
      router.push("/auth/login")
      return
    }
    if (classId) {
      const cls = dummyClasses.find((c) => c.id === classId)
      if (cls && cls.professorId === user?.id) {
        setClassData(cls)
      } else {
        router.push("/professor")
      }
    }
  }, [classId, user, isLoading, router])

  if (isLoading || !classData) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfessorNav />

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <Button
            onClick={() => router.push("/professor")}
            variant="outline"
            className="mb-4 bg-transparent text-blue-600 border-blue-200 hover:bg-blue-50"
          >
            ← Back to Classes
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">{classData.name}</h1>
          <p className="text-gray-600 mt-2">
            Class Code: <span className="font-mono font-bold text-blue-600">{classData.code}</span>
          </p>
        </div>

        <ClassTabs classId={classId} activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
    </div>
  )
}
