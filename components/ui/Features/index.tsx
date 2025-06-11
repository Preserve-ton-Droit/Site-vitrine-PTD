import {
  ShieldCheckIcon,
  LifebuoyIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Accessibilité Juridique",
    desc: "Nous rendons le droit accessible à tous, en simplifiant les processus juridiques complexes et en fournissant un accompagnement personnalisé.",
  },
  {
    icon: LifebuoyIcon,
    title: "Médiation et Support",
    desc: "Notre équipe offre un soutien complet, de la consultation initiale jusqu'à la résolution de vos problèmes juridiques.",
  },
  {
    icon: AcademicCapIcon,
    title: "Engagement Communautaire",
    desc: "Nous construisons des ponts entre les communautés et la justice, en favorisant l'éducation et le soutien mutuel.",
  },
];

const Features = () => {
  return (
    <section id="mission" className="relative overflow-hidden text-gray-600">
      <div className="relative max-w-screen-xl mx-auto px-4 py-10 sm:py-14">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Nos Atouts
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Des solutions centrées sur vos besoins pour garantir l'équité et
            l'accessibilité du droit.
          </p>
        </header>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="
                group 
                relative
                rounded-xl 
                border border-gray-100 
                p-6 
                transition-all 
                duration-300 
                hover:shadow-xl 
                hover:scale-105
                bg-white
              "
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-400 text-white shadow-sm transition-transform group-hover:scale-110">
                <item.icon className="w-6 h-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
