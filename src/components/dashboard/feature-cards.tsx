"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { IconSparkles, IconTrendingUp, IconTarget, IconRocket } from "@tabler/icons-react"
import { Card, CardContent } from "@/components/ui/card"
import { BorderBeam } from "@/components/magicui/border-beam"

const features = [

]

export function FeatureCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
            <BorderBeam size={60} duration={12} delay={index * 3} />
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.gradient} text-white shadow-sm`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-sm bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{feature.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
