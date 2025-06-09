import Head from "next/head";
import { ArrowUpIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useCallback } from "react";
import LawCard from "../components/ui/LawCard";

export default function GetStarted() {
  const servicesItems = [
    "Aide Juridique",
    "Médiation",
    "Droits Humains",
    "Conseil Social",
  ];



  return (
    <>
      <Head>
        <title>Essentiel du droit - Préserve ton Droit</title>
      </Head>
      <div className="relative pt-28 pb-12 bg-gradient-to-br from-blue-50 via-white to-white overflow-hidden custom-screen">


        <p className="text-4xl font-bold text-center py-8 text-bleu">L'essentiel du droit</p>


        <p className="text-2xl text-center sm:text-left font-bold py-4 text-bleu">Droit civil</p>

        <LawCard btnStyle="bg-bordeaux text-white font-bold" title="Lorem ipsum dolor sit amet" subtitle="Maj le bla bla" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..." img="/images/placeholder.png" />
      

        <p className="text-2xl text-center sm:text-left font-bold py-8 text-bleu">Droit du travail</p>

<LawCard btnStyle="bg-violet text-noir font-bold" title="Lorem ipsum dolor sit amet" subtitle="Maj le bla bla" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..." img="/images/placeholder.png" />


<p className="text-2xl font-bold py-4 text-bleu">Droit des mineurs</p>

<LawCard btnStyle="bg-jaune text-noir font-bold" title="Lorem ipsum dolor sit amet" subtitle="Maj le bla bla" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..." img="/images/placeholder.png" />


<p className="text-2xl font-bold py-4 text-bleu">Droit du travail</p>

<LawCard btnStyle="bg-transparent border border-noir" title="Lorem ipsum dolor sit amet" subtitle="Maj le bla bla" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..." img="/images/placeholder.png" />

      </div>
    </>
  );
}
