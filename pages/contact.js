import Head from "next/head";
import { ArrowUpIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";

export default function GetStarted() {
  const servicesItems = [
    "Aide Juridique",
    "Médiation",
    "Droits Humains",
    "Conseil Social",
  ];

  // Smooth scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head>
        <title>Contactez-nous - Préserve ton Droit</title>
      </Head>
      <div className="relative pt-28 pb-12 bg-gradient-to-br from-blue-50 via-white to-white overflow-hidden">
        <div
          className="absolute -top-16 -left-16 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -bottom-16 -right-16 w-60 h-60 bg-pink-200 rounded-full blur-3xl opacity-30 -z-10"
          aria-hidden="true"
        ></div>

        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-200 rounded-full blur-2xl opacity-20 -z-10"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-20 -z-10"
          aria-hidden="true"
        ></div>

        <div className="custom-screen">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg sm:text-center lg:text-left">
              <h1 className="text-blue-500 text-3xl font-semibold sm:text-4xl">
                Parlons de vos droits
              </h1>
              <p className="mt-3 text-gray-600">
                Nous sommes là pour vous aider. Contactez notre équipe et
                faites-nous part de vos besoins, ou envoyez-nous un email à{" "}
                <a
                  href="mailto:contact@preservetondroit.org"
                  className="text-blue-500 hover:text-blue-400 font-medium duration-150"
                >
                  contact@preservetondroit.org
                </a>
              </p>
            </div>

            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0 bg-white">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
              >
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Type de Service
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    defaultValue=""
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Sélectionnez un service
                    </option>
                    {servicesItems.map((item, idx) => (
                      <option key={idx} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Votre nom complet"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="votre.email@example.com"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Votre message..."
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-36 resize-none"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 py-2.5 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Retour en haut"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
