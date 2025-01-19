import React, { useState, useEffect } from 'react'
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const subjects = ['Mathematics', 'Chemistry', 'Physics']

const subjectData = {
  Mathematics: [
    { phase: "Priority A", chapter: "Vector Algebra", weightage: 6.6 },
    { phase: "Priority A", chapter: "Three-Dimensional Geometry", weightage: 9.7 },
    { phase: "Priority A", chapter: "Sequences and Series", weightage: 7.2 },
    { phase: "Priority A", chapter: "Binomial Theorem", weightage: 6.0 },
    { phase: "Priority A", chapter: "Functions", weightage: 5.5 },
    { phase: "Priority A", chapter: "Definite Integration", weightage: 6.9 },
    { phase: "Priority A", chapter: "Differential Equations", weightage: 6.0 },
    { phase: "Priority B", chapter: "Matrices", weightage: 4.8 },
    { phase: "Priority B", chapter: "Determinants", weightage: 3.6 },
    { phase: "Priority B", chapter: "Application of Derivatives", weightage: 4.8 },
    { phase: "Priority B", chapter: "Statistics", weightage: 3.0 },
    { phase: "Priority B", chapter: "Straight Lines", weightage: 3.9 },
    { phase: "Priority B", chapter: "Permutation Combination", weightage: 4.4 },
    { phase: "Priority B", chapter: "Probability", weightage: 5.0 },
    { phase: "Priority B", chapter: "Complex Number", weightage: 4.5 },
    { phase: "Priority C", chapter: "Quadratic Equation", weightage: 3.5 },
    { phase: "Priority C", chapter: "Circle", weightage: 3.8 },
    { phase: "Priority C", chapter: "Limits", weightage: 2.9 },
    { phase: "Priority C", chapter: "Area Under Curves", weightage: 4.2 },
    { phase: "Priority C", chapter: "Sets and Relations", weightage: 3.0 },
    { phase: "Priority C", chapter: "Differentiation", weightage: 1.5 },
    { phase: "Priority C", chapter: "Continuity and Differentiability", weightage: 2.8 },
    { phase: "Priority D", chapter: "Parabola", weightage: 2.8 },
    { phase: "Priority D", chapter: "Ellipse", weightage: 1.8 },
    { phase: "Priority D", chapter: "Hyperbola", weightage: 2.5 },
    { phase: "Priority D", chapter: "Inverse Trigonometric Functions", weightage: 1.9 },
    { phase: "Priority D", chapter: "Trigonometric Ratios & Identities", weightage: 1.1 },
    { phase: "Priority D", chapter: "Trigonometric Equations", weightage: 1.7 },
    { phase: "Priority D", chapter: "Indefinite Integration", weightage: 1.3 },
  ],
  Chemistry: [
    { phase: "Priority A", chapter: "General Organic Chemistry", weightage: 10.3 },
    { phase: "Priority A", chapter: "Hydrocarbons", weightage: 4.4 },
    { phase: "Priority A", chapter: "Chemical Bonding", weightage: 6.8 },
    { phase: "Priority A", chapter: "Coordination Compounds", weightage: 7.5 },
    { phase: "Priority A", chapter: "d and f Block Elements", weightage: 6.0 },
    { phase: "Priority A", chapter: "Structure of Atom", weightage: 4.9 },
    { phase: "Priority A", chapter: "Solutions", weightage: 4.4 },
    { phase: "Priority B", chapter: "Thermodynamics (C)", weightage: 4.5 },
    { phase: "Priority B", chapter: "Electrochemistry", weightage: 4.7 },
    { phase: "Priority B", chapter: "Alcohols Phenols and Ethers", weightage: 4.4 },
    { phase: "Priority B", chapter: "Aldehydes and Ketones", weightage: 3.7 },
    { phase: "Priority B", chapter: "Amines", weightage: 4.4 },
    { phase: "Priority B", chapter: "Biomolecules", weightage: 4.0 },
    { phase: "Priority C", chapter: "Periodicity in Properties", weightage: 3.5 },
    { phase: "Priority C", chapter: "Mole Concept", weightage: 4.0 },
    { phase: "Priority C", chapter: "Redox Reactions", weightage: 2.6 },
    { phase: "Priority C", chapter: "Chemical Kinetics", weightage: 4.1 },
    { phase: "Priority C", chapter: "Haloalkanes and Haloarenes", weightage: 3.5 },
    { phase: "Priority D", chapter: "Chemical Equilibrium", weightage: 1.7 },
    { phase: "Priority D", chapter: "Ionic Equilibrium", weightage: 2.4 },
    { phase: "Priority D", chapter: "p Block Elements (Group 13 & 14)", weightage: 2.3 },
    { phase: "Priority D", chapter: "p Block Elements (Group 15, 16, 17 & 18)", weightage: 4.1 },
    { phase: "Priority D", chapter: "Carboxylic Acid Derivatives", weightage: 1.1 },
    { phase: "Priority D", chapter: "Practical Chemistry", weightage: 1.7 },
  ],
  Physics: [
    { phase: "Priority A", chapter: "Current Electricity", weightage: 8.6 },
    { phase: "Priority A", chapter: "Electrostatics", weightage: 5.6 },
    { phase: "Priority A", chapter: "Magnetic Effects of Current", weightage: 6.0 },
    { phase: "Priority A", chapter: "Laws of Motion", weightage: 5.0 },
    { phase: "Priority A", chapter: "Gravitation", weightage: 5.1 },
    { phase: "Priority A", chapter: "Atomic Physics", weightage: 3.5 },
    { phase: "Priority A", chapter: "Dual Nature of Matter", weightage: 4.1 },
    { phase: "Priority B", chapter: "Mathematics in Physics", weightage: 2.7 },
    { phase: "Priority B", chapter: "Units and Dimensions", weightage: 3.0 },
    { phase: "Priority B", chapter: "Semiconductors", weightage: 4.6 },
    { phase: "Priority B", chapter: "Motion in One Dimension", weightage: 4.0 },
    { phase: "Priority B", chapter: "Wave Optics", weightage: 3.4 },
    { phase: "Priority B", chapter: "Ray Optics", weightage: 4.9 },
    { phase: "Priority B", chapter: "Alternating Current", weightage: 4.7 },
    { phase: "Priority B", chapter: "Thermodynamics", weightage: 3.8 },
    { phase: "Priority B", chapter: "Mechanical Properties of Fluids", weightage: 4.1 },
    { phase: "Priority C", chapter: "Work Power Energy", weightage: 3.8 },
    { phase: "Priority C", chapter: "Capacitance", weightage: 3.5 },
    { phase: "Priority C", chapter: "Nuclear Physics", weightage: 3.5 },
    { phase: "Priority C", chapter: "Kinetic Theory of Gases", weightage: 3.6 },
    { phase: "Priority C", chapter: "Electromagnetic Waves", weightage: 3.1 },
    { phase: "Priority C", chapter: "Waves and Sound", weightage: 3.1 },
    { phase: "Priority C", chapter: "Rotational Motion", weightage: 3.8 },
    { phase: "Priority D", chapter: "Motion In Two Dimensions", weightage: 3.2 },
    { phase: "Priority D", chapter: "Electromagnetic Induction", weightage: 3.0 },
    { phase: "Priority D", chapter: "Oscillations", weightage: 3.0 },
    { phase: "Priority D", chapter: "Communication System", weightage: 2.6 },
    { phase: "Priority D", chapter: "Mechanical Properties of Solids", weightage: 2.8 },
    { phase: "Priority D", chapter: "Center of Mass Momentum", weightage: 2.3 },
    { phase: "Priority D", chapter: "Thermal Properties of Matter", weightage: 2.3 },
    { phase: "Priority D", chapter: "Experimental Physics", weightage: 1.6 },
  ],
}

