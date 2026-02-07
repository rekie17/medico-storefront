import Link from "next/link";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const quickLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/shop?category=cpap-bipap", label: "CPAP / BiPAP" },
  { href: "/shop?category=nebulizers", label: "Nebulizers" },
  { href: "/shop?category=blood-pressure-monitors", label: "BP Monitors" },
  { href: "/shop?category=thermometers", label: "Thermometers" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/shop", label: "Products" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-[#0077B6]">Medico</span>
              <span className="text-gray-400">.com.sg</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Yuwell Main Distributor in Singapore. Trusted by over 30
              healthcare institutions islandwide for quality medical equipment
              and comprehensive support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#0077B6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#0077B6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-[#0077B6] flex-shrink-0 mt-0.5" />
                <span>
                  27 New Industrial Road
                  <br />
                  #03-03, Singapore 536212
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-[#0077B6] flex-shrink-0 mt-0.5" />
                <span>
                  Mon – Fri: 9am – 5pm
                  <br />
                  <span className="text-gray-500">
                    Closed weekends &amp; public holidays
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-[#0077B6] flex-shrink-0 mt-0.5" />
                <span>By Appointment Only</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-[#0077B6] flex-shrink-0 mt-0.5" />
                <span>info@medico.com.sg</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Medico Pte Ltd. All rights reserved.</p>
          <p>Yuwell Main Distributor | Singapore</p>
        </div>
      </div>
    </footer>
  );
}
