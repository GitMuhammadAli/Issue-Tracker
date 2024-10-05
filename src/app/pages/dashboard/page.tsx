"use client"
import React, { useEffect } from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { useRouter } from 'next/navigation';
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Flag,
  User,
  Calendar,
  Router
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useAuth } from '@context/AutContext';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  const { isAuthenticated,  userData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    
    if (!isAuthenticated) {
      router.push('/signin')
    }
  }, [isAuthenticated, router])


  const issuesByPriorityData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [{
      data: [12, 19, 3],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
  }

  const issuesOverTimeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Issues',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  }

  return (
    <div className="p-6 bg-[#F9F7F7]">
      <h1 className="text-3xl font-bold text-[#112D4E] mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard title="Open Issues" value="42" icon={<AlertCircle className="h-8 w-8 text-yellow-500" />} />
        <MetricCard title="Resolved Issues" value="128" icon={<CheckCircle className="h-8 w-8 text-green-500" />} />
        <MetricCard title="Pending Reviews" value="7" icon={<Clock className="h-8 w-8 text-orange-500" />} />
        <MetricCard title="High Priority" value="15" icon={<Flag className="h-8 w-8 text-red-500" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome user {userData?.firstName}</CardTitle>
            <CardTitle>Issues by Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <Pie data={issuesByPriorityData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Issues Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={issuesOverTimeData} />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Contributors</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Ethan Hunt'].map((name, index) => (
                <li key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <span className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-[#3F72AF]" />
                    {name}
                  </span>
                  <span className="text-[#3F72AF] font-semibold">{20 - index * 2} issues</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {[
                { title: 'Implement user authentication', date: '2024-03-15', priority: 'High' },
                { title: 'Design new dashboard layout', date: '2024-03-20', priority: 'Medium' },
                { title: 'Fix pagination bug', date: '2024-03-22', priority: 'Low' },
                { title: 'Update API documentation', date: '2024-03-25', priority: 'Medium' },
                { title: 'Perform security audit', date: '2024-03-30', priority: 'High' }
              ].map((task, index) => (
                <li key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <span className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-[#3F72AF]" />
                    {task.title}
                  </span>
                  <span className={`font-semibold ${task.priority === 'High' ? 'text-red-500' :
                      task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                    }`}>
                    {task.date}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MetricCard({ title, value, icon }) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        {icon}
      </CardContent>
    </Card>
  )
}
