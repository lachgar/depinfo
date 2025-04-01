"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import PresentationSection from "../components/PresentationSection";

export default function ProjetsEtudiants() {
  const projets = [
    {
      title: "Projet POO et IHM",
      description: "Programmation orientée objet avec Java, IHM, JDBC, et modélisation UML.",
      href: "https://enspoo.vercel.app/",
    },
    {
      title: "Projet Web",
      description: "Conception de sites dynamiques avec PHP et JavaScript.",
      href: "/projets-galerie/web",
    },
    {
      title: "Projet Web Avancé et Mobile",
      description: "Développement full-stack avec Node.js et applications mobiles Android natives.",
      href: "/projets-galerie/web-mobile",
    },
    {
      title: "Projet Machine Learning",
      description: "Analyse de données, régression, classification avec Python et Scikit-learn.",
      href: "/projets-galerie/ml",
    },
    {
      title: "Projet Deep Learning",
      description: "Conception de réseaux neuronaux pour la vision par ordinateur et le traitement du langage.",
      href: "/projets-galerie/dl",
    },
    {
      title: "Projet Big Data",
      description: "Traitement distribué avec Hadoop et Spark, visualisation avec Power BI ou Tableau.",
      href: "/projets-galerie/bigdata",
    },
    {
      title: "Projet Réalité Virtuelle & Augmentée",
      description: "Développement d’expériences immersives pour la formation et la simulation à l’aide de moteurs comme Unity ou WebXR.",
      href: "/projets-galerie/vr-ar",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-12">
      <div className="max-w-6xl mx-auto p-8 bg-white shadow-2xl rounded-3xl">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 hover:text-blue-600 transition duration-300">
         🎓 Projets Réalisés par les Étudiants
        </h1>

        <PresentationSection title="📌 Aperçu des Réalisations">
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            Nos étudiants explorent des technologies de pointe à travers des projets variés, démontrant leur expertise et leur créativité dans des domaines innovants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projets.map((projet, index) => (
              <Card
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 hover:text-blue-700 transition-colors">
                    <Link href={projet.href}>{projet.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {projet.description}
                  </p>
                  <Link
                    href={projet.href}
                    className="inline-block text-sm font-semibold text-blue-600 hover:underline"
                  >
                    🔍 Voir les détails
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </PresentationSection>
      </div>
    </div>
  );
}