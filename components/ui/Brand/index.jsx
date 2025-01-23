import Link from "next/link";

const Brand = () => (
  <Link href="/" className="flex items-center space-x-2">
    <img src="/logos/logo_icon.png" width={75} height={50} alt="logo" />
    <img src="/logos/logo_text.png" width={75} height={50} alt="logo" />
  </Link>
);

export default Brand;
