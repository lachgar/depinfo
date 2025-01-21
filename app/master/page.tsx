"use client"

import { useState } from "react"
import CourseList from "../components/CourseList"

const masterCourses = [
  {
    semester: 1,
    courses: [
      {
        code: "M01",
        title: "Intelligence Artificielle Avancée",
        description: "Apprentissage profond, réseaux de neurones convolutifs, traitement du langage naturel.",
      },
      {
        code: "M02",
        title: "Sécurité des Systèmes d'Information",
        description: "Cryptographie, sécurité des réseaux, analyse de vulnérabilités.",
      },
      {
        code: "M03",
        title: "Big Data et Cloud Computing",
        description: "Traitement de données massives, architectures distribuées, services cloud.",
      },
    ],
  },
  {
    semester: 2,
    courses: [
      {
        code: "M04",
        title: "Développement Web et Mobile Avancé",
        description: "Frameworks modernes, architectures microservices, développement cross-platform.",
      },
      {
        code: "M05",
        title: "Recherche Opérationnelle",
        description: "Optimisation combinatoire, programmation linéaire, théorie des graphes.",
      },
      {
        code: "M06",
        title: "Projet de Recherche",
        description: "Méthodologie de recherche, rédaction scientifique, présentation de résultats.",
      },
    ],
  },
  // Ajoutez les autres semestres ici
]

export default function Master() {
  const [openSemesters, setOpenSemesters] = useState<number[]>([])

  const toggleSemester = (semester: number) => {
    setOpenSemesters((prev) => (prev.includes(semester) ? prev.filter((s) => s !== semester) : [...prev, semester]))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Master en Informatique</h1>
      <p className="text-xl mb-8">
        Notre programme de master offre une formation avancée en informatique, préparant les étudiants à la recherche et
        à l'industrie.
      </p>
      {masterCourses.map((semester) => (
        <div key={semester.semester} className="mb-8">
          <button
            onClick={() => toggleSemester(semester.semester)}
            className="w-full text-left bg-blue-100 hover:bg-blue-200 p-4 rounded-lg flex justify-between items-center"
          >
            <h3 className="text-2xl font-semibold">Semestre {semester.semester}</h3>
            <span>{openSemesters.includes(semester.semester) ? "▲" : "▼"}</span>
          </button>
          {openSemesters.includes(semester.semester) && (
            <CourseList semester={semester.semester} courses={semester.courses} />
          )}
        </div>
      ))}
    </div>
  )
}

