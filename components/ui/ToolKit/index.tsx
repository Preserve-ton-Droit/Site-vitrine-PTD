import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";

const features = [
  {
    img: "/images/rahman-charity.png",
    title: "Rahman Charity",
    desc: "Organisation caritative internationale partenaire.",
  },
  {
    img: "/images/uni-droit.png",
    title: "Université de Droit",
    desc: "Collaboration académique et recherche juridique.",
  },
  {
    img: "/images/human-rights.png",
    title: "Droits Humains",
    desc: "Réseau de défense des droits fondamentaux.",
  },
  {
    img: "/images/legal-tech.png",
    title: "LegalTech",
    desc: "Innovations technologiques au service du droit.",
  },
  {
    img: "/images/mediation.png",
    title: "Centre de Médiation",
    desc: "Plateforme de résolution amiable des conflits.",
  },
  {
    img: "/images/ngo-network.png",
    title: "Réseau ONG",
    desc: "Collaboration internationale pour la justice sociale.",
  },
];

const ToolKit = () => {
  return (
    <SectionWrapper
      id="partenaires"
      className="relative overflow-hidden py-16 "
    >
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-blue-500 text-3xl font-bold sm:text-4xl">
            Nos Partenaires Engagés
          </h2>
          <p className="mt-4 text-gray-600">
            Ensemble, nous construisons une justice plus accessible.
          </p>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="
                group 
                relative 
                flex 
                flex-col 
                items-center 
                rounded-xl 
                border 
                border-gray-200 
                bg-white 
                p-6 
                text-center
                transition 
                hover:shadow-xl
              "
            >
              {/* <div className="w-16 h-16 mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain"
                  priority
                />
              </div> */}
              <h3 className="text-lg font-semibold text-blue-600">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-500">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
