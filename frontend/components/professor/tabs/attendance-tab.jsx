"use client"

import { useState } from "react"
import { dummyClasses, dummyAttendance } from "@/lib/dummy-data"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AttendanceTab({ classId }) {
  const cls = dummyClasses.find((c) => c.id === classId)
  const [attendance, setAttendance] = useState(dummyAttendance.filter((a) => a.classId === classId))
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

  const handleMarkAttendance = (studentId, status) => {
    const newAttendance = {
      id: Date.now().toString(),
      classId,
      date: new Date(selectedDate),
      studentId,
      status,
    }
    setAttendance([...attendance, newAttendance])
  }

  if (!cls) return null

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mark Attendance</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {cls.students.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-gray-600">No students in this class yet</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {cls.students.map((studentId) => (
            <Card key={studentId} className="p-4 flex justify-between items-center">
              <p className="font-medium text-gray-800">Student ID: {studentId}</p>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleMarkAttendance(studentId, "present")}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm"
                >
                  Present
                </Button>
                <Button
                  onClick={() => handleMarkAttendance(studentId, "absent")}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm"
                >
                  Absent
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
