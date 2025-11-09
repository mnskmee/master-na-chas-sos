import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import FloatingCallButton from "@/components/FloatingCallButton";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Контакты
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+74951234567" className="text-lg font-semibold hover:text-primary transition-colors">
                  +7 (495) 123-45-67
                </a>
                <p className="text-sm text-muted-foreground mt-2">Звоните с 8:00 до 22:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@master-na-chas.ru" className="text-lg font-semibold hover:text-primary transition-colors">
                  info@master-na-chas.ru
                </a>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://t.me/masternachas" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    Написать в Telegram
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground mt-2">Быстрые ответы 24/7</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Адрес офиса</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">г. Москва, ул. Примерная, д. 1, офис 101</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Метро "Примерная", 5 минут пешком
                    </p>
                  </div>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-muted-foreground" />
                  <p className="ml-2 text-muted-foreground">Карта</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Ежедневно с 8:00 до 22:00</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Прием заявок и консультации
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <p className="font-semibold text-secondary mb-2">Срочные вызовы 24/7</p>
                    <p className="text-sm">
                      Круглосуточный прием срочных заявок при аварийных ситуациях
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <StickyBar />
      <FloatingCallButton />
    </div>
  );
};

export default Contacts;
