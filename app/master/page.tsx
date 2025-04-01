"use client";

import { useState } from "react";

const masterData = [
  {
    category: "S1 : Tronc commun",
    courses: [
      "M1 - Ingénierie et technologies éducatives",
      "M2 - Statistiques appliquées à la recherche",
      "M3 - Didactique 1",
      "M4 - Ingénierie de formation : Curricula et programmes des matières scientifiques",
      "M5 - Sciences de l’éducation",
      "M6 - Langues étrangères 1",
      "M7 - Soft Skills",
    ],
  },
  {
    category: "S2 : Tronc commun",
    courses: [
      "M8 - Évaluation et Docimologie",
      "M9 - Digitalisation et mesure de l’évaluation",
      "M10 - Méthodologie de recherche",
      "M11 - Didactique 2",
      "M12 - Intelligence artificielle en éducation",
      "M13 - Langues étrangères 2",
      "M14 - Digital Skills",
    ],
  },
  {
    category: "S3 : Option - Technologies émergentes en éducation",
    courses: [
      "M15.4 - Programmation Avancées et DevOps",
      "M16.4 - Bases de Données avancée et Business Intelligence (BI)",
      "M17.4 - Développement Web et multiplateforme",
      "M18.4 - Intelligence Artificielle avancée",
      "M19.4 - Réalité Augmentée et Virtuelle en Éducation"
    ],
  },
  {
    category: "S4 : Projet de Fin d'Études (PFE)",
    courses: [
      "M20 - LANGUES ETRANGERES 3 (Anglais ; Français)",
      "M21 - Culture and Art skills",
      "M22 - PFE",
    ],
  },
];

const courseDescriptions = {
  "M1": "Ce module offre aux étudiants des outils pour concevoir des environnements d’apprentissage multimédia et intégrer des innovations pédagogiques telles que les classes inversées et la réalité augmentée.",
  "M2": "Sensibilisation aux outils de statistique descriptive et inférentielle pour analyser et résoudre des problèmes éducatifs.",
  "M3": "Approche des théories didactiques pour analyser et améliorer les pratiques d'enseignement des sciences et des mathématiques.",
  "M4": "Étude des méthodologies pour concevoir et évaluer des curriculums éducatifs.",
  "M5": "Exploration des concepts fondamentaux en sciences de l’éducation, y compris la pédagogie et la psychologie.",
  "M6": "Amélioration des compétences linguistiques en français et en anglais pour des applications académiques et professionnelles.",
  "M7": "Développement des compétences interpersonnelles et professionnelles comme le leadership et la gestion des conflits.",
  "M8": "Techniques d’évaluation pédagogique, incluant les outils de docimologie pour mesurer les performances des apprenants.",
  "M9": "Initiation à la digitalisation des évaluations éducatives et gestion des bases de données associées.",
  "M10": "Méthodologie de recherche pour la rédaction et la présentation de résultats scientifiques.",
  "M11": "Analyse approfondie des pratiques pédagogiques et concepts didactiques avancés.",
  "M12": "Applications concrètes de l’intelligence artificielle dans le domaine éducatif.",
  "M13": "Perfectionnement linguistique pour une communication efficace dans un contexte académique.",
  "M14": "Compétences numériques avancées, incluant l’utilisation d’outils collaboratifs et logiciels éducatifs.",
  "M15.4": "Approfondissement des compétences en programmation avancée, notamment en développement orienté objet, frameworks modernes JEE (Spring, Spring Boot ...), les microservices et DevOps.",
  "M16.4": "Compréhension des bases de données avancées et introduction à la Business Intelligence pour l’analyse et la prise de décision.",
  "M17.4": "Conception d’applications web et multiplateformes à l’aide de technologies modernes (NodeJs, NextJs, Flutter, React Native, etc.).",
  "M18.4": "Exploration de concepts avancés en intelligence artificielle, comme le deep learning et le traitement du langage naturel.",
  "M19.4": "Introduction à la réalité augmentée et virtuelle et à leurs applications dans l'éducation.",
  "M20": "Renforcement des compétences linguistiques et culturelles en anglais et en français.",
  "M21": "Comprendre l’histoire du Maroc, s’identifier à son patrimoine culturel et artistique, développer l’intelligence créative des étudiants à travers l’artisanat et diverses formes d’expression, tout en les engageant dans la création d’une œuvre d’art collective.",
  "M22": "Projet final intégrant toutes les compétences acquises pour résoudre un problème réel.",
};

export default function MasterPresentation() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-slate-100 to-blue-50">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 hover:text-blue-600 transition duration-300">
          🎓 Didactique des Sciences & Ingénierie Éducative
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Ce master propose plusieurs parcours spécialisés alliant pédagogie et technologie :
        </p>
        <ul className="list-disc list-inside mt-6 text-left text-gray-700 text-base max-w-xl mx-auto space-y-2">
          <li><strong>Technologies émergentes en éducation</strong></li>
          <li>Didactique des mathématiques</li>
          <li>Didactique des sciences physiques et chimie</li>
          <li>Didactique des sciences de la vie et de la terre</li>
        </ul>
      </header>
  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contenu principal */}
        <div className="lg:col-span-2 space-y-10">
          {masterData.map((section) => (
            <div
              key={section.category}
              className="bg-white border border-blue-100 shadow-xl rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(section.category)}
                className="w-full text-left bg-blue-600 text-white px-6 py-4 flex justify-between items-center hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition font-semibold text-lg rounded-t-2xl"
              >
                <span>{section.category}</span>
                <span>{openCategory === section.category ? "▲" : "▼"}</span>
              </button>
  
              {openCategory === section.category && (
                <div className="p-6 space-y-4 bg-slate-50">
                  <ul className="space-y-4">
                    {section.courses.map((course, index) => (
                      <li
                        key={index}
                        className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
                      >
                        <h3 className="text-blue-700 text-lg font-semibold mb-1">
                          {course.toUpperCase()}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {courseDescriptions[course.split(" - ")[0]] || "Description non disponible."}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
  
        {/* Coordonnateur */}
        <aside className="bg-white shadow-xl rounded-2xl p-6 border border-blue-100 h-fit">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">👤 Coordonnateur</h2>
          <p className="text-lg text-gray-700 mb-1">
            <strong>Pr. My Driss Laannaoui</strong>
          </p>
          <p className="text-md text-gray-700 mb-1">
            <strong>Rôle :</strong> Coordonnateur
          </p>
          <p className="text-md text-gray-700 mb-2">
            <strong>Email :</strong>{" "}
            <a
              href="mailto:d.laanaoui@uca.ma"
              className="text-blue-600 hover:underline"
            >
              d.laanaoui@uca.ma
            </a>
          </p>
          <p className="mt-6 text-sm text-gray-500 leading-relaxed">
            Pour toute information complémentaire, n’hésitez pas à le contacter directement.
          </p>
        </aside>
      </div>
    </div>
  );
}
