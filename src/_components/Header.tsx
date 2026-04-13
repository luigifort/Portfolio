import NextLink from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-2 mb-2 sticky w-f">
      <nav className="flex items-center justify-start">
        <div className="logo-wrapper mr-8">
          <NextLink href="/" className="logo">
            <Image
              src="./lf_logo.svg"
              width={80}
              height={80}
              alt="logo"
              className="border rounded-full p-1"
            />
          </NextLink>
        </div>
        <div className="header-right-wrapper flex items-center gap-8">
          <NextLink href="#" className="flex items-center gap-1">
            Riguardo me
          </NextLink>
          <NextLink href="#" className="flex items-center gap-1">
            Progetti
          </NextLink>

          <NextLink href="#" className="flex items-center gap-1">
            Skill
          </NextLink>
          <NextLink href="#" className="flex items-center gap-1">
            Esperienza
          </NextLink>
        </div>
      </nav>
    </header>
  );
}
