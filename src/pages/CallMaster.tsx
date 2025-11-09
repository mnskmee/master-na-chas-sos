import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { Clock, Shield, Phone } from "lucide-react";

const CallMaster = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    problem: "",
    address: "",
    urgent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.problem) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-telegram", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });

      setFormData({
        name: "",
        phone: "",
        problem: "",
        address: "",
        urgent: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позвонить нам напрямую: +7 (495) 123-45-67",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Вызвать мастера
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Заполните форму и мастер свяжется с вами в течение 5 минут
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-1">Быстро</h3>
                <p className="text-sm text-muted-foreground">Приедем за 30 минут</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-1">Надежно</h3>
                <p className="text-sm text-muted-foreground">Гарантия на все работы</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="w-10 h-10 mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-1">24/7</h3>
                <p className="text-sm text-muted-foreground">Работаем круглосуточно</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
              <CardDescription>
                Заполните форму ниже и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problem">Опишите проблему *</Label>
                  <Textarea
                    id="problem"
                    placeholder="Например: протекает кран в ванной"
                    rows={4}
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Адрес (необязательно)</Label>
                  <Input
                    id="address"
                    placeholder="Москва, ул. Примерная, д. 1, кв. 1"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <div className="flex items-center space-x-2 p-4 bg-secondary/10 rounded-lg">
                  <Checkbox
                    id="urgent"
                    checked={formData.urgent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, urgent: checked as boolean })
                    }
                  />
                  <Label htmlFor="urgent" className="cursor-pointer font-semibold text-secondary">
                    Срочный вызов (доплата 30%)
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-secondary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Или позвоните нам:{" "}
                  <a href="tel:+74951234567" className="font-semibold text-primary hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <StickyBar />
    </div>
  );
};

export default CallMaster;
