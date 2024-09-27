"use client"

import React from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { 
  Calendar,
  Download,
  Filter
} from 'lucide-react'
import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select"

import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement, LineElement);

export default function ReportsAnalytics() {
  // Mock data for charts
  const issuesByStatusData = {
    labels: ['Open', 'In Progress', 'Resolved', 'Closed'],
    datasets: [{
      data: [12, 19, 3, 5],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    }]
  }

  const issuesOverTimeData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Issues Created',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }, {
      label: 'Issues Resolved',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }]
  }

  const teamPerformanceData = {
    labels: ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan'],
    datasets: [{
      label: 'Issues Resolved',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  }

  return (
    <div className="p-6 bg-[#F9F7F7]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#112D4E]">Reports & Analytics</h1>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" /> Date Range
          </Button>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button className="flex items-center">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">248</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">3.2 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Issues Resolved This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">87</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Issues by Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Pie data={issuesByStatusData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Issues Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={issuesOverTimeData} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={teamPerformanceData} />
        </CardContent>
      </Card>
    </div>
  )
}