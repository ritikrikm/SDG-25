"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { dummyClasses } from "@/lib/dummy-data"
import NotesTab from "./tabs/notes-tab"
import AttendanceTab from "./tabs/attendance-tab"
import QuizTab from "./tabs/quiz-tab"
import AnnouncementTab from "./tabs/announcement-tab"

export default function ClassTabs( {classId, activeTab, setActiveTab} ) {
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
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-transparent text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "overview" && <OverviewTab classId={classId} />}
        {activeTab === "notes" && <NotesTab classId={classId} />}
        {activeTab === "attendance" && <AttendanceTab classId={classId} />}
        {activeTab === "quiz" && <QuizTab classId={classId} />}
        {activeTab === "announcements" && <AnnouncementTab classId={classId} />}
      </div>
    </div>
  )
}

function OverviewTab( classId ) {
  const cls = dummyClasses.find((c) => c.id === classId)

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Class Overview</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-600 text-sm">Total Students</p>
          <p className="text-3xl font-bold text-blue-600">{cls?.students.length || 0}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Class Code</p>
          <p className="text-2xl font-mono font-bold text-gray-800">{cls?.code}</p>
        </div>
      </div>
    </Card>
  )
}
