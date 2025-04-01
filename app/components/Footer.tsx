const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Département d'Informatique – École Normale Supérieure, Université Cadi Ayyad
        </p>
        <p className="text-xs text-gray-300">
          Développé avec ❤️ par <span className="font-semibold text-white">Pr. M. LACHGAR</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
