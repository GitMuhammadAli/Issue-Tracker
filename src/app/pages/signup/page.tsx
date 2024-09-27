import React from 'react'
import Link from 'next/link'
import { User, Mail, Lock, ArrowRight, Github, Twitter } from 'lucide-react'
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card"
import { Separator } from "@components/ui/seprator"

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#DBE2EF] to-[#F9F7F7]">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center text-[#112D4E]">Create an Account</CardTitle>
          <CardDescription className="text-center text-[#3F72AF]">Enter your details to join TrackPro</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
              <Input id="first-name" placeholder="First Name" className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]" />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
              <Input id="last-name" placeholder="Last Name" className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]" />
            </div>
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
            <Input id="email" type="email" placeholder="Email" className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]" />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
            <Input id="password" type="password" placeholder="Password" className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]" />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
            <Input id="confirm-password" type="password" placeholder="Confirm Password" className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]" />
          </div>
          <Button type="submit" className="w-full bg-[#112D4E] hover:bg-[#3F72AF] transition-colors">
            Create Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="flex items-center justify-between">
            <Separator className="w-1/3" />
            <span className="text-xs text-[#3F72AF]">OR</span>
            <Separator className="w-1/3" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" className="w-full">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className="text-sm text-[#3F72AF] text-center w-full">
            Already have an account?{' '}
            <Link href="/signin" className="font-semibold text-[#112D4E] hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}