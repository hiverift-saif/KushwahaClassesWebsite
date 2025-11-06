import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { EnrollmentForm } from "./EnrollmentForm";
import { ConsultationForm } from "./ConsultationForm";

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Header({ onNavigate, currentPage = "main" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Play School", href: "#playschool", special: true },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "#blog" },
  ];

  const handleNavClick = (e: React.MouseEvent, link: any) => {
    if (link.name === "Play School" && onNavigate) {
      e.preventDefault();
      onNavigate("playschool");
      setMobileMenuOpen(false);
    } else if (link.name === "Blog" && onNavigate) {
      e.preventDefault();
      onNavigate("blog");
      setMobileMenuOpen(false);
    } else if ((currentPage === "playschool" || currentPage === "blog") && onNavigate && !link.special && link.name !== "Blog") {
      e.preventDefault();
      onNavigate("main");
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <EnrollmentForm open={enrollmentOpen} onOpenChange={setEnrollmentOpen} />
      <ConsultationForm open={consultationOpen} onOpenChange={setConsultationOpen} />
      
      <header className="sticky top-0 z-50 bg-white shadow-md">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
            <a href="tel:+919990455657" className="flex items-center gap-2 text-sm md:text-base hover:opacity-80 transition-opacity">
              <Phone className="size-4" />
              <span>+91 99904 55657</span>
            </a>
            <p className="text-xs md:text-sm">
              First floor plot no.-1 khashra no -14 jai ganga sabji mandi rajpur khurd new delhi 110068
            </p>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("main");
                }}
                className="text-2xl bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
              >
                Kushwaha Classes
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`transition-colors ${
                    link.name === "Play School"
                      ? "text-pink-600 hover:text-pink-700 font-medium"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50"
                onClick={() => setEnrollmentOpen(true)}
              >
                Enroll With Us
              </Button>
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                onClick={() => setConsultationOpen(true)}
              >
                Consult Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block transition-colors ${
                    link.name === "Play School"
                      ? "text-pink-600 font-medium"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3">
                <Button
                  variant="outline"
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
                  onClick={() => setEnrollmentOpen(true)}
                >
                  Enroll With Us
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  onClick={() => setConsultationOpen(true)}
                >
                  Consult Now
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}