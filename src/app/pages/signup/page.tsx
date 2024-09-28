"use client"

import signUpReducer from '@/app/reducers/signupreducer'
import React, { useReducer, useEffect, useState } from 'react'
import Link from 'next/link'
import { User, Mail, Lock, ArrowRight, Github, Twitter } from 'lucide-react'
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card"
import { Separator } from "@components/ui/seprator"
import { useRouter } from 'next/navigation'
import axios from 'axios'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
}

export default function SignUp() {
  const router = useRouter()
  const [formState, dispatch] = useReducer(signUpReducer, initialState)
  const [roles, setRoles] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('/api/roles')
        setRoles(response.data)
      } catch (error) {
        console.error('Failed to fetch roles:', error)
        setError('Failed to fetch roles')
      }
    }
    fetchRoles()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_FIELD', field: e.target.id, value: e.target.value })
  }

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_FIELD', field: 'role', value: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('') 

    if (formState.password !== formState.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        dispatch({ type: 'RESET_FORM' })
        router.push('/signin')
      } else {
        const data = await response.json()
        setError(data.message || 'Signup failed. Please try again.')
      }
    } catch (error) {
      console.error('Signup failed:', error)
      setError('An unexpected error occurred. Please try again.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#DBE2EF] to-[#F9F7F7]">
      <Card className="w-full max-w-md shadow-lg">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center text-[#112D4E]">Create an Account</CardTitle>
            <CardDescription className="text-center text-[#3F72AF]">Enter your details to join TrackPro</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
                <Input id="firstName" placeholder="First Name" className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]" value={formState.firstName} onChange={handleChange} />
              </div>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
                <Input id="lastName" placeholder="Last Name" className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]" value={formState.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
              <Input id="email" type="email" placeholder="Email" className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]" value={formState.email} onChange={handleChange} />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
              <Input id="password" type="password" placeholder="Password" className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]" value={formState.password} onChange={handleChange} />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
              <Input id="confirmPassword" type="password" placeholder="Confirm Password" className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]" value={formState.confirmPassword} onChange={handleChange} />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
              <select id="role" className="pl-10 bg-[#F7F7F7] border-[#3F72AF] focus:border-[#112D4E] w-full h-10 rounded-md" value={formState.role} onChange={handleRoleChange}>
                <option value="" disabled>Select Role</option>
                {roles.map(role => (
                  <option key={role.name.replace(/_/g, '')} value={role.name}>{role.name.replace(/_/g, ' ')}</option>
                ))}
              </select>
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
        </form>
      </Card>
    </div>
  )
}
