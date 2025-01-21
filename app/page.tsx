import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Bienvenue au Département d'Informatique
        </h1>
        <p className="text-base sm:text-lg mt-4 text-gray-600">
          École Normale Supérieure, Université Cadi Ayyad
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Présentation Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Présentation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Notre département offre une formation de qualité en informatique, combinant théorie et pratique pour
              préparer les étudiants aux défis du monde numérique.
            </p>
          </div>
          <Link
            href="/presentation"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300 mt-4 self-start"
          >
            En savoir plus
          </Link>
        </section>

        {/* Formations Section */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Formations
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-4">
            <li>
              <Link
                href="/licence"
                className="text-blue-600 font-medium hover:underline transition duration-300"
              >
                Licence en Informatique
              </Link>
            </li>
            <li>
              <Link
                href="/master"
                className="text-blue-600 font-medium hover:underline transition duration-300"
              >
                Master en Informatique
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
