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
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Pr. Laannaoui My Driss",
    title: "Vice Chef de Département, Maître de Conférences Habilité",
    specialization: "Réseaux et Systèmes Distribués, Système d’exploitation, Intelligence Artificielle",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Pr. Lahoussaine Ait Ounejjar",
    title: "Maître de Conférences Habilité",
    specialization: "Réseaux et Systèmes Distribués, Intelligence Artificielle, IoT",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Pr. Stitini Oumaima",
    title: "Maître de Conférences",
    specialization: "Intelligence Artificielle, Big Data, Programmation",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Pr. Nait Malek Youssef",
    title: "Maître de Conférences",
    specialization: "Intelligence Artificielle, IoT, Big Data, Programmation",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Pr. Lachgar Mohamed",
    title: "Maître de Conférences Habilité",
    specialization:
      "Génie Logiciel, Programmation Web Mobile, Architecture Microservices, DevOps, Intelligence Artificielle",
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
];

export default function CorpsEnseignant() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Corps Enseignant
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Notre équipe pédagogique est composée de spécialistes reconnus, chacun
          contribuant à l'excellence de notre département et à la formation des
          futurs experts en informatique.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {professors.map((professor) => (
            <div
              key={professor.name}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform transition hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={professor.imageUrl || "/placeholder.svg"}
                  alt={professor.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {professor.name}
                </h2>
                <p className="text-sm text-gray-500">{professor.title}</p>
                <p className="text-blue-600 font-medium">
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
