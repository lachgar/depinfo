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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 px-6 py-16">
      <div className="max-w-7xl mx-auto p-10 bg-white shadow-2xl rounded-3xl">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 hover:text-blue-600 transition duration-300">
      🎓 Présentation du Département d'Informatique
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-20 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/depinfo.jpg"
                alt="Formation des Enseignants"
                width={400}
                height={300}
                className="transition-transform duration-300 transform hover:scale-105 object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-3 space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Le département forme des enseignants qualifiés en informatique en associant des compétences pédagogiques
              solides à une expertise technique avancée.
            </p>
            <p>
              Grâce à un programme structuré, les futurs enseignants maîtrisent les fondements de l'informatique ainsi
              que des méthodes d'enseignement innovantes adaptées aux besoins des apprenants.
            </p>
          </div>
        </div>

        <PresentationSection title="🎓 Notre Programme Pédagogique">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              La formation adopte une approche équilibrée entre théorie et pratique :
            </p>
            <ul className="list-disc pl-8 space-y-4">
              <li><strong>Didactique de l'informatique :</strong> Méthodes d'enseignement adaptées aux concepts abstraits.</li>
              <li><strong>Outils numériques :</strong> Technologies éducatives pour enrichir l'apprentissage.</li>
              <li><strong>Gestion de classe :</strong> Pédagogie différenciée pour répondre à la diversité des profils.</li>
            </ul>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Spécialités Techniques</h2>
              <ul className="list-disc pl-8 space-y-4">
                <li><strong>Développement Web & Mobile :</strong> React, Angular, Flutter.</li>
                <li><strong>Réseaux & Cloud :</strong> TCP/IP, HTTP, infrastructures modernes.</li>
                <li><strong>Intelligence Artificielle :</strong> Apprentissage machine, vision, NLP.</li>
                <li><strong>Big Data :</strong> Hadoop, Spark, traitement massif de données.</li>
              </ul>
            </div>
          </div>
        </PresentationSection>

        <PresentationSection title="🎯 Nos Objectifs">
          <div className="mb-6">
            <div className="flex border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === tab.id
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
          <div className="mt-6 text-gray-700 text-lg">
            {activeTab === "mission" && (
              <p>
                Former des pédagogues en informatique capables d’inspirer, guider et innover dans l’enseignement
                secondaire, en intégrant les évolutions technologiques.
              </p>
            )}
            {activeTab === "vision" && (
              <p>
                Être un pôle d’excellence en formation pédagogique en informatique, conjuguant expertise technique et
                engagement éducatif durable.
              </p>
            )}
            {activeTab === "valeurs" && (
              <ul className="list-disc pl-6 space-y-2">
                <li>Innovation, excellence pédagogique</li>
                <li>Agilité face aux avancées technologiques</li>
                <li>Apprentissage collaboratif et continu</li>
                <li>Éthique, responsabilité professionnelle</li>
              </ul>
            )}
          </div>
        </PresentationSection>

        <PresentationSection title="🧠 Domaines d'Expertise">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Didactique et pédagogie</h3>
              <p>Enseignement, gestion de classe, pédagogie différenciée, numérique éducatif.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Développement informatique</h3>
              <p>Algorithmique, génie logiciel, systèmes d’information.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Web et Mobile</h3>
              <p>Applications modernes (React, Angular, Android, Flutter).</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Microservices & DevOps</h3>
              <p>Architecture modulaire, CI/CD, pipelines de déploiement automatisés.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Big Data & Analyse</h3>
              <p>Volume, vitesse, variété – Hadoop, Spark, visualisation intelligente.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-800">Réalité Virtuelle et Augmentée</h3>
              <p>Création d’environnements immersifs pour l’apprentissage et la simulation.</p>
            </div>
          </div>
        </PresentationSection>
      </div>
    </div>
  );
}
