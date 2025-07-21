"use client"

import * as React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const data = [
  {
    name: "Jan",
    total: 4500,
  },
  {
    name: "Feb",
    total: 5200,
  },
  {
    name: "Mar",
    total: 4800,
  },
  {
    name: "Apr",
    total: 6100,
  },
  {
    name: "May",
    total: 5900,
  },
  {
    name: "Jun",
    total: 7200,
  },
  {
    name: "Jul",
    total: 6800,
  },
  {
    name: "Aug",
    total: 8100,
  },
  {
    name: "Sep",
    total: 7600,
  },
  {
    name: "Oct",
    total: 8900,
  },
  {
    name: "Nov",
    total: 9200,
  },
  {
    name: "Dec",
    total: 10100,
  },
]

export function RevenueChart() {
  const [animationData, setAnimationData] = React.useState(
    data.map(item => ({ ...item, total: 0 }))
  )

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationData(data)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={animationData}>
        <defs>
          <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          dataKey="name"
          stroke="#ea580c"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#ea580c"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        {label}
                      </span>
                      <span className="font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                        ${payload[0].value?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Bar 
          dataKey="total" 
          fill="url(#orangeGradient)"
          radius={[4, 4, 0, 0]}
          animationBegin={0}
          animationDuration={1500}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
