"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Marquee } from "@/components/magicui/marquee"

const activities = [
  {
    id: 1,
    user: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/01.png",
    action: "made a purchase",
    amount: "+$299.00",
    time: "2 minutes ago",
  },
  {
    id: 2,
    user: "Sarah Wilson",
    email: "sarah@example.com", 
    avatar: "/avatars/02.png",
    action: "signed up",
    amount: "New user",
    time: "5 minutes ago",
  },
  {
    id: 3,
    user: "Michael Chen",
    email: "michael@example.com",
    avatar: "/avatars/03.png", 
    action: "updated profile",
    amount: "Profile",
    time: "10 minutes ago",
  },
  {
    id: 4,
    user: "Emma Davis",
    email: "emma@example.com",
    avatar: "/avatars/04.png",
    action: "made a purchase",
    amount: "+$199.00",
    time: "15 minutes ago",
  },
  {
    id: 5,
    user: "James Rodriguez",
    email: "james@example.com",
    avatar: "/avatars/05.png",
    action: "canceled order",
    amount: "-$99.00",
    time: "20 minutes ago",
  },
]

function ActivityItem({ user, action, amount, time }: Omit<typeof activities[0], 'id' | 'email' | 'avatar'>) {
  return (
    <div className="flex items-center space-x-4 p-4">
      <Avatar>
        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user}`} />
        <AvatarFallback>{user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{user}</p>
        <p className="text-sm text-muted-foreground">{action}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
      <div className="font-medium bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
        {amount}
      </div>
    </div>
  )
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Recent Activity</CardTitle>
        <CardDescription>
          Latest user activities and transactions
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {activities.slice(0, 5).map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ActivityItem {...activity} />
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function ActivityMarquee() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Live Activity Feed</CardTitle>
        <CardDescription>
          Real-time user activities across the platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Marquee pauseOnHover className="[--duration:30s]">
          {activities.map((activity) => (
            <div key={activity.id} className="mx-4 flex items-center space-x-3 rounded-lg border p-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.user}`} />
                <AvatarFallback className="text-xs">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{activity.user}</span>
                <span className="text-xs text-muted-foreground">{activity.action}</span>
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{activity.amount}</span>
            </div>
          ))}
        </Marquee>
      </CardContent>
    </Card>
  )
}
