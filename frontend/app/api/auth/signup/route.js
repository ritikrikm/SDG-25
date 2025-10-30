import { NextRequest, NextResponse } from "next/server"

// In-memory storage (in production, use a database)
const users = []

export async function POST(request) {
  try {
    const { name, email, password, role } = await request.json()

    // Validate input
    if (!name || !email || !password || !role) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Check if user already exists
    if (users.some((u) => u.email === email)) {
      return NextResponse.json({ message: "Email already registered" }, { status: 400 })
    }

    // Create new user
    const user = {
      id: Date.now().toString(),
      name,
      email,
      password, // In production, hash this!
      role,
      createdAt: new Date(),
    }

    users.push(user)

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      user: userWithoutPassword,
      token: `token_${user.id}`,
    })
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
