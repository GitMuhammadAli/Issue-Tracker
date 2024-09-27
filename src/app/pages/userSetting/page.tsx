// import React from 'react'
// import { 
//   User,
//   Mail,
//   Lock,
//   Bell,
//   Settings,
//   Save
// } from 'lucide-react'
// import { Button } from "@components/ui/button"
// import { Input } from "@components/ui/input"
// import { Label } from "@components/ui/label"
// import { Textarea } from "@components/ui/textarea"
// import { Switch } from "@components/ui/switch"
// import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@components/ui/card"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@components/ui/tabs"

// export default function UserProfileSettings() {
//   return (
//     <div className="p-6 bg-[#F9F7F7]">
//       <h1 className="text-3xl font-bold text-[#112D4E] mb-6">Profile & Settings</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <Card className="lg:col-span-1">
//           <CardHeader>
//             <CardTitle>Profile Picture</CardTitle>
//           </CardHeader>
//           <CardContent className="flex flex-col items-center">
//             <Avatar className="w-32 h-32 mb-4">
//               <AvatarImage src="https://github.com/shadcn.png" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             <Button>Change Picture</Button>
//           </CardContent>
//         </Card>

//         <Card className="lg:col-span-2">
//           <Tabs defaultValue="profile">
//             <CardHeader>
//               <TabsList>
//                 <TabsTrigger value="profile">Profile</TabsTrigger>
//                 <TabsTrigger value="account">Account</TabsTrigger>
//                 <TabsTrigger value="notifications">Notifications</TabsTrigger>
//               </TabsList>
//             </CardHeader>
//             <CardContent>
//               <TabsContent value="profile">
//                 <form className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="firstName">First Name</Label>
//                       <Input id="firstName" placeholder="John" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <Input id="lastName" placeholder="Doe" />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" type="email" placeholder="john.doe@example.com" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="bio">Bio</Label>
//                     <Textarea id="bio" placeholder="Tell us about yourself" />
//                   </div>
//                   <Button className="w-full">
//                     <Save className="mr-2 h-4 w-4" /> Save Changes
//                   </Button>
//                 </form>
//               </TabsContent>
//               <TabsContent value="account">
//                 <form className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="currentPassword">Current Password</Label>
//                     <Input id="currentPassword" type="password" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="newPassword">New Password</Label>
//                     <Input id="newPassword" type="password" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="confirmPassword">Confirm New Password</Label>
//                     <Input id="confirmPassword" type="password" />
//                   </div>
//                   <Button className="w-full">
//                     <Save className="mr-2 h-4 w-4" /> Update Password
//                   </Button>
//                 </form>
//               </TabsContent>
//               <TabsContent value="notifications">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <div className="space-y-0.5">
//                       <Label>Email Notifications</Label>
//                       <p className="text-sm text-muted-foreground">Receive email about your account activity</p>
//                     </div>
//                     <Switch />
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="space-y-0.5">
//                       <Label>Push Notifications</Label>
//                       <p className="text-sm text-muted-foreground">Receive push notifications on your devices</p>
//                     </div>
//                     <Switch />
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div className="space-y-0.5">
//                       <Label>Weekly Digest</Label>
//                       <p className="text-sm text-muted-foreground">Get a weekly summary of your account activity</p>
//                     </div>
//                     <Switch />
//                   </div>
//                 </div>
//               </TabsContent>
//             </CardContent>
//           </Tabs>
//         </Card>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { 
  User,
  Mail,
  Lock,
  Bell,
  Settings,
  Save
} from 'lucide-react'
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Textarea } from "@components/ui/textarea"
import { Switch } from "@components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/ui/tabs"

export default function UserProfileSettings() {
  return (
    <div className="p-6 bg-[#F9F7F7]">
      <h1 className="text-3xl font-bold text-[#112D4E] mb-6">Profile & Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button>Change Picture</Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <Tabs defaultValue="profile">
            <CardHeader>
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="profile">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself" />
                  </div>
                  <Button className="w-full">
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="account">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="w-full">
                    <Save className="mr-2 h-4 w-4" /> Update Password
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="notifications">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive email about your account activity</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive push notifications on your devices</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly Digest</Label>
                      <p className="text-sm text-muted-foreground">Get a weekly summary of your account activity</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}