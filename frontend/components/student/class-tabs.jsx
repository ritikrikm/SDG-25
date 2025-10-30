"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { dummyClasses } from "@/lib/dummy-data"
import StudentNotesTab from "./tabs/notes-tab"
import StudentAttendanceTab from "./tabs/attendance-tab"
import StudentQuizTab from "./tabs/quiz-tab"
import StudentAnnouncementTab from "./tabs/announcement-tab"

export default function StudentClassTabs( {classId, activeTab, setActiveTab} ) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "notes", label: "Notes" },
    { id: "attendance", label: "Attendance" },
    { id: "quiz", label: "Quiz/Assignments" },
    { id: "announcements", label: "Announcements" },
  ]

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variant={activeTab === tab.id ? "default" : "outline"}
            className={`whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-transparent text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "overview" && <StudentOverviewTab classId={classId} />}
        {activeTab === "notes" && <StudentNotesTab classId={classId} />}
        {activeTab === "attendance" && <StudentAttendanceTab classId={classId} />}
        {activeTab === "quiz" && <StudentQuizTab classId={classId} />}
        {activeTab === "announcements" && <StudentAnnouncementTab classId={classId} />}
      </div>
    </div>
  )
}

function StudentOverviewTab({classId}) {
  const cls = dummyClasses.find((c) => c.id === classId)

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Class Overview</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 text-sm">Total Students</p>
          <p className="text-3xl font-bold text-green-600">{cls?.students.length || 0}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Professor</p>
          <p className="text-lg font-semibold text-gray-800">{cls?.professorName}</p>
        </div>
      </div>
    </Card>
  )
}
