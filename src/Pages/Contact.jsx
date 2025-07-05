import {
  EnvelopeIcon,
  PhoneIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/16/solid";
import LinkedIn from "./../assets/linkedin.png";
import Instagram from "./../assets/instagram.png";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  function copyNumber() {
    navigator.clipboard.writeText("0046736439974");
    setCopied(true);
  }

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Get In Touch</h2>
        <div className=" inline-block text-left space-y-6">
          <div className="flex  space-x-3">
            <PhoneIcon className="h-6 w-6 text-secondAccent" />
            <p className="text-lg">+46736439974</p>
            {copied ? (
              <p>Copied!</p>
            ) : (
              <>
                <DocumentDuplicateIcon
                  onClick={copyNumber}
                  className="cursor-pointer h-6 w-6 text-gray-300"
                />
              </>
            )}
          </div>

          <div className="flex  space-x-3">
            <EnvelopeIcon className="h-6 w-6 text-secondAccent" />
            <a
              href="mailto:leila.benhalima2@gmail.com"
              className="text-xl text-link hover:underline transition-colors duration-200"
            >
              leila.benhalima2@gmail.com
            </a>
          </div>

          <div className="flex  space-x-3">
            <img src={LinkedIn} className="h-6 w-6 text-gray-300" />

            <a
              href="https://www.linkedin.com/in/leila-ben-halima/"
              target="_blank"
              className="text-xl text-link hover:underline transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex space-x-3">
            <img src={Instagram} className="h-6 w-6" />
            <a
              href="https://www.instagram.com/art_and_such__/"
              target="_blank"
              className="text-xl text-link hover:underline transition-colors duration-200"
            >
              Check out my art
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
