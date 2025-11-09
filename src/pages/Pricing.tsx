import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import FloatingCallButton from "@/components/FloatingCallButton";

const Pricing = () => {
  const prices = [
    {
      category: "Сантехнические работы",
      items: [
        { service: "Замена смесителя", price: "от 800 ₽" },
        { service: "Установка раковины", price: "от 1200 ₽" },
        { service: "Замена унитаза", price: "от 2000 ₽" },
        { service: "Устранение течи", price: "от 600 ₽" },
        { service: "Прочистка канализации", price: "от 1500 ₽" },
      ],
    },
    {
      category: "Электромонтажные работы",
      items: [
        { service: "Установка розетки", price: "от 400 ₽" },
        { service: "Установка выключателя", price: "от 400 ₽" },
        { service: "Подключение люстры", price: "от 800 ₽" },
        { service: "Замена автомата", price: "от 600 ₽" },
        { service: "Прокладка кабеля (1м)", price: "от 200 ₽" },
      ],
    },
    {
      category: "Сборка мебели",
      items: [
        { service: "Кухонный гарнитур", price: "от 3000 ₽" },
        { service: "Шкаф-купе", price: "от 2500 ₽" },
        { service: "Стол/стул", price: "от 500 ₽" },
        { service: "Полка/стеллаж", price: "от 400 ₽" },
        { service: "Детская мебель", price: "от 1500 ₽" },
      ],
    },
    {
      category: "Замки и двери",
      items: [
        { service: "Установка замка", price: "от 1000 ₽" },
        { service: "Врезка фурнитуры", price: "от 800 ₽" },
        { service: "Регулировка двери", price: "от 600 ₽" },
        { service: "Установка доводчика", price: "от 1200 ₽" },
        { service: "Аварийное вскрытие", price: "от 1500 ₽" },
      ],
    },
  ];

  const faqs = [
    {
      question: "Как формируется цена?",
      answer: "Цена зависит от сложности работы, необходимых материалов и срочности выезда. Точную стоимость мастер озвучит после осмотра.",
    },
    {
      question: "Входят ли материалы в стоимость?",
      answer: "Указанные цены — только за работу мастера. Материалы оплачиваются отдельно по согласованию.",
    },
    {
      question: "Есть ли доплата за срочный вызов?",
      answer: "При срочном выезде (в течение 30 минут) доплата составляет 30% от стоимости работ.",
    },
    {
      question: "Предоставляете ли гарантию?",
      answer: "Да, на все выполненные работы предоставляется гарантия от 3 до 12 месяцев в зависимости от вида работ.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Прайс-лист
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Прозрачные цены на все виды работ
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {prices.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b last:border-0">
                        <span className="text-sm">{item.service}</span>
                        <span className="font-semibold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Что входит в стоимость работы?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Выезд мастера по Москве</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Диагностика проблемы</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Выполнение работы</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Уборка после работы</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/call-master">
              <Button size="lg" className="bg-gradient-secondary">
                Рассчитать стоимость работ
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

export default Pricing;
