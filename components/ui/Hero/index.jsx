import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const circleVariants = {
    animate: {
      y: [0, 20, 0],
      x: [0, -20, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-12">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white -z-10" />

      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply blur-xl opacity-60"
        variants={circleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply blur-xl opacity-50"
        variants={circleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-green-100 rounded-full mix-blend-multiply blur-xl opacity-40"
        variants={circleVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-yellow-100 rounded-full mix-blend-multiply blur-2xl opacity-40"
        variants={circleVariants}
        animate="animate"
      />

      <div className="max-w-screen-xl mx-auto px-4 pt-16 sm:py-24 lg:py-32 text-gray-600">
        <motion.div
          className="flex flex-col-reverse items-center lg:flex-row lg:gap-x-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="mt-8 lg:mt-0 w-full lg:w-1/2 text-center lg:text-left"
            variants={itemVariants}
          >
            <p className="text-sm uppercase font-semibold text-blue-500 tracking-wider">
              Votre partenaire solidaire
            </p>
            <h1 className="text-4xl font-extrabold text-blue-600 sm:text-5xl lg:text-6xl leading-tight">
              Préservez vos droits,
              <br className="hidden sm:block" /> changez des vies
            </h1>
            <p className="mt-4 max-w-lg mx-auto lg:mx-0 text-gray-700">
              Votre allié juridique pour rendre le droit accessible à tous, sans
              distinction, en favorisant l'égalité des chances et le soutien
              communautaire.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
              <Link 
                href="/contact"
                className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 rounded-md font-medium text-sm transition-colors"
              >
                Commencer
              </Link>
              <a
                href="#mission"
                className="px-6 py-3 text-blue-500 border border-blue-500 hover:bg-blue-50 focus:ring-4 focus:ring-blue-200 rounded-md font-medium text-sm transition-colors"
              >
                En savoir plus
              </a>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative h-96 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full h-full transition-transform duration-300 ease-in-out hover:-translate-y-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/hero-image.jpg"
                alt="Illustration représentant l'aide juridique"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
