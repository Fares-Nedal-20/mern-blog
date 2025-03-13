import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsDiscord,
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-teal-500 border-t-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="w-full sm:flex justify-between">
          <div className="mt-3">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Fares's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 mt-5">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                {/* Security: noopener makes sure the new page can't modify the original one, preventing potential attacks like reverse tabnabbing (where the new tab changes the original page).
                Privacy: noreferrer ensures that the new page doesn't know where the user came from, enhancing privacy. */}
                {/* Then The rel="noopener noreferrer" attribute is used in <a> (anchor) tags with target="_blank" to improve security and performance when opening links in a new tab or window. */}
                <Footer.Link
                  href="/about"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Fares's Blog
                </Footer.Link>
                <Footer.Link href="#" rel="noopener noreferrer" target="_blank">
                  Fares's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" rel="noopener noreferrer" target="_blank">
                  Github
                </Footer.Link>
                <Footer.Link href="#" rel="noopener noreferrer" target="_blank">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" rel="noopener noreferrer" target="_blank">
                  Privacy policy
                </Footer.Link>
                <Footer.Link href="#" rel="noopener noreferrer" target="_blank">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:justify-between">
          <Footer.Copyright
            href="/about"
            by="Fares's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-4 mt-4">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsDiscord} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
