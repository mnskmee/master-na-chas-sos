import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const FloatingCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a href="tel:+74951234567">
      <Button
        size="lg"
        className="fixed bottom-24 right-4 md:bottom-6 rounded-full w-14 h-14 bg-gradient-secondary shadow-xl hover:scale-110 transition-transform z-40"
      >
        <Phone className="w-6 h-6" />
      </Button>
    </a>
  );
};

export default FloatingCallButton;
