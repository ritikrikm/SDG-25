"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { dummyAttendance } from "@/lib/dummy-data"
import { Card } from "@/components/ui/card"

export default function StudentAttendanceTab( {classId }) {
  const { user } = useAuth()
  const [attendance] = useState(dummyAttendance.filter((a) => a.classId === classId && a.studentId === user?.id))

  const present = attendance.filter((a) => a.status === "present").length
  const absent = attendance.filter((a) => a.status === "absent").length
  const total = present + absent
  const attendancePercentage = total > 0 ? Math.round((present / total) * 100) : 0

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Your Attendance</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-6 text-center">
          <p className="text-gray-600 text-sm">Present</p>
          <p className="text-3xl font-bold text-green-600">{present}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-gray-600 text-sm">Absent</p>
          <p className="text-3xl font-bold text-red-600">{absent}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-gray-600 text-sm">Attendance %</p>
          <p className="text-3xl font-bold text-blue-600">{attendancePercentage}%</p>
        </Card>
      </div>

      {attendance.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-gray-600">No attendance records yet</p>
        </Card>
      ) : (
        <Card className="p-6">
          <h3 className="font-bold text-gray-800 mb-4">Attendance History</h3>
          <div className="space-y-2">
            {attendance.map((record) => (
              <div key={record.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <p className="text-gray-700">{new Date(record.date).toLocaleDateString()}</p>
                <span
                  className={`px-3 py-1 rounded text-sm font-semibold ${
                    record.status === "present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {record.status === "present" ? "Present" : "Absent"}
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}
