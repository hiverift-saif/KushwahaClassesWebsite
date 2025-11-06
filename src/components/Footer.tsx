import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handlePlaySchoolClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("playschool");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBlogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("blog");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl mb-4 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Kushwaha Classes
            </h3>
            <p className="text-sm mb-4">
              Academic Excellence Institute empowers students for success in the IIT JEE & NEET entrance exams through comprehensive and expertly crafted educational programs.
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-white text-xl mb-4">Site Map</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">Courses</a></li>
              <li>
                <a 
                  href="#playschool" 
                  onClick={handlePlaySchoolClick}
                  className="hover:text-pink-400 transition-colors"
                >
                  Play School
                </a>
              </li>
              <li><a href="#gallery" className="hover:text-orange-400 transition-colors">Gallery</a></li>
              <li>
                <a 
                  href="#blog" 
                  onClick={handleBlogClick}
                  className="hover:text-orange-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white text-xl mb-4">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">IIT-JEE</a></li>
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">NEET</a></li>
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">Accounts Classes</a></li>
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">Economics Classes</a></li>
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">Arts Classes</a></li>
              <li><a href="#courses" className="hover:text-orange-400 transition-colors">Academics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="size-5 flex-shrink-0 text-orange-400" />
                <span>First floor plot no.-1 khashra no -14 jai ganga sabji mandi rajpur khurd new delhi 110068</span>
              </li>
              <li className="flex gap-2">
                <Phone className="size-5 flex-shrink-0 text-orange-400" />
                <div>
                  <div>
                    <a href="tel:+919990455657" className="hover:text-orange-400 transition-colors">
                      +91 99904 55657
                    </a>
                  </div>
                  <div>
                    <a href="tel:+918076549269" className="hover:text-orange-400 transition-colors">
                      +91 80765 49269
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex gap-2">
                <Mail className="size-5 flex-shrink-0 text-orange-400" />
                <a href="mailto:info@firebrick-moose-845129.hostingersite.com" className="hover:text-orange-400 transition-colors">
                  info@firebrick-moose-845129.hostingersite.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Youtube className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2025 Kushwaha Classes Designed by KhatuShyam Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}