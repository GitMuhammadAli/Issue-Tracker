"use server"

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        const roles = await prisma.role.findMany();
        return NextResponse.json(roles, { status: 200 });
    } catch (error) {
        console.error('Error fetching roles:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    } finally {
        await prisma.$disconnect(); 
    }
}
