import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Brand from "../Brand";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Optional: For animations
import Input from "../Input";
import Search from "../../../public/icons/search.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { events } = useRouter();

  const navigation = [
    { title: "Accueil", path: "/#mission" },
    { title: "A propos", path: "/#partenaires" },
    { title: "Essentiel du droit", path: "/#temoignages" },
    { title: "Aide et contact", path: "/#temoignages" },
    { title: "Evènements & Projets", path: "/test" },
    { title: "Quiz", path: "/test" },
    { title: "Dons", path: "/test" },
  ];

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      document.body.classList.remove("overflow-hidden");
    };

    events.on("routeChangeStart", handleRouteChange);
    events.on("hashChangeStart", handleRouteChange);

    return () => {
      events.off("routeChangeStart", handleRouteChange);
      events.off("hashChangeStart", handleRouteChange);
    };
  }, [events]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">


      <div className="custom-screen hidden md:flex justify-center mt-4"><Brand /></div>
        
      <nav className="w-full custom-screen flex  py-4">

        <ul className="hidden md:flex space-x-6 justify-between items-center w-full">
          {navigation.map((item, idx) => (
            <li
              key={idx}
              className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
            >
              <Link  href={item.path}>
                <p className="text-base font-medium">{item.title}</p>
              </Link>
            </li>
          ))}


          <Input className="h-8 border border-blue-400 placeholder:text-blue-400" placeholder="Rechercher" rightIcon={<Search />} />
          {/* <li>
            <Link  href="/contact">
              <p className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Besoin d'aide
              </p>
            </Link>
          </li> */}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between w-full gap-4">

          <Brand />

          <Input className="h-8 border border-blue-400 placeholder:text-blue-400" placeholder="Rechercher" rightIcon={<Search />} />

          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>


        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <div className="custom-screen pt-8">
              <ul className="flex flex-col space-y-6">
                {navigation.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 hover:text-blue-500 transition-colors duration-200"
                  >
                    <Link  href={item.path}>
                      <p className="text-lg font-medium">{item.title}</p>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link  href="/contact">
                    <p className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                      Besoin d'aide
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
