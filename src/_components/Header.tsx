import NextLink from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="py-2 mb-2 sticky w-f">
      <nav className="flex items-center justify-between">
        <div className="header-left-wrapper flex items-center">
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
        </div>
        <div className="social-wrapper flex items-center gap-4">
          <NextLink
            href="https://www.linkedin.com/in/luigi-forte-0b8123143/"
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaLinkedin size={24} />
          </NextLink>
          <address>
            <NextLink
              href="mailto:luiForDev@gmail.com"
              target="_blank"
              className="flex items-center gap-1"
            >
              <MdEmail size={24} />
            </NextLink>
          </address>

          <NextLink
            href="https://github.com/luigifort"
            target="_blank"
            className="flex items-center gap-1"
          >
            <FaGithub size={24} />
          </NextLink>
        </div>
      </nav>
    </header>
  );
}
