import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import ctaImage from "../../../public/cta-image.jpg";
import { StarIcon } from "@heroicons/react/24/outline";

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="pb-0 relative overflow-hidden ">
      <div className="custom-screen py-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="flex-1 w-full lg:max-w-xl hidden lg:block">
            <Image
              src={ctaImage}
              alt="Préserver vos droits avec Préserve ton Droit"
              className="rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="max-w-xl lg:max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold text-blue-500">
              Votre parcours juridique commence ici
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Préserve ton Droit, votre partenaire juridique engagé, vous
              accompagne dans la compréhension et la défense de vos droits. Nous
              nous mobilisons pour rendre la justice accessible, quelle que soit
              votre situation.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg shadow transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Commencer
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
