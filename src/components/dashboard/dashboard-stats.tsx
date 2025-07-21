"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  IconTrendingUp, 
  IconTrendingDown, 
  IconUsers, 
  IconCurrencyDollar, 
  IconShoppingCart, 
  IconEye 
} from "@tabler/icons-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NumberTicker } from "@/components/magicui/number-ticker"

interface StatsCardProps {
  title: string
  value: number
  change: number
  icon: React.ReactNode
  prefix?: string
  suffix?: string
  delay?: number
}

function StatsCard({ title, value, change, icon, prefix = "", suffix = "", delay = 0 }: StatsCardProps) {
  const isPositive = change >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <div className="text-muted-foreground">{icon}</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{prefix}</span>
            <NumberTicker value={value} className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent" />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{suffix}</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            {isPositive ? (
              <IconTrendingUp className="mr-1 h-3 w-3 text-emerald-500" />
            ) : (
              <IconTrendingDown className="mr-1 h-3 w-3 text-red-500" />
            )}
            <span className={isPositive ? "text-emerald-600" : "text-red-600"}>
              {isPositive ? "+" : ""}{change}%
            </span>
            <span className="ml-1">from last month</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const statsData = [
  {
    title: "Total Revenue",
    value: 45231,
    change: 20.1,
    icon: <IconCurrencyDollar className="h-4 w-4" />,
    prefix: "$",
  },
  {
    title: "Active Users",
    value: 2350,
    change: 180.1,
    icon: <IconUsers className="h-4 w-4" />,
    suffix: "",
  },
  {
    title: "Sales",
    value: 12234,
    change: 19.2,
    icon: <IconShoppingCart className="h-4 w-4" />,
    prefix: "+",
  },
  {
    title: "Page Views",
    value: 573,
    change: -2.1,
    icon: <IconEye className="h-4 w-4" />,
    prefix: "+",
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <StatsCard
          key={stat.title}
          {...stat}
          delay={index * 0.1}
        />
      ))}
    </div>
  )
}
