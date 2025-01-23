import SectionWrapper from "../../SectionWrapper";

const Testimonials = () => {
  const testimonials = [
    {
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Alex wonderson",
      title: "Etudiant",
      quote:
        "Quand j'ai eu besoin d'aide pour comprendre mes droits, cette association a été mon filet de sécurité. Ils m'ont expliqué chaque étape simplement, sans jargon juridique compliqué. Merci de rendre le droit accessible !",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Karim ahmed",
      title: "Président d'une association locale",
      quote:
        "Leurs conseils ont été un vrai coup de pouce pour notre projet. Ils nous ont aidés à éviter les pièges administratifs et à sécuriser nos démarches. Une équipe vraiment à l'écoute et bienveillante",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Lysa stian",
      title: "Etudiante",
      quote:
        "J'étais perdue dans un conflit avec mon ancien propriétaire. Ils m'ont guidée, m'ont aidée à comprendre mes droits et à trouver une solution amiable. Je ne me sentais plus seule face à mes problèmes.",
    },
  ];

  return (
    <SectionWrapper className="pb-0" id="temoignages">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl sm:text-center md:mx-auto">
          <h2 className="text-blue-500 text-3xl font-semibold sm:text-4xl">
            Ils nous ont fait confiance{" "}
          </h2>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-white border p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={item.avatar}
                      className="w-14 h-14 object-cover rounded-full"
                      alt={item.name}
                    />
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
