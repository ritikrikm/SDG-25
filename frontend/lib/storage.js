// Storage structures
const classes = []
let notes = []
const attendance = []
const quizzes = []
const announcements = []

// Class operations
export const classStorage = {
  create: (name, professorId, professorName) => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase()
    const newClass = {
      id: Date.now().toString(),
      name,
      code,
      professorId,
      professorName,
      students: [],
      createdAt: new Date(),
    }
    classes.push(newClass)
    return newClass
  },

  getAll: () => classes,

  getById: (id) => classes.find((c) => c.id === id),

  getByCode: (code) => classes.find((c) => c.code === code),

  getProfessorClasses: (professorId) => classes.filter((c) => c.professorId === professorId),

  getStudentClasses: (studentId) => classes.filter((c) => c.students.includes(studentId)),

  joinClass: (classId, studentId) => {
    const cls = classes.find((c) => c.id === classId)
    if (cls && !cls.students.includes(studentId)) {
      cls.students.push(studentId)
    }
    return cls
  },
}

// Note operations
export const noteStorage = {
  create: (classId, title, content, uploadedBy) => {
    const newNote = {
      id: Date.now().toString(),
      classId,
      title,
      content,
      uploadedBy,
      uploadedAt: new Date(),
    }
    notes.push(newNote)
    return newNote
  },

  getByClass: (classId) => notes.filter((n) => n.classId === classId),

  delete: (id) => {
    notes = notes.filter((n) => n.id !== id)
  },
}

// Attendance operations
export const attendanceStorage = {
  create: (classId, studentId, status) => {
    const newAttendance = {
      id: Date.now().toString(),
      classId,
      date: new Date(),
      studentId,
      status,
    }
    attendance.push(newAttendance)
    return newAttendance
  },

  getByClass: (classId) => attendance.filter((a) => a.classId === classId),

  getByStudent: (classId, studentId) =>
    attendance.filter((a) => a.classId === classId && a.studentId === studentId),
}

// Quiz operations
export const quizStorage = {
  create: (classId, title, questions, createdBy) => {
    const newQuiz = {
      id: Date.now().toString(),
      classId,
      title,
      questions,
      createdBy,
      createdAt: new Date(),
    }
    quizzes.push(newQuiz)
    return newQuiz
  },

  getByClass: (classId) => quizzes.filter((q) => q.classId === classId),

  getById: (id) => quizzes.find((q) => q.id === id),
}

// Announcement operations
export const announcementStorage = {
  create: (classId, title, content, createdBy) => {
    const newAnnouncement = {
      id: Date.now().toString(),
      classId,
      title,
      content,
      createdBy,
      createdAt: new Date(),
    }
    announcements.push(newAnnouncement)
    return newAnnouncement
  },

  getByClass: (classId) => announcements.filter((a) => a.classId === classId),
}
