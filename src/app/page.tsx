"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentActivity, ActivityMarquee } from "@/components/dashboard/recent-activity"
import { FeatureCards } from "@/components/dashboard/feature-cards"
import { RevenueChart } from "@/components/charts/revenue-chart"
import { AnalyticsChart } from "@/components/charts/analytics-chart"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Dashboard Overview</h2>
            <p className="text-muted-foreground">
              Welcome back! Here&apos;s what&apos;s happening with your business today.
            </p>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <DashboardStats />

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <FeatureCards />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="col-span-1 md:col-span-2 lg:col-span-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Revenue Overview</CardTitle>
                <CardDescription>
                  Monthly revenue performance for the current year
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <RevenueChart />
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="col-span-1 md:col-span-2 lg:col-span-3"
          >
            <RecentActivity />
          </motion.div>
        </div>

        {/* Analytics and Activity Feed */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Analytics Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">User Analytics</CardTitle>
                <CardDescription>
                  User engagement and session data over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnalyticsChart />
              </CardContent>
            </Card>
          </motion.div>

          {/* Live Activity Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <ActivityMarquee />
          </motion.div>
        </div>

        {/* Additional Features Tab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white">Overview</TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white">Analytics</TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Commonly used actions and shortcuts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="cursor-pointer border-dashed hover:border-primary transition-colors">
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-sm font-medium">Add New User</span>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer border-dashed hover:border-primary transition-colors">
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-sm font-medium">Generate Report</span>
                      </CardContent>
                    </Card>
                    <Card className="cursor-pointer border-dashed hover:border-primary transition-colors">
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-sm font-medium">View Settings</span>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>
                    Detailed analytics and performance metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Advanced analytics features coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                  <CardDescription>
                    Generate and download various reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Report generation features coming soon...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
