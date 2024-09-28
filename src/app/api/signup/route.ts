"use server"

import { NextRequest, NextResponse } from "next/server";
import {hashPassword} from "@utils/auth";
import prisma from "@lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, password, confirmPassword, role } = body;

  console.log(body);
  // Basic validation
  if (!firstName || !lastName || !email || !password || !confirmPassword || !role) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  if (password !== confirmPassword) {
    return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    const roleExists = await prisma.role.findFirst({ where: { name: role } });
    if (!roleExists) {
      return NextResponse.json({ message: "Invalid role" }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: {
          connect: { id: roleExists.id },
        },
      },
    });

    return NextResponse.json({ message: "User created successfully", user }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
