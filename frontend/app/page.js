"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useAuth } from "@/lib/auth-context"

export default function LandingPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const [selectedRole, setSelectedRole] = useState(null)

  useEffect(() => {
    if (!isLoading && user) {
      if (user.role === "professor") {
        router.push("/professor")
      } else {
        router.push("/student")
      }
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-linear-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      </main>
    )
  }

  const handleRoleSelect = () => {
    setSelectedRole(role)
  }

  const handleSignUp = () => {
    if (selectedRole === "professor") {
      router.push("/auth/signup?role=professor")
    } else if (selectedRole === "student") {
      router.push("/auth/signup?role=student")
    }
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">EduConnect</h1>
          <p className="text-lg text-gray-600">Learning made simple for everyone</p>
        </div>

        {/* Role Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Student Card */}
          <Card
            className={`p-8 cursor-pointer transition-all border-2 ${
              selectedRole === "student" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"
            }`}
            onClick={() => handleRoleSelect("student")}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍🎓</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">I'm a Student</h2>
              <p className="text-gray-600 mb-4">Join classes, access notes, and complete assignments</p>
              <div className="text-sm text-blue-600 font-semibold">{selectedRole === "student" && "✓ Selected"}</div>
            </div>
          </Card>

          {/* Professor Card */}
          <Card
            className={`p-8 cursor-pointer transition-all border-2 ${
              selectedRole === "professor" ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-green-300"
            }`}
            onClick={() => handleRoleSelect("professor")}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">I'm a Professor</h2>
              <p className="text-gray-600 mb-4">Create classes, manage students, and share resources</p>
              <div className="text-sm text-green-600 font-semibold">{selectedRole === "professor" && "✓ Selected"}</div>
            </div>
          </Card>
        </div>

        {/* Sign Up Button */}
        <div className="flex gap-4">
          <Button
            onClick={handleSignUp}
            disabled={!selectedRole}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
          >
            Continue
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>
            Already have an account?{" "}
            <a href="/auth/login" className="text-blue-600 hover:underline font-semibold">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
