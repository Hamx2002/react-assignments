import React from "react";
import { Github, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#1a1c22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-white">React</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              The library for web and native user interfaces.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Learn React</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Quick Start
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Describing the UI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Adding Interactivity
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Community</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Docs Contributors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Acknowledgements
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Meta Platforms, Inc.</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
