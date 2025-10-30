import { NextRequest, NextResponse } from "next/server"

// Mock user database (in production, use a real database)
const mockUsers = [
  {
    id: "1",
    name: "John Professor",
    email: "professor@example.com",
    password: "password123",
    role: "professor",
  },
  {
    id: "student2",
    name: "Jane Student",
    email: "student@example.com",
    password: "password123",
    role: "student",
  },
]

export async function POST(request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password required" }, { status: 400 })
    }

    const user = mockUsers.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 })
    }

    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      user: userWithoutPassword,
      token: `token_${user.id}`,
    })
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
