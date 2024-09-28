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

    // const hashedId = createHash('sha256').update(user.id.toString()).digest('hex');
    // const token = generateToken(hashedId);
    const token = generateToken(user.id);

    // const response = NextResponse.json({ message: "Login successful", user: { ...user, id: hashedId } }, { status: 200 });
    const response = NextResponse.json({ message: "Login successful", user: { ...user, id: user.id } }, { status: 200 });
    
    // sendCookie(token, response);
    sendCookie(token, response);
    
    return response;
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
