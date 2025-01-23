import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const FooterCTA = () => (
  <SectionWrapper className="relative overflow-hidden ">
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Pourquoi faire appel à nous&nbsp;?
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Engagez des experts juridiques pour sécuriser vos projets, anticiper
          les risques et défendre vos intérêts avec efficacité.
        </p>
        <NavLink
          href="/contact"
          className="
            mt-6
            inline-block
            px-6
            py-3
            text-sm
            font-medium
            text-white
            bg-blue-600
            hover:bg-blue-500
            active:bg-blue-700
            rounded-md
            shadow
            transition-colors
            focus:outline-none
            focus:ring-4
            focus:ring-blue-200
          "
        >
          Contactez-nous maintenant
        </NavLink>
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
