export const dummyClasses = [
  {
    id: "1",
    name: "Mathematics 101",
    code: "MATH01",
    professorId: "prof1",
    professorName: "Mr. Sharma",
    students: ["student1", "student2", "student3"],
    createdAt: new Date("2024-10-15"),
  },
  {
    id: "2",
    name: "English Literature",
    code: "ENG02",
    professorId: "prof1",
    professorName: "Mr. Sharma",
    students: ["student1", "student4"],
    createdAt: new Date("2024-10-20"),
  },
  {
    id: "3",
    name: "Science Basics",
    code: "SCI03",
    professorId: "prof2",
    professorName: "Ms. Patel",
    students: ["student2", "student3", "student4"],
    createdAt: new Date("2024-10-10"),
  },
]

export const dummyNotes = [
  {
    id: "note1",
    classId: "1",
    title: "Chapter 1: Algebra Basics",
    content: "Introduction to algebraic expressions and equations. Learn how to solve linear equations step by step.",
    uploadedBy: "Mr. Sharma",
    uploadedAt: new Date("2024-10-25"),
  },
  {
    id: "note2",
    classId: "1",
    title: "Chapter 2: Geometry",
    content: "Understanding shapes, angles, and basic geometric principles.",
    uploadedBy: "Mr. Sharma",
    uploadedAt: new Date("2024-10-26"),
  },
  {
    id: "note3",
    classId: "2",
    title: "Shakespeare's Works",
    content: "Overview of William Shakespeare's major plays and sonnets.",
    uploadedBy: "Mr. Sharma",
    uploadedAt: new Date("2024-10-24"),
  },
  {
    id: "note4",
    classId: "3",
    title: "Introduction to Physics",
    content: "Basic concepts of motion, force, and energy.",
    uploadedBy: "Ms. Patel",
    uploadedAt: new Date("2024-10-23"),
  },
]

export const dummyAttendance = [
  {
    id: "att1",
    classId: "1",
    date: new Date("2024-10-25"),
    studentId: "student1",
    status: "present" ,
  },
  {
    id: "att2",
    classId: "1",
    date: new Date("2024-10-25"),
    studentId: "student2",
    status: "absent" ,
  },
  {
    id: "att3",
    classId: "1",
    date: new Date("2024-10-25"),
    studentId: "student3",
    status: "present",
  },
  {
    id: "att4",
    classId: "1",
    date: new Date("2024-10-24"),
    studentId: "student1",
    status: "present",
  },
  {
    id: "att5",
    classId: "1",
    date: new Date("2024-10-24"),
    studentId: "student2",
    status: "present",
  },
]

export const dummyQuizzes = [
  {
    id: "quiz1",
    classId: "1",
    title: "Algebra Quiz 1",
    questions: [
      {
        id: "q1",
        question: "What is 2x + 3 = 11? Solve for x.",
        options: ["x = 2", "x = 4", "x = 6", "x = 8"],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: "Simplify: 3(x + 2) - 2x",
        options: ["x + 6", "x + 2", "5x + 6", "x - 6"],
        correctAnswer: 0,
      },
      {
        id: "q3",
        question: "What is the slope of y = 2x + 5?",
        options: ["2", "5", "-2", "1"],
        correctAnswer: 0,
      },
    ],
    createdBy: "Mr. Sharma",
    createdAt: new Date("2024-10-20"),
  },
  {
    id: "quiz2",
    classId: "2",
    title: "Literature Quiz 1",
    questions: [
      {
        id: "q4",
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Jane Austen", "William Shakespeare", "Charles Dickens", "Mark Twain"],
        correctAnswer: 1,
      },
      {
        id: "q5",
        question: "In which century did Shakespeare live?",
        options: ["15th", "16th", "17th", "18th"],
        correctAnswer: 1,
      },
    ],
    createdBy: "Mr. Sharma",
    createdAt: new Date("2024-10-22"),
  },
]

export const dummyAnnouncements = [
  {
    id: "ann1",
    classId: "1",
    title: "Midterm Exam Scheduled",
    content: "The midterm exam for Mathematics 101 is scheduled for November 15th. Please prepare well!",
    createdBy: "Mr. Sharma",
    createdAt: new Date("2024-10-26"),
  },
  {
    id: "ann2",
    classId: "1",
    title: "Assignment Submission",
    content: "Please submit your assignment on Chapter 1 by October 30th.",
    createdBy: "Mr. Sharma",
    createdAt: new Date("2024-10-25"),
  },
  {
    id: "ann3",
    classId: "2",
    title: "Class Cancelled",
    content: "Class on October 28th is cancelled due to a school event.",
    createdBy: "Mr. Sharma",
    createdAt: new Date("2024-10-24"),
  },
]
