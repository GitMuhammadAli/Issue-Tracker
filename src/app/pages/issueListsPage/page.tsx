import React from 'react'
import { 
  User,
  Calendar,
  Clock,
  Tag,
  Paperclip,
  MessageSquare,
  Send
} from 'lucide-react'
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Textarea } from "@components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select"

export default function IssueDetail() {
  const issue = {
    id: 'ISSUE-001',
    title: 'Login page not responsive on mobile devices',
    description: 'Users are reporting that the login page is not displaying correctly on mobile devices, particularly on smaller screens. This is preventing some users from accessing the application.',
    status: 'Open',
    priority: 'High',
    assignee: 'Alice Johnson',
    createdBy: 'Bob Smith',
    createdAt: '2024-03-01 09:00 AM',
    dueDate: '2024-03-15',
    tags: ['UI', 'Mobile', 'Bug'],
    attachments: [
      { name: 'screenshot1.png', url: '#' },
      { name: 'error_log.txt', url: '#' }
    ],
    comments: [
      { user: 'Charlie Brown', content: 'I can reproduce this issue on my iPhone 12. The login form is cut off on the right side.', timestamp: '2024-03-01 10:30 AM' },
      { user: 'Diana Prince', content: 'I\'ve identified the CSS issue causing this problem. Working on a fix now.', timestamp: '2024-03-02 02:15 PM' }
    ]
  }

  return (
    <div className="p-6 bg-[#F9F7F7]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#112D4E]">{issue.title}</h1>
        <p className="text-sm text-gray-500">Issue ID: {issue.id}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p>{issue.description}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Activity</h2>
            <div className="space-y-4">
              {issue.comments.map((comment, index) => (
                <div key={index} className="flex space-x-4">
                  <Avatar>
                    <AvatarFallback>{comment.user[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{comment.user}</p>
                    <p className="text-sm text-gray-500">{comment.timestamp}</p>
                    <p className="mt-1">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex space-x-2">
              <Textarea placeholder="Add a comment..." />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="font-medium">Assignee:</span>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={issue.assignee} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alice">Alice Johnson</SelectItem>
                    <SelectItem value="bob">Bob Smith</SelectItem>
                    <SelectItem value="charlie">Charlie Brown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="font-medium">Due Date:</span>
                <Input type="date" defaultValue={issue.dueDate} />
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="font-medium">Created:</span>
                <span>{issue.createdAt} by {issue.createdBy}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-5 w-5 text-gray-400" />
                <span className="font-medium">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {issue.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Attachments</h2>
            <ul className="space-y-2">
              {issue.attachments.map((attachment, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Paperclip className="h-5 w-5 text-gray-400" />
                  <a href={attachment.url} className="text-blue-600 hover:underline">{attachment.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}