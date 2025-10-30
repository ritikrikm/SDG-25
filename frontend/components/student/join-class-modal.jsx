"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { classStorage } from "@/lib/storage"

export default function JoinClassModal({ onClose, onClassJoined, studentId }) {
  const [classCode, setClassCode] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!classCode.trim()) {
      setError("Please enter a class code")
      return
    }

    const cls = classStorage.getByCode(classCode.toUpperCase())
    if (!cls) {
      setError("Invalid class code. Please check and try again.")
      return
    }

    classStorage.joinClass(cls.id, studentId)
    onClassJoined()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join a Class</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Class Code</label>
            <Input
              type="text"
              value={classCode}
              onChange={(e) => setClassCode(e.target.value.toUpperCase())}
              placeholder="Enter 6-character code"
              className="w-full text-center text-lg font-mono tracking-widest"
              maxLength={6}
              autoFocus
            />
            <p className="text-xs text-gray-500 mt-2">Ask your professor for the class code</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">{error}</div>
          )}

          <div className="flex gap-3">
            <Button type="button" onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              Join Class
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
