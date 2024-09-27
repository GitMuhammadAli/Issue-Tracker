"use-client"
import React from 'react'
import { Bell, Search, User, Github, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { Button } from "../app/components/ui/button"
import { Input } from "../app/components/ui/input"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F7]">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold text-[#112D4E]">
              TrackPro
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/dashboard" className="text-[#3F72AF] hover:text-[#112D4E]">Dashboard</Link>
              <Link href="/issues" className="text-[#3F72AF] hover:text-[#112D4E]">Issues</Link>
              <Link href="/teams" className="text-[#3F72AF] hover:text-[#112D4E]">Teams</Link>
              <Link href="/reports" className="text-[#3F72AF] hover:text-[#112D4E]">Reports</Link>
              <Link href="/profile" className="text-[#3F72AF] hover:text-[#112D4E]">Profile</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/notifications">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5 text-[#3F72AF]" />
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-[#3F72AF]" />
              </Button>
            </Link>
            <Link href="/signin">
              <Button className="bg-[#112D4E] text-white hover:bg-[#3F72AF]">Sign In</Button>
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search issues..."
              className="pl-10 w-full"
            />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-[#DBE2EF] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#112D4E] mb-6">Track Issues Seamlessly</h1>
            <p className="text-xl text-[#3F72AF] mb-8">Manage projects with ease and boost team productivity</p>
            <Button className="bg-[#112D4E] text-white hover:bg-[#3F72AF] text-lg px-8 py-3">
              Get Started
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#112D4E] mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Assign Issues", icon: "clipboard-list" },
                { title: "Generate Reports", icon: "bar-chart" },
                { title: "Collaborate with Teams", icon: "users" },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-[#3F72AF] mb-4">
                    {feature.icon === "clipboard-list" && <ClipboardList className="mx-auto h-12 w-12" />}
                    {feature.icon === "bar-chart" && <BarChart className="mx-auto h-12 w-12" />}
                    {feature.icon === "users" && <Users className="mx-auto h-12 w-12" />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#112D4E] mb-2">{feature.title}</h3>
                  <p className="text-[#3F72AF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#F9F7F7] border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">© 2024 TrackPro. All rights reserved.</p>
            </div>
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <Link href="/terms" className="text-sm text-[#3F72AF] hover:text-[#112D4E]">Terms of Service</Link>
              <Link href="/privacy" className="text-sm text-[#3F72AF] hover:text-[#112D4E]">Privacy Policy</Link>
              <Link href="/contact" className="text-sm text-[#3F72AF] hover:text-[#112D4E]">Contact Us</Link>
            </nav>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#3F72AF] hover:text-[#112D4E]">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#3F72AF] hover:text-[#112D4E]">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#3F72AF] hover:text-[#112D4E]">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ClipboardList(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  )
}

function BarChart(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}

function Users(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}