import Image from "next/image";
import rahmanCharity from "../../../public/logos/rahman-charity.svg";
import uniDroit from "../../../public/logos/uni-droit.svg";
import humanRights from "../../../public/logos/human-rights.svg";
import legalAid from "../../../public/logos/legal-aid.svg";

const logos = [
  {
    src: rahmanCharity,
    alt: "Rahman Charity Organization",
  },
  {
    src: uniDroit,
    alt: "Université de Droit",
  },
  {
    src: humanRights,
    alt: "Organisation des Droits Humains",
  },
  {
    src: legalAid,
    alt: "Aide Juridique Internationale",
  },
];

const LogoGrid = () => (
  <div>
    <div className="custom-screen">
      <h2 className="font-semibold text-sm text-blue-500 text-center">
        NOS PARTENAIRES ENGAGÉS POUR LA JUSTICE
      </h2>
      <div className="mt-6">
        <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
          {logos.map((item, idx) => (
            <li
              key={idx}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image src={item.src} alt={item.alt} width={120} height={60} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default LogoGrid;
