import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 py-16 px-6 sm:px-8 lg:px-20">
      {/* Main Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-800 tracking-tight mb-4">
          🎓 Bienvenue au Département d'Informatique
        </h1>
        <p className="text-lg text-gray-600">
          École Normale Supérieure · Université Cadi Ayyad · Marrakech
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Présentation Section */}
        <section className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-between border border-blue-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              📘 Présentation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Le département propose une formation de haut niveau en informatique, mêlant théorie rigoureuse et pratique innovante pour former les pédagogues et les experts de demain.
            </p>
          </div>
          <Link
            href="/presentation"
            className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300 self-start"
          >
            En savoir plus
          </Link>
        </section>

        {/* Formations Section */}
        <section className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎓 Formations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <Link
                href="/licence"
                className="text-blue-600 font-medium hover:underline"
              >
                Licence d'Éducation : Spécialité Informatique
              </Link>
            </li>
            <li>
              <Link
                href="/master"
                className="text-blue-600 font-medium hover:underline"
              >
                Master technologies émergentes en éducation
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}