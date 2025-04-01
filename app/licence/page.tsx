"use client";

import { useState } from "react";

const licenceCourses = [
  {
    "semester": 1,
    "courses": [
      {
        "code": "M01",
        "title": "Analyse 1 - Suites numériques et fonctions",
        "description": "Exploration des nombres réels, des propriétés des suites numériques, et des fonctions réelles. Comprend les concepts de convergence, continuité, dérivabilité et développement limité avec des applications dans les domaines scientifiques et techniques."
      },
      {
        "code": "M02",
        "title": "Algèbre 1 - Généralités et arithmétique dans Z",
        "description": "Introduction aux fondamentaux de l'algèbre et de l'arithmétique, incluant la logique mathématique, les ensembles, les relations binaires, et les opérations dans Z, avec un accent sur les applications pratiques."
      },
      {
        "code": "M03",
        "title": "Physique 1 - Mécanique et thermodynamique",
        "elements": [
          "M03.E1 : MÉCANIQUE DU POINT MATERIEL",
          "M03.E2 : THERMODYNAMIQUE"
        ],
        "description": "Étude approfondie de la cinématique et de la dynamique du point matériel, des lois de Newton, ainsi que des principes fondamentaux de la thermodynamique appliqués aux systèmes physiques."
      },
      {
        "code": "M05",
        "title": "Architecture des ordinateurs 1",
        "description": "Bases des systèmes informatiques incluant les composants matériels, le codage binaire, les systèmes de numération, et l'algèbre de Boole appliquée à la simplification des fonctions logiques."
      },
      {
        "code": "M06",
        "title": "Algorithmique et programmation 1",
        "description": "Introduction à l'algorithmique et à la programmation en C et Python, mettant l'accent sur les structures conditionnelles, les boucles, la gestion des tableaux, et les bases de la modularité."
      },
      {
        "code": "M07",
        "title": "Module transversal 1",
        "description": "Développement des compétences transversales incluant la méthodologie de travail universitaire, la gestion du temps, l'utilisation des outils numériques (suite Office), et les bases des langues étrangères."
      },
      {
        "code": "M08",
        "title": "Action éducative en établissement scolaire 1",
        "description": "Observation du milieu éducatif et analyse des dynamiques scolaires. Introduction à la planification pédagogique et à l'organisation des activités en classe."
      }
    ]
  },
  {
    "semester": 2,
    "courses": [
      {
        "code": "M04",
        "title": "Physique 2 - Électrostatique et optique",
        "elements": [
          "M04.E1 : ELECTRICITÉ",
          "M04.E2 : OPTIQUE"
        ],
        "description": "Introduction aux concepts de charge, champ électrostatique, et potentiel. Étude de l'optique géométrique avec des applications aux lentilles, miroirs, et fibres optiques."
      },
      {
        "code": "M09",
        "title": "Algèbre 2 - Structures, Polynômes et Fractions Rationnelles",
        "description": "Étude approfondie des structures algébriques, des propriétés des polynômes et des fractions rationnelles, y compris leur décomposition en éléments simples et leur application dans des contextes numériques et algébriques complexes."
      },
      {
        "code": "M10",
        "title": "Analyse 2 - INTÉGRATION ET ÉQUATIONS DIFFÉRENTIELLES",
        "description": "Exploration des techniques d'intégration, calcul des primitives, intégrales généralisées et résolution d'équations différentielles linéaires et non linéaires pour des applications variées."
      },
      {
        "code": "M11",
        "title": "Électronique",
        "description": "Analyse des circuits numériques et analogiques, y compris les mémoires, les bascules et les compteurs. Approfondissement des transmissions de données et des modulations numériques."
      },
      {
        "code": "M12",
        "title": "Technologie du Multimédia",
        "description": "Conception et manipulation de contenus multimédias pour des usages pédagogiques et professionnels : traitement d'image, création de vidéos et d'animations, et intégration dans des environnements éducatifs numériques."
      },
      {
        "code": "M13",
        "title": "Architecture des Ordinateurs 2",
        "description": "Étude avancée des systèmes à processeur, des mémoires et des architectures spécialisées, avec une introduction aux technologies modernes de transmission de données."
      },
      {
        "code": "M14",
        "title": "Algorithmique et Programmation 2",
        "description": "Approfondissement des algorithmes avancés, y compris les graphes et les arbres, et leur mise en œuvre avec des outils modernes de programmation."
      },
      {
        "code": "M15",
        "title": "Module Transversal 2",
        "elements": [
          "Usages pédagogiques des ressources numériques",
          "Gestion de projet, Ingénierie pédagogique et éthique des Digital Skills",
          "Langue anglaise",
          "Langue française Ou Langue espagnole"
        ],
        "description": "Renforcement des compétences numériques avancées et des aptitudes linguistiques, avec un accent sur les applications éducatives."
      },
      {
        "code": "M16",
        "title": "Action Éducative en Établissement Scolaire 2",
        "description": "Encadrement supervisé des activités pédagogiques avec une immersion pratique dans un environnement scolaire pour développer les compétences professionnelles."
      }
    ]
  },
  {
    "semester": 3,
    "courses": [
      {
        "code": "M17",
        "title": "ALGÈBRE 3 : MATRICES, APPLICATIONS LINÉAIRES ET DÉTERMINANTS",
        "description": "Étude approfondie des séries de Taylor et des approximations asymptotiques, avec des applications dans la modélisation mathématique et la résolution de problèmes physiques complexes."
      },
      {
        "code": "M18",
        "title": "ANALYSE 3 : CALCUL DIFFÉRENTIELLE ET OPTIMISATION",
        "description": "Exploration des bases, dimensions, applications linéaires, et diagonalisation des matrices avec des applications dans l'analyse des systèmes linéaires et la programmation linéaire."
      },
      {
        "code": "M19",
        "title": "Système d’Exploitation 1",
        "description": "Introduction aux concepts fondamentaux des systèmes d'exploitation, y compris la gestion des processus, de la mémoire et des systèmes de fichiers, avec une mise en œuvre sur Linux et Windows."
      },
      {
        "code": "M20",
        "title": "Bases de Données 1",
        "description": "Apprentissage des concepts fondamentaux des bases de données relationnelles : modélisation avec les diagrammes Entité-Association, requêtes SQL, et gestion des transactions."
      },
      {
        "code": "M21",
        "title": "Structures de Données",
        "description": "Étude des structures comme les listes chaînées, les arbres et les graphes, avec une mise en œuvre des algorithmes associés pour des applications efficaces en informatique."
      },
      {
        "code": "M22",
        "title": "Module Transversal 3",
        "description": "Développement des compétences personnelles, communication professionnelle, et approfondissement linguistique pour une meilleure adaptabilité dans des environnements multiculturels."
      },
      {
        "code": "M23",
        "title": "Sciences de l’Éducation",
        "description": "Analyse des théories de l’apprentissage et de la sociologie éducative, avec un focus sur les stratégies pédagogiques adaptées aux divers environnements scolaires."
      },
      {
        "code": "M24",
        "title": "Action Éducative en Établissement Scolaire 3",
        "description": "Participation active dans des contextes éducatifs réels, permettant aux étudiants d’acquérir des compétences pratiques en enseignement et en gestion de classe."
      }
    ]
  },
  {
    "semester": 4,
    "courses": [
      {
        "code": "M25",
        "title": "Analyse numérique",
        "description": "Ce module couvre les méthodes numériques pour résoudre des systèmes linéaires et non linéaires, avec un accent sur les techniques comme les méthodes de Gauss-Seidel et de Newton, ainsi que sur l'interpolation polynomiale et l'intégration numérique. Les étudiants acquièrent des compétences pratiques en calcul numérique appliqué aux problèmes scientifiques et techniques."
      },
      {
        "code": "M26",
        "title": "Probabilités et statistique",
        "elements": [
          "M26.E1 : STATISTIQUE",
          "M26.E2 : PROBABILITÉS"
        ],
        "description": "Introduction approfondie aux concepts de probabilités et de statistiques. Les sujets incluent les lois de probabilité discrètes et continues, les régressions linéaires, les distributions des fréquences, ainsi que des applications pratiques en modélisation statistique pour résoudre des problèmes complexes."
      },
      {
        "code": "M27",
        "title": "Développement Web et Mobile 1 (HTML, CSS, JS, Ajax, PHP)",
        "description": "Ce module explore les bases du développement Web et mobile avec un focus sur HTML, CSS, JavaScript, et les bases de la programmation mobile. Les étudiants apprennent à concevoir des interfaces utilisateur modernes et à intégrer des fonctionnalités interactives adaptées aux plateformes mobiles."
      },
      {
        "code": "M28",
        "title": "Réseaux informatiques",
        "description": "Étude approfondie des architectures et protocoles de réseaux, tels que TCP/IP, UDP, et FTP. Les sujets incluent l'administration réseau, la sécurité des systèmes connectés, et les outils de diagnostic et de configuration des réseaux. Les étudiants apprennent également à concevoir et maintenir des infrastructures réseau efficaces."
      },
      {
        "code": "M29",
        "title": "Système d’exploitation 2",
        "description": "Ce module approfondit les concepts des systèmes d’exploitation, y compris la gestion de la mémoire, des processus, des fichiers, et la sécurité. Une attention particulière est donnée aux systèmes UNIX/Linux et Android, permettant aux étudiants de comprendre leur fonctionnement et leurs applications pratiques."
      },
      {
        "code": "M30",
        "title": "Module transversal 4",
        "description": "Ce module met en lumière l'histoire et le patrimoine marocain, renforçant la culture générale et le sens critique des étudiants. Des activités interactives et des travaux pratiques permettent d'analyser l'impact des événements historiques sur la société contemporaine."
      },
      {
        "code": "M31",
        "title": "Approches et méthodes didactiques",
        "description": "Analyse des stratégies pédagogiques adaptées à différents publics et contextes. Les étudiants apprennent à utiliser des méthodes interactives et des outils éducatifs numériques pour maximiser l'engagement et l'apprentissage des apprenants."
      },
      {
        "code": "M32",
        "title": "Action éducative en établissement scolaire 4",
        "description": "Stage supervisé en milieu éducatif avec une immersion complète dans les activités pédagogiques, incluant la planification, la gestion de classe, et l'évaluation des résultats des apprenants. Les étudiants appliquent les théories éducatives dans des situations pratiques réelles."
      }
    ]
  },
  {
    "semester": 5,
    "courses": [
      {
        "code": "M33",
        "title": "Programmation orientée objet",
        "description": "Approfondissement des concepts fondamentaux de la programmation orientée objet, notamment l’héritage, le polymorphisme, et l'encapsulation (C++, Java, Python). Création d'interfaces graphiques en Java à l'aide de bibliothèques comme JavaFX ou Swing. Gestion des exceptions et introduction aux design patterns tels que Singleton et Observer."
      },
      {
        "code": "M34",
        "title": "Intelligence artificielle 1 (Recherche opérationnel, IA, ML)",
        "description": "Initiation aux bases de l'intelligence artificielle, avec une mise en œuvre de la recherche heuristique pour résoudre des problèmes complexes. Introduction aux algorithmes génétiques et aux réseaux de neurones artificiels pour la classification et la reconnaissance de modèles. Applications dans les systèmes experts et l'optimisation."
      },
      {
        "code": "M35",
        "title": "Système d’information et génie logiciel (GL, Merise, UML, Gestion de projet)",
        "description": "Analyse et conception de systèmes d’information en utilisant les modèles UML pour la modélisation des processus métier. Étude des cycles de vie du logiciel, des méthodologies agiles, et de l’intégration des ERP pour la gestion des processus organisationnels. Introduction aux outils de versionnement tels que Git et GitLab."
      },
      {
        "code": "M36",
        "title": "Déontologie et législation scolaire (التشريع المدرسي وأخلاقيات المهنة)",
        "elements": [
          "التشريع المدرسي",
          "أخلاقيات المهنة"
        ],
        "description": "Étude des principes éthiques régissant la profession enseignante, tels que l’intégrité, la neutralité et la responsabilité. Analyse des cadres légaux marocains relatifs au droit à l'éducation, aux droits et devoirs des enseignants, et à la réglementation des établissements scolaires."
      },
      {
        "code": "M37",
        "title": "DIDACTIQUE DE L’INFORMATIQUE",
        "description": "Développement de techniques pédagogiques adaptées à l'enseignement de l'informatique. Création de contenus éducatifs interactifs et progressifs, incluant des activités basées sur des projets pour engager les étudiants. Utilisation des plateformes numériques pour faciliter l’apprentissage et l’évaluation."
      },
      {
        "code": "M38",
        "title": "Module transversal 5",
        "description": "Exploration des concepts fondamentaux de droit, civisme et citoyenneté, avec une mise en pratique via des études de cas. Renforcement des compétences linguistiques à travers des exercices interactifs et des simulations de situations professionnelles."
      },
      {
        "code": "M39",
        "title": "Action éducative en établissement scolaire 5",
        "description": "Stage avancé en milieu éducatif, avec gestion autonome des cours et des activités pédagogiques. Conception et évaluation de supports pédagogiques adaptés au niveau des élèves. Collaboration avec les équipes pédagogiques pour développer des projets éducatifs innovants."
      }
    ]
  },
  {
    "semester": 6,
    "courses": [
      {
        "code": "M40",
        "title": "Développement Web et Mobile 2 (PHP5, NodeJs, Android)",
        "description": "Approfondissement du développement d'applications web modernes en utilisant des frameworks avancés tels que Angular, React, et Vue.js. Spécialisation dans le développement d'applications mobiles natives pour Android, avec une maîtrise des outils tels qu'Android Studio, Kotlin, et Java. Exploration des fonctionnalités avancées comme les services backend RESTful, la gestion des permissions, et l'optimisation des performances pour les plateformes Android."
      },
      {
        "code": "M41",
        "title": "Bases de données 2 (NoSQL, Big Data)",
        "description": "Mise en œuvre avancée des bases de données NoSQL comme MongoDB, Cassandra et Redis. Optimisation des performances via l'indexation, la réplication et le partitionnement. Analyse des outils Big Data tels que Hadoop et Spark pour le traitement distribué, l'exploration de données et l'analyse prédictive à grande échelle."
      },
      {
        "code": "M42",
        "title": "Intelligence artificielle 2 (DL, LLM, Generative IA)",
        "description": "Étude approfondie des réseaux neuronaux convolutifs (CNN) pour la vision par ordinateur et des réseaux neuronaux récurrents (RNN) pour le traitement séquentiel comme le NLP. Exploration des algorithmes KNN pour la classification et les systèmes de recommandation. Introduction aux modèles de langage de grande taille (LLM) tels que GPT pour la génération de texte et l'analyse contextuelle. Applications pratiques dans les domaines de la reconnaissance d'image, la traduction automatique et les assistants virtuels."
      },
      {
        "code": "M43",
        "title": "Histoire et épistémologie de l’informatique",
        "description": "Analyse historique de l'évolution des concepts fondamentaux de l'informatique, depuis les premiers langages de programmation jusqu'à l'émergence de l'intelligence artificielle et du Big Data. Réflexion sur les paradigmes scientifiques ayant influencé le développement des technologies actuelles, y compris le cloud computing et les modèles d'apprentissage profond."
      },
      {
        "code": "M44",
        "title": "Docimologie et évaluation",
        "description": "Élaboration de stratégies d'évaluation éducative pour un apprentissage basé sur les compétences. Utilisation d'outils numériques pour la création d'évaluations formatives et sommatives. Analyse des performances à l'aide de techniques statistiques et d'outils d'analyse des données éducatives."
      },
      {
        "code": "M45",
        "title": "Module transversal 6",
        "description": "Développement des compétences en communication professionnelle dans des contextes multilingues. Utilisation d'outils numériques pour la collaboration à distance et la gestion de projets. Simulation de présentations académiques en utilisant des supports numériques avancés."
      },
      {
        "code": "M46",
        "title": "Action éducative en établissement scolaire 6",
        "description": "Stage de fin de formation en milieu éducatif avec gestion complète des cours. Développement de modules pédagogiques interactifs en informatique, incluant l'utilisation de simulations et de plateformes éducatives basées sur l'IA. Rédaction et soutenance d'un rapport final sur l'expérience pratique et les résultats obtenus."
      }
    ]
  }
];

