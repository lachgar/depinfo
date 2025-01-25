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
      "M15.4 - Techniques de Programmation Avancées",
      "M16.4 - Bases de Données avancée et Business Intelligence (BI)",
      "M17.4 - Développement Web et multiplateforme",
      "M18.4 - Intelligence Artificielle avancée",
      "M19.4 - Réalité Augmentée et Virtuelle en Éducation",
      "M20 - LC2 (1/3 Anglais ; 1/3 Français ; 1/3 Culture)",
      "M21 - Langues étrangères 3",
    ],
  },
  {
    category: "S4 : Projet de Fin d'Études (PFE)",
    courses: [
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
  "M21": "Acquisition de compétences avancées en communication multilingue.",
  "M22": "Projet final intégrant toutes les compétences acquises pour résoudre un problème réel.",
};

export default function MasterPresentation() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Didactique des Sciences et Ingénierie Éducative</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Découvrez les différents parcours offerts dans le cadre de ce master :
        </p>
        <ul className="list-disc list-inside text-left mt-4 text-gray-600 max-w-xl mx-auto">
          <li>Didactique des mathématiques</li>
          <li>Didactique des sciences physiques et chimie</li>
          <li>Didactique des sciences de la vie et de la terre</li>
          <li> <strong>Technologies émergentes en éducation</strong></li>
        </ul>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {masterData.map((section) => (
            <div key={section.category} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(section.category)}
                className="w-full text-left bg-blue-500 text-white px-6 py-4 flex justify-between items-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <h2 className="text-2xl font-semibold">{section.category}</h2>
                <span className="text-xl">{openCategory === section.category ? "▲" : "▼"}</span>
              </button>
              {openCategory === section.category && (
                <div className="p-6 space-y-4">
                  <ul className="space-y-4">
                    {section.courses.map((course, index) => (
                      <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <h3 className="text-lg font-bold text-blue-700">{course}</h3>
                        <p className="text-gray-700 mt-2">
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

        {/* Coordinator section */}
        <aside className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Coordonnateur</h2>
          <p className="text-lg text-gray-700">
            <strong>Pr. My Driss Laannaoui</strong>
          </p>
          <p className="text-lg text-gray-700">
            <strong>Rôle :</strong> Coordonnateur
          </p>
          <p className="text-lg text-gray-700">
            <strong>Email :</strong>{" "}
            <a
              href="mailto:d.laanaoui@uca.ma"
              className="text-blue-600 hover:underline"
            >
              d.laanaoui@uca.ma
            </a>
          </p>
          <p className="mt-6 text-sm text-gray-500">
            Pour toute information supplémentaire, contactez le coordonnateur.
          </p>
        </aside>
      </div>
    </div>
  );
}
