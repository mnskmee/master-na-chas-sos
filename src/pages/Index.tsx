import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, ThumbsUp, Wrench, Zap, Hammer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import FloatingCallButton from "@/components/FloatingCallButton";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    { icon: Clock, title: "Приедем за 30 минут", description: "Быстрый выезд к вам домой" },
    { icon: Shield, title: "Гарантия качества", description: "Официальная гарантия на все работы" },
    { icon: ThumbsUp, title: "Опытные мастера", description: "Более 5 лет опыта работы" },
  ];

  const services = [
    { icon: Wrench, title: "Сантехника", description: "Ремонт смесителей, труб, установка" },
    { icon: Zap, title: "Электрика", description: "Розетки, выключатели, освещение" },
    { icon: Hammer, title: "Сборка мебели", description: "Быстрая и качественная сборка" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Мастер приедет<br />за 30 минут
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Срочный ремонт сантехники, электрики, сборка мебели и другие услуги
          </p>
          <Link to="/call-master">
            <Button size="lg" className="bg-gradient-secondary text-lg px-8 py-6 h-auto hover:scale-105 transition-transform">
              Вызвать мастера прямо сейчас
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <service.icon className="w-16 h-16 mx-auto mb-4 text-secondary" />
                  <h3 className="text-2xl font-bold mb-2 text-center">{service.title}</h3>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg">Все услуги</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Нужен мастер срочно?</h2>
          <p className="text-xl mb-8 opacity-90">Звоните сейчас и мастер приедет в течение 30 минут!</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+74951234567">
              <Button size="lg" variant="secondary" className="w-full md:w-auto">
                Позвонить: +7 (495) 123-45-67
              </Button>
            </a>
            <Link to="/call-master">
              <Button size="lg" className="w-full md:w-auto bg-gradient-secondary">
                Оставить заявку онлайн
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <StickyBar />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
