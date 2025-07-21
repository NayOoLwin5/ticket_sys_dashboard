"use client"

import * as React from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const data = [
  {
    name: "Jan",
    users: 1200,
    sessions: 2400,
  },
  {
    name: "Feb",
    users: 1900,
    sessions: 3200,
  },
  {
    name: "Mar",
    users: 2100,
    sessions: 3600,
  },
  {
    name: "Apr",
    users: 2400,
    sessions: 4200,
  },
  {
    name: "May",
    users: 2800,
    sessions: 4800,
  },
  {
    name: "Jun",
    users: 3200,
    sessions: 5400,
  },
]

export function AnalyticsChart() {
  const [animationData, setAnimationData] = React.useState(
    data.map(item => ({ ...item, users: 0, sessions: 0 }))
  )

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationData(data)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={animationData}>
        <defs>
          <linearGradient id="users" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ea580c" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#ea580c" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="sessions" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fb923c" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#fb923c" stopOpacity={0}/>
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
        />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        {label}
                      </span>
                      {payload.map((entry, index) => (
                        <span key={index} className="font-bold" style={{ color: entry.color }}>
                          {entry.dataKey}: {entry.value?.toLocaleString()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Area
          type="monotone"
          dataKey="users"
          stroke="#ea580c"
          fillOpacity={1}
          fill="url(#users)"
          strokeWidth={2}
          animationBegin={0}
          animationDuration={2000}
        />
        <Area
          type="monotone"
          dataKey="sessions"
          stroke="#fb923c"
          fillOpacity={1}
          fill="url(#sessions)"
          strokeWidth={2}
          animationBegin={300}
          animationDuration={2000}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