const years = ["Short Notes", "Mains PYQs", "Mains errors", "Adv Notes", "Adv PYQs (and Qs)", "Adv Errors"]

export default function Component() {
  const [completedTopics, setCompletedTopics] = useState<{[key: string]: boolean}>({})

  useEffect(() => {
    const savedData = localStorage.getItem('jeeCompletedTopics')
    if (savedData) {
      setCompletedTopics(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('jeeCompletedTopics', JSON.stringify(completedTopics))
  }, [completedTopics])

  const toggleTopic = (subject: string, chapter: string, year: string) => {
    setCompletedTopics(prev => ({
      ...prev,
      [`${subject}-${chapter}-${year}`]: !prev[`${subject}-${chapter}-${year}`]
    }))
  }

  const calculateProgress = (subject: string, phase: string) => {
    const phaseTopics = subjectData[subject].filter(topic => topic.phase === phase)
    const totalWeightage = phaseTopics.reduce((sum, topic) => sum + topic.weightage, 0)
    const completedWeightage = phaseTopics.reduce((sum, topic) => {
      const topicProgress = years.filter(year => completedTopics[`${subject}-${topic.chapter}-${year}`]).length / years.length
      return sum + (topic.weightage * topicProgress)
    }, 0)
    return (completedWeightage / totalWeightage) * 100
  }

  const calculateTotalProgress = (subject: string) => {
    const totalWeightage = subjectData[subject].reduce((sum, topic) => sum + topic.weightage, 0)
    const completedWeightage = subjectData[subject].reduce((sum, topic) => {
      const topicProgress = years.filter(year => completedTopics[`${subject}-${topic.chapter}-${year}`]).length / years.length
      return sum + (topic.weightage * topicProgress)
    }, 0)
    return completedWeightage
  }

  return (
    <div className="container mx-auto p-4 space-y-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold text-center mb-8">IIT JEE 2025 -  Tracker</h1>

      <Tabs defaultValue="Mathematics" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          {subjects.map(subject => (
            <TabsTrigger key={subject} value={subject}>
              {subject}
            </TabsTrigger>
          ))}
        </TabsList>

        {subjects.map(subject => (
          <TabsContent key={subject} value={subject}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{subject} Topics Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="Priority A">
                  <TabsList className="grid w-full grid-cols-4 mb-4">
                    {["Priority A", "Priority B", "Priority C", "Priority D"].map(phase => (
                      <TabsTrigger key={phase} value={phase}>
                        {phase}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {["Priority A", "Priority B", "Priority C", "Priority D"].map(phase => (
                    <TabsContent key={phase} value={phase}>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[50%]">Chapter</TableHead>
                            <TableHead>Weightage</TableHead>
                            {years.map(year => (
                              <TableHead key={year}>{year}</TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {subjectData[subject].filter(topic => topic.phase === phase).map((topic, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{topic.chapter}</TableCell>
                              <TableCell>{topic.weightage}</TableCell>
                              {years.map(year => (
                                <TableCell key={year}>
                                  <Checkbox
                                    checked={completedTopics[`${subject}-${topic.chapter}-${year}`] || false}
                                    onCheckedChange={() => toggleTopic(subject, topic.chapter, year)}
                                  />
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{subject} Progress by Priority</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {["Priority A", "Priority B", "Priority C", "Priority D"].map(phase => (
                    <div key={phase} className="space-y-2">
                      <h3 className="text-lg font-semibold">{phase}</h3>
                      <Progress value={calculateProgress(subject, phase)} className="w-full" />
                      <p className="text-sm text-muted-foreground">{calculateProgress(subject, phase).toFixed(2)}% Complete</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{subject} Total  Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={calculateTotalProgress(subject) / subjectData[subject].reduce((sum, topic) => sum + topic.weightage, 0) * 100} className="w-full" />
                <div className="mt-4 text-center">
                  <p className="text-xl font-semibold">
                    {calculateTotalProgress(subject).toFixed(2)} / {subjectData[subject].reduce((sum, topic) => sum + topic.weightage, 0).toFixed(2)} Weightage Completed
                  </p>
                  <p className="text-lg font-medium text-primary">
                    {(calculateTotalProgress(subject) / subjectData[subject].reduce((sum, topic) => sum + topic.weightage, 0) * 100).toFixed(2)}% Complete
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

