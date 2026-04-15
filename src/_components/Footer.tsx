import NextLink from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 gap-8">
      <div className="layout">
        <div className="footer-top flex justify-between items-center">
          <div className="flex">
            <NextLink href="/" className="logo">
              <Image
                src="./lf_logo_light.svg"
                width={60}
                height={60}
                alt="logo"
                className="border rounded-full object-cover relative bottom-1"
              />
            </NextLink>
            <div>
              <p className="font-bold">Luigi Forte</p>
              <p>Frontend Developer</p>
            </div>
          </div>

          <div>
            <div className="social-wrapper flex gap-4">
              <NextLink
                href="https://www.linkedin.com/in/luigi-forte-0b8123143/"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </NextLink>
              <address>
                <NextLink href="mailto:luiForDev@gmail.com" target="_blank">
                  <MdEmail size={24} />
                </NextLink>
              </address>

              <NextLink href="https://github.com/luigifort" target="_blank">
                <FaGithub size={24} />
              </NextLink>
            </div>
          </div>
        </div>
        <div className="footer-bottom flex justify-between mt-12">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Luigi Forte. All rights reserved.
          </p>
          <p className="text-sm">
            Made with <span className="text-red-500">❤️</span> by Luigi Forte
          </p>
        </div>
      </div>
    </footer>
  );
}
