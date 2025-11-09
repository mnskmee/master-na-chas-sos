import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/services", label: "Услуги" },
    { to: "/pricing", label: "Цены" },
    { to: "/portfolio", label: "Работы" },
    { to: "/reviews", label: "Отзывы" },
    { to: "/contacts", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">М</span>
            </div>
            <span className="font-bold text-lg md:text-xl">Мастер на Час</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+74951234567" className="hidden md:flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-semibold">+7 (495) 123-45-67</span>
            </a>
            <Link to="/call-master">
              <Button className="bg-gradient-secondary hover:opacity-90">
                Вызвать мастера
              </Button>
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 px-2 text-sm font-medium transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/70"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
