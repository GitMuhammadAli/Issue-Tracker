'use server';
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@utils/auth"; // Adjust import as necessary
import prisma from "@lib/prisma";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const token = req.cookies.get("token")?.value; 
    console.log("Token:", token); 

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decodedToken:any = verifyToken(token); 
    console.log("Decoded Token:", decodedToken); 

    if (!decodedToken || typeof decodedToken === 'number' || !("id" in decodedToken)) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: decodedToken.id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user); 
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}