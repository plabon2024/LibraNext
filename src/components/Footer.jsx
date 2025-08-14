import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaXTwitter } from "react-icons/fa6";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Challenges",
    href: "/",
  },

];

const Footer04Page = () => {
  return (
    <div className=" flex flex-col">
      <div className="grow bg-muted" />
      <footer>
        <div className="container mx-auto">
          <div className="py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-6 xl:px-0">
            <div>
              {/* Logo */}
<Logo></Logo>

              <ul className="mt-6 flex items-center gap-4 flex-wrap">
                {footerLinks.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Newsletter */}
            <div className="max-w-xs w-full">
              <h6 className="font-semibold">Stay up to date</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                LibraNext
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link
                href="https://www.linkedin.com/in/shaeedalshahabplabon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="" />
              </Link>
              <Link
                href="https://github.com/plabon2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="" />
              </Link>

              <Link
                href="https://x.com/0xplabon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer04Page;
