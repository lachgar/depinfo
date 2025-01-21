"use client";

import { useState } from "react";
import Image from "next/image";
import PresentationSection from "../components/PresentationSection";

export default function Presentation() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    { id: "mission", label: "Notre Mission" },
    { id: "vision", label: "Notre Vision" },
    { id: "valeurs", label: "Nos Valeurs" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 hover:text-blue-600 transition">
          Présentation du Département d'Informatique
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16 items-center">
          {/* Photo: 40% */}
          <div className="md:col-span-2 flex justify-center">
            <div className="overflow-hidden rounded-lg shadow-lg max-w-full">
              <Image
                src="depinfo.jpg" // Chemin vers votre image
                alt="Formation des Enseignants"
                width={400} // Largeur adaptée pour une mise en page compacte
                height={300}
                className="transition-transform duration-300 transform hover:scale-105 object-cover" // Maintient la couverture dans l’espace défini
              />
            </div>
          </div>

          {/* Description: 60% */}
          <div className="md:col-span-3 space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Le département met un point d'honneur à former des enseignants qualifiés dans le domaine de l'informatique.
              Cette formation combine des compétences pédagogiques solides avec une expertise technique avancée.
            </p>
            <p className="text-lg">
              Grâce à un programme structuré, nos futurs enseignants maîtrisent non seulement les concepts fondamentaux
              de l'informatique, mais aussi les techniques d'enseignement interactif et d'adaptation aux besoins des élèves.
            </p>
          </div>
        </div>



        <PresentationSection title="Notre Programme Pédagogique">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Notre formation repose sur une approche équilibrée entre théorie et
              pratique, mettant en avant :
            </p>
            <ul className="list-disc pl-8 space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-semibold">•</span>
                <span>
                  <strong>La didactique de l'informatique :</strong> Méthodes
                  d'enseignement adaptées aux concepts abstraits de programmation et
                  d'algorithmique.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-semibold">•</span>
                <span>
                  <strong>L'intégration des outils numériques :</strong> Utilisation des
                  technologies éducatives pour enrichir l'expérience d'apprentissage.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-semibold">•</span>
                <span>
                  <strong>La gestion de classe et la pédagogie différenciée :</strong>{" "}
                  Répondre aux besoins d'apprenants de niveaux variés.
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Les Spécialités Techniques
              </h2>
              <p className="text-lg leading-relaxed">
                En complément de la pédagogie, notre programme met un accent particulier
                sur les compétences techniques pour préparer les enseignants à former
                efficacement les apprenants dans des domaines variés et en pleine
                évolution :
              </p>
              <ul className="list-disc pl-8 space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-semibold">•</span>
                  <span>
                    <strong>Développement Web et Mobile :</strong> Conception et
                    réalisation d'applications modernes avec des frameworks comme React,
                    Angular, et Flutter.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-semibold">•</span>
                  <span>
                    <strong>Réseaux et Systèmes Distribués :</strong> Maîtrise des
                    protocoles réseau (TCP/IP, HTTP) et des architectures cloud pour
                    répondre aux besoins des infrastructures modernes.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-semibold">•</span>
                  <span>
                    <strong>Intelligence Artificielle :</strong> Développement de
                    solutions basées sur l'apprentissage supervisé et non supervisé,
                    réseaux neuronaux et vision par ordinateur.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600 font-semibold">•</span>
                  <span>
                    <strong>Big Data :</strong> Analyse, traitement et visualisation de
                    grandes quantités de données avec des outils comme Hadoop, Spark et
                    Python.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </PresentationSection>


        <PresentationSection title="Nos Objectifs">
          <div className="mb-6">
            <div className="flex border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 text-sm font-medium ${activeTab === tab.id
                    ? "border-b-4 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-blue-500 transition"
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 text-gray-700">
            {activeTab === "mission" && (
              <p>
                Former des pédagogues en informatique capables d'inspirer et de guider la prochaine génération de
                professionnels tout en adaptant les pratiques éducatives aux évolutions technologiques.
              </p>
            )}
            {activeTab === "vision" && (
              <p>
                Devenir un centre d'excellence dans la formation pédagogique en informatique, où l'enseignement et la
                recherche convergent pour produire un impact éducatif durable.
              </p>
            )}
            {activeTab === "valeurs" && (
              <ul className="list-disc pl-6 space-y-2">
                <li>Innovation pédagogique et excellence académique</li>
                <li>Adaptabilité aux évolutions technologiques</li>
                <li>Collaboration et apprentissage continu</li>
                <li>Éthique et responsabilité professionnelle</li>
              </ul>
            )}
          </div>
        </PresentationSection>

        <PresentationSection title="Nos Domaines d'Expertise">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition">
                Didactique et pédagogie
              </h3>
              <p>
                Développement de méthodes d'enseignement adaptées à l'informatique, gestion de classe, et pédagogie
                différenciée.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition">
                Développement informatique
              </h3>
              <p>
                Programmation, algorithmique, génie logiciel et systèmes d'information pour une expertise technique
                complète.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition">
                Développement Web et Mobile
              </h3>
              <p>
                Création d'applications web modernes (React, Angular) et mobiles (React Native, Flutter) pour répondre
                aux besoins du marché.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition">
                Microservices et DevOps
              </h3>
              <p>
                Conception d'architectures scalables avec des microservices, intégration de pipelines CI/CD pour une
                livraison continue.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition">
                Big Data et Analyse de Données
              </h3>
              <p>
                Traitement et analyse des grandes masses de données avec Hadoop, Spark, et Python pour des insights
                stratégiques.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600 transition">
                Réalité Virtuelle et Augmentée (VR/AR)
              </h3>
              <p>
                Développement d'environnements immersifs et interactifs pour la formation, l'éducation, et les
                industries.
              </p>
            </div>
          </div>
        </PresentationSection>
      </div>
    </div>
  );
}
