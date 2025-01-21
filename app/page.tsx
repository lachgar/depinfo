import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Bienvenue au Département d'Informatique</h1>
      <p className="text-xl mb-8">École Normale Supérieure, Université Cadi Ayyad</p>
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Présentation</h2>
          <p className="mb-4">
            Notre département offre une formation de qualité en informatique, combinant théorie et pratique pour
            préparer les étudiants aux défis du monde numérique.
          </p>
          <Link href="/presentation" className="text-blue-600 hover:underline">
            En savoir plus
          </Link>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Formations</h2>
          <ul className="list-disc list-inside">
            <li>
              <Link href="/licence" className="text-blue-600 hover:underline">
                Licence en Informatique
              </Link>
            </li>
            <li>
              <Link href="/master" className="text-blue-600 hover:underline">
                Master en Informatique
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

