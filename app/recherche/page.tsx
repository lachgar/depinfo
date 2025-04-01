"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import PresentationSection from "../components/PresentationSection";

export default function StructuresRecherche() {
  const structures = [
    {
      title: "INSIGHT Lab",
      subtitle: "Intelligent Systems and Global High-Tech Research Team",
      institution: "Higher Normal School, Marrakech",
      description:
        "INSIGHT Lab is a leading research team at the Higher Normal School, part of the University Cadi Ayyad. This team is associated with the Laboratoire d'Ingénierie Informatique et Systèmes (L2IS), focusing on intelligent systems and advanced technologies to address global challenges through innovation and scientific excellence.",
      href: "https://lab-en26.vercel.app",
    },
    {
      title: "LIRDEF",
      subtitle: "Laboratoire Interdisciplinaire de Recherche en Didactique, Education et Formation",
      institution: "Higher Normal School, Marrakech",
      description:
        "Le LIRDEF se consacre à l'étude de la didactique, de la formation des enseignants et de l'évolution des pratiques éducatives. Il s'inscrit dans une démarche interdisciplinaire reliant les sciences de l'éducation, la psychologie et les sciences du langage.",
      href: "https://www.uca.ma/public/files/docs/site-163-51a7a36016e35c6b8043c0bb16144b70-1106660005.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-12">
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-2xl rounded-3xl">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 hover:text-blue-600 transition duration-300">
          🔬 Structures de Recherche du Département
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {structures.map((structure, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-shadow duration-300 rounded-2xl border border-gray-200 bg-white"
            >
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-blue-800">
                  {structure.title}
                </h2>
                <h3 className="text-md font-medium text-gray-700 italic">
                  {structure.subtitle}
                </h3>
                <p className="text-sm text-gray-500">{structure.institution}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {structure.description}
                </p>
                <Link
                  href={structure.href}
                  target="_blank"
                  className="inline-block text-blue-600 text-sm font-medium hover:underline"
                >
                  En savoir plus →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}