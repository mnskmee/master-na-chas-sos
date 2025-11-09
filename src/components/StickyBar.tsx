import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Phone, Wrench } from "lucide-react";

const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-xl md:hidden">
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-2 gap-3">
          <a href="tel:+74951234567">
            <Button variant="outline" className="w-full" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Позвонить
            </Button>
          </a>
          <Link to="/call-master">
            <Button className="w-full bg-gradient-secondary" size="lg">
              <Wrench className="w-5 h-5 mr-2" />
              Вызвать
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
