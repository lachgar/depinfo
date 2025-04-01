"use client";

import Image from "next/image";

interface Professor {
  name: string;
  title: string;
  specialization: string;
  imageUrl: string;
}

const professors: Professor[] = [
  {
    name: "Pr. Zahid Noureddine",
    title: "Chef de département, Maître de Conférences",
    specialization: "Didactique de l’Informatique",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Pr. Laannaoui My Driss",
    title: "Vice Chef de Département, Maître de Conférences Habilité",
    specialization: "Réseaux et Systèmes Distribués, Système d’exploitation, Intelligence Artificielle",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Pr. Lahoussaine Ait Ounejjar",
    title: "Maître de Conférences Habilité",
    specialization: "Réseaux et Systèmes Distribués, Intelligence Artificielle, IoT",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Pr. ELgharass",
    title: "Maître de Conférences Habilité",
    specialization: "Programmation, Algorithmique",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Pr. Ibnain",
    title: "Maître de Conférences",
    specialization: "Electronique, Architecture des ordinateurs, Bases de données",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Pr. Stitini Oumaima",
    title: "Maître de Conférences",
    specialization: "Intelligence Artificielle, Big Data, Programmation, Algorithmique, Web",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Pr. Nait Malek Youssef",
    title: "Maître de Conférences",
    specialization: "Intelligence Artificielle, IoT, Big Data, Programmation, Algorithmique",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Pr. Lachgar Mohamed",
    title: "Maître de Conférences Habilité",
    specialization:
      "Génie Logiciel, Programmation Web Mobile, Architecture Microservices, DevOps, Intelligence Artificielle",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Pr. Said MACHWATE",
    title: "Maître de Conférences",
    specialization: "Didactique de l’Informatique, Digital Skills, Technologies Educatives",
    imageUrl: "/placeholder.svg",
  }
];

export default function CorpsEnseignant() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-12">
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-2xl rounded-3xl">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 hover:text-blue-600 transition duration-300">
       👨‍🏫 Corps Enseignant
        </h1>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Une équipe de passionnés et d'experts, œuvrant chaque jour à transmettre leur savoir et faire évoluer la formation en informatique.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {professors.map((professor) => (
            <div
              key={professor.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <Image
                  src={professor.imageUrl}
                  alt={professor.name.toUpperCase()}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h2 className="text-lg font-bold text-gray-800 leading-snug">
                  {professor.name}
                </h2>
                <p className="text-sm text-gray-500 italic">{professor.title}</p>
                <p className="text-sm text-blue-700 font-medium leading-relaxed">
                  {professor.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
