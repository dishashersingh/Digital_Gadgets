import { navigation } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
      <div>
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 pt-24 pb-14">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="flex flex-col items-start">
              <span className="text-black font-semibold">Digi</span><span className="text-blue-600 font-semibold">Gadgets</span>
        
              <p className="mt-4 text-sm text-gray-600">
                DigiGadgets — powering tomorrow with cutting-edge digital gadgets. Smart, sleek, and future-ready.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-bold leading-6 text-blue-600">Shop</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="/shop/new-arrivals" className="text-sm text-black hover:text-gray-700">New Arrivals</a></li>
                    <li><a href="/shop/best-sellers" className="text-sm text-black hover:text-gray-700">Best Sellers</a></li>
                    <li><a href="/shop/accessories" className="text-sm text-black hover:text-gray-700">Accessories</a></li>
                    <li><a href="/shop/clearance" className="text-sm text-black hover:text-gray-700">Clearance Deals</a></li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-lg font-bold leading-6 text-blue-600">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="/careers" className="text-sm text-black hover:text-gray-700">Careers</a></li>
                    <li><a href="/blogs" className="text-sm text-black hover:text-gray-700">Tech Blog</a></li>
                    <li><a href="/contact" className="text-sm text-black hover:text-gray-700">Contact Us</a></li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-lg font-bold leading-6 text-blue-600">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="/support/warranty" className="text-sm text-black hover:text-gray-700">Warranty Info</a></li>
                    <li><a href="/support/shipping" className="text-sm text-black hover:text-gray-700">Shipping & Returns</a></li>
                    <li><a href="/support/guides" className="text-sm text-black hover:text-gray-700">User Guides</a></li>
                    <li><a href="/support/faq" className="text-sm text-black hover:text-gray-700">FAQs</a></li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-lg font-bold leading-6 text-blue-600">Get Help</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="/support/chat" className="text-sm text-black hover:text-gray-700">Live Chat</a></li>
                    <li><a href="/support/email" className="text-sm text-black hover:text-gray-700">Email Support</a></li>
                    <li><a href="/support/downloads" className="text-sm text-black hover:text-gray-700">Software Downloads</a></li>
                    <li><a href="/support/contact" className="text-sm text-black hover:text-gray-700">Help Center</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
