import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from "next/server";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: number) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};


export const sendSession = (token: string) => {
  return {
    name: 'token',
    value: token,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 3600,
    path: '/',
  };
};


export const sendCookie = (token: string, res: NextResponse) => {
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax' as 'lax', 
      maxAge: 3600,
      path: '/',
    };
  
    // Set the cookie
    res.cookies.set('token', token, cookieOptions);
  };