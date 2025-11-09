import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Мастер на Час</h3>
            <p className="text-sm text-muted-foreground">
              Профессиональные мастера для решения любых бытовых проблем
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-sm hover:text-primary transition-colors">
                Услуги
              </Link>
              <Link to="/pricing" className="text-sm hover:text-primary transition-colors">
                Цены
              </Link>
              <Link to="/portfolio" className="text-sm hover:text-primary transition-colors">
                Наши работы
              </Link>
              <Link to="/reviews" className="text-sm hover:text-primary transition-colors">
                Отзывы
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@master-na-chas.ru" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@master-na-chas.ru
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Москва, ул. Примерная, д. 1</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Режим работы</h4>
            <p className="text-sm text-muted-foreground">
              Ежедневно с 8:00 до 22:00
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Прием срочных заявок 24/7
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Мастер на Час. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
