"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { dummyClasses } from "@/lib/dummy-data"
import Link from "next/link"

export default function StudentClassList({ studentId }) {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const studentClasses = dummyClasses.filter((c) => c.students.includes(studentId))
    setClasses(studentClasses)
    console.log(studentId)
  }, [studentId])

  if (classes.length === 0) {
    return (
      <Card className="p-12 text-center">
        <p className="text-gray-600 text-lg">You haven't joined any classes yet. Use the class code to join!</p>
      </Card>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((cls) => (
        <Link key={cls.id} href={`/student/class/${cls.id}`}>
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{cls.name}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                Professor: <span className="font-semibold text-gray-800">{cls.professorName}</span>
              </p>
              <p>
                Students: <span className="font-semibold text-gray-800">{cls.students.length}</span>
              </p>
              <p>
                Joined:{" "}
                <span className="font-semibold text-gray-800">{new Date(cls.createdAt).toLocaleDateString()}</span>
              </p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
