import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-extrabold tracking-wide hover:text-blue-300 transition duration-300">
            Dép. Informatique
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/presentation"
              className="text-lg font-medium hover:text-blue-300 transition duration-300"
            >
              Présentation
            </Link>
          </li>
          <li>
            <Link
              href="/corps-enseignant"
              className="text-lg font-medium hover:text-blue-300 transition duration-300"
            >
              Corps enseignant
            </Link>
          </li>
          <li>
            <Link
              href="/licence"
              className="text-lg font-medium hover:text-blue-300 transition duration-300"
            >
              Licence
            </Link>
          </li>
          <li>
            <Link
              href="/master"
              className="text-lg font-medium hover:text-blue-300 transition duration-300"
            >
              Master
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
