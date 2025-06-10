import Head from "next/head";

import { useState } from "react";
import Values from "../components/ui/Values";
import Volunteers from "../components/ui/Volunteers";
import CurrentProject from "../components/ui/CurrentProject";

export default function About() {

    const [activeTab, setActiveTab] = useState("histoire");


    const volunteers = [
        {
            img: "/images/avatar.png",
            title: "John yo",
            subtitle: "Lorem ",
            link: "@test"
        },
        {
            img: "/images/avatar.png",
            title: "John Doe",
            subtitle: "Lorem 2 ",
            link: "@test"
        },

        {
            img: "/images/avatar.png",
            title: "John Doe",
            subtitle: "Lorem 2 ",
            link: "@test"
        },

        {
            img: "/images/avatar.png",
            title: "John Doe",
            subtitle: "Lorem 2 ",
            link: "@test"
        },

        {
            img: "/images/avatar.png",
            title: "John Doe",
            subtitle: "Lorem 2 ",
            link: "@test"
        },

   
        
    ]
  return (
    <>
      <Head>
        <title>A propos - Préserve ton Droit</title>
      </Head>


      <div className="relative pt-28 pb-12 flex flex-col items-center custom-screen">

      <p className="text-5xl lg:text-6xl font-bold text-center text-bleu ">Qui sommes-nous ?</p>
      <p className="text-2xl font-bold text-center text-bleu mt-4">Préserve Ton Droit</p>
      <p className="text-lg  text-center text-noir mt-4">Une association française d’aide juridique et humanitaire.</p>


      <div className="flex flex-row my-6">

        <p className={`cursor-pointer font-bold rounded-l-full border-b border-t border-l px-4 py-2 ${activeTab === "histoire" ? "bg-bordeaux text-white" : "text-gris-fonce"}`} onClick={() => setActiveTab("histoire")}>Notre histoire</p>
        <p className={`cursor-pointer font-bold rounded-r-full border-b border-t border-r px-4 py-2 ${activeTab === "missions" ? "bg-bordeaux text-white" : "text-gris-fonce"}`} onClick={() => setActiveTab("missions")}>Nos missions</p>
      

   
      
      </div>
      <section className="flex flex-col items-center justify-center">
        {activeTab === "histoire" && (
            <div className="lg:w-1/2 ">
            <p>Le mot du président-fondateur : <br/>
    “Mon désir d’aider les plus démunis découle de mon ambition de devenir avocat, un rêve que l’association que j’aie créée me permet de concrétiser. 
    <br/>
    <br/>
    Ce cheminement s’est nourri de la volonté d’aider autrui, comme lorsque j’ai soutenu une personne à démêler une situation juridique complexe, sans attendre de contrepartie. Un geste de reconnaissance inattendu m’a motivé à poursuivre cet engagement, renforçant ma détermination à mettre mes compétences au service des autres par la création d’une association loi 1901 à but non lucratif.”</p>

    <p>

    </p>
            </div>
        )}
        {activeTab === "missions" && (
            <div className="w-1/2 ">
            <p><span className="font-bold">Nous proposons :</span> <br/>
·        Un accompagnement personnalisé au travers de démarches juridiques ou administratives pour mieux renseigner le requérant sur ses droits en fonction du cas.
·        Un accès libre à des informations, tels que des fiches pédagogiques, des contenus audio, des quiz ludiques et apprenants… <br/><br/>

<span className="font-bold">Notre objectif :</span> <br/>
Que les demandeurs soient compris et pris en considération, qu’ils ne sont pas seuls et apporter à chaque problème sa solution.</p>
            </div>
        )}
      </section>


      <section >


      <p className="text-6xl font-bold text-center text-bleu mt-20 mb-8">Nos valeurs</p>

    <section className="flex flex-row flex-wrap justify-center gap-x-8 gap-y-12 mt-20">
      <Values img="/images/Base feature icon.png" title="Altruisme" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum. " />
      <Values img="/images/Base feature icon.png" title="Respect" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum. " />
      <Values img="/images/Base feature icon.png" title="Entraide" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum. " />
      <Values img="/images/Base feature icon.png" title="Solidarité" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum. " />
      <Values img="/images/Base feature icon.png" title="Bienveillance" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum. " />
      <Values img="/images/Base feature icon.png" title="Partage" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum. " />

        </section>

      </section>



      <section>




      <p className="text-6xl font-bold text-center text-bleu  my-12">Nos bénévoles</p>

      <section className="flex flex-row justify-center ">

        <div className="mt-4 flex flex-row flex-wrap gap-x-20 sm:gap-x-40 gap-y-8 justify-center w-full  sm:w-2/3  ">

        {volunteers.map((volunteer, index) => (
          <Volunteers key={index} img={volunteer.img} title={volunteer.title} subtitle={volunteer.subtitle} link={volunteer.link} />
        ))}
        </div>
      
      </section>

      </section>


      <p className="text-6xl font-bold text-center text-bleu mt-20 mb-12">Projets en cours</p>



<section className="flex flex-row justify-center gap-x-8 gap-y-12 flex-wrap sm:flex-nowrap">

<CurrentProject
      img="/images/Placeholder.png"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

<CurrentProject
      img="/images/Placeholder.png"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

<CurrentProject
      img="/images/Placeholder.png"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
</section>



      </div>
    </>
  );
}