export default function Licence() {
  const [openSemesters, setOpenSemesters] = useState<number[]>([]);

  const toggleSemester = (semester: number) => {
    setOpenSemesters((prev) =>
      prev.includes(semester)
        ? prev.filter((s) => s !== semester)
        : [...prev, semester]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6 lg:px-12 py-12">
      {/* Titre principal */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 hover:text-blue-600 transition duration-300">
        🎓Licence d'Éducation : Spécialité Informatique
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          La <strong>Licence d'Éducation : Spécialité Enseignement Secondaire – Informatique</strong> est conçue pour former des enseignants qualifiés dans le domaine de l'informatique. Ce programme équilibre théorie et pratique pour une préparation complète à l’enseignement secondaire.
        </p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Colonne principale */}
        <div className="col-span-2 space-y-10">
          {/* Présentation synthétique */}
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Points Clés de la Formation</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Une formation équilibrée :</strong> Algorithmique, programmation, bases de données et réseaux.
              </li>
              <li>
                <strong>Des compétences pédagogiques :</strong> Enseignement interactif, gestion de classe.
              </li>
              <li>
                <strong>Technologies modernes :</strong> Web, mobile, IA, Big Data.
              </li>
              <li>
                <strong>Approche pratique :</strong> Stages encadrés en établissement scolaire.
              </li>
            </ul>
          </div>
  
          {/* Programme par semestre */}
          {licenceCourses.map((semester) => (
            <div key={semester.semester} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleSemester(semester.semester)}
                className="w-full text-left bg-blue-600 text-white px-6 py-4 flex justify-between items-center hover:bg-blue-700 transition font-semibold text-lg"
              >
                <span>📘 Semestre {semester.semester}</span>
                <span>{openSemesters.includes(semester.semester) ? "▲" : "▼"}</span>
              </button>
  
              {openSemesters.includes(semester.semester) && (
                <div className="p-6 space-y-4 bg-gray-50">
                  {semester.courses.map((course) => (
                    <div key={course.code} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                      <h4 className="text-blue-700 text-lg font-semibold flex items-center space-x-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">
                          {course.code}
                        </span>
                        <span>{course.title.toUpperCase()}</span>
                      </h4>
                      <p className="text-gray-700 mt-2">{course.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
  
        {/* Colonne : Coordonnateur */}
        <aside className="bg-white shadow-xl rounded-2xl p-6 h-fit">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">👨‍🏫 Coordonnateur</h2>
          <p className="text-lg text-gray-700">
            <strong>Pr. Zahid Noureddine</strong>
          </p>
          <p className="text-gray-700">
            <strong>Rôle :</strong> Coordonnateur
          </p>
          <p className="text-gray-700">
            <strong>Email :</strong>{" "}
            <a
              href="mailto:no.zahid@uca.ma"
              className="text-blue-600 hover:underline"
            >
              no.zahid@uca.ma
            </a>
          </p>
          <p className="mt-6 text-sm text-gray-500 leading-relaxed">
            Pour toute information supplémentaire, n’hésitez pas à le contacter.
          </p>
        </aside>
      </div>
  
      {/* Passerelle */}
      <div className="mt-16 bg-white shadow-xl rounded-2xl p-6 text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Cette licence ouvre la voie vers des études de master ou des carrières enrichissantes dans le domaine de l’enseignement, de la formation en informatique et l'Ingénierie.
        </p>
      </div>
    </div>
  );
}