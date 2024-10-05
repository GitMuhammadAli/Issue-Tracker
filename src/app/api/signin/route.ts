"use server";

import { NextRequest, NextResponse } from "next/server";
import { comparePassword, generateToken, sendCookie } from "@utils/auth";
import prisma from "@lib/prisma";
import { createHash } from 'crypto';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }

    // Generate token
    const token = generateToken(user.id);

    // Send token in response body (as JSON)
    const response = NextResponse.json({ message: "Login successful", token, user: { id: user.id, email: user.email } }, { status: 200 });
    
    // Optional: Still set HttpOnly cookie for server-side checks
    sendCookie(token, response);
    
    return response;
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
