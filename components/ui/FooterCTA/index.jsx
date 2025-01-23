import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-blue-500 text-3xl font-semibold sm:text-4xl">
                Pourquoi faire appel à nous ?                </h2>
                <p className="mt-3 text-gray-600">
                Engagez des experts juridiques pour sécuriser vos projets, anticiper les risques et défendre vos intérêts avec efficacité.                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
Contactez-nous maintenant
</NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA