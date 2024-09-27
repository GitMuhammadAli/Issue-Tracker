import React from 'react'
import {
  Search,
  Plus,
  Edit,
  Trash2,
  MoreVertical
} from 'lucide-react'
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar"
import { Badge } from "@components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select"

export default function TeamManagement() {
  const teamMembers = [
    { id: 1, name: 'Alice Johnson', role: 'Project Manager', email: 'alice@example.com', activeIssues: 5, availability: 'Available' },
    { id: 2, name: 'Bob Smith', role: 'Developer', email: 'bob@example.com', activeIssues: 3, availability: 'Busy' },
    { id: 3, name: 'Charlie Brown', role: 'Designer', email: 'charlie@example.com', activeIssues: 2, availability: 'Away' },
    { id: 4, name: 'Diana Prince', role: 'QA Tester', email: 'diana@example.com', activeIssues: 4, availability: 'Available' },
    { id: 5, name: 'Ethan Hunt', role: 'Developer', email: 'ethan@example.com', activeIssues: 6, availability: 'Busy' },
  ]

  return (
    <div className="p-6 bg-[#F9F7F7]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#112D4E]">Team Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Team Member
        </Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="w-full md:w-1/3 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input type="search" placeholder="Search team members..." className="pl-10" />
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="pm">Project Manager</SelectItem>
            <SelectItem value="dev">Developer</SelectItem>
            <SelectItem value="design">Designer</SelectItem>
            <SelectItem value="qa">QA Tester</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {member.name}
              </CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" /> Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${member.name}`} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Active Issues:</span>
                  <span className="font-medium">{member.activeIssues}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Availability:</span>
                  <Badge variant={
                    member.availability === 'Available' ? 'success' :
                      member.availability === 'Busy' ? 'warning' : 'secondary'
                  }>
                    {member.availability}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}