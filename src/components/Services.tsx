
import React from 'react';
import { 
  ShoppingBag, 
  Pill, 
  Package, 
  Coffee, 
  FileText, 
  Clock 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefit: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, benefit, delay }) => (
  <Card className="card-hover h-full animate-fade-in" style={{ animationDelay: `${delay}s` }}>
    <CardHeader>
      <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center mb-4">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardContent>
    <CardFooter className="border-t pt-4">
      <div className="flex items-center text-sm text-skylink-600 font-medium">
        <Clock className="h-4 w-4 mr-2" />
        {benefit}
      </div>
    </CardFooter>
  </Card>
);

const Services = () => {
  const services = [
    {
      title: "E-commerce Deliveries",
      description: "Fast and reliable drone delivery services for online retailers. Perfect for local deliveries and time-sensitive products.",
      icon: <ShoppingBag size={24} className="text-white" />,
      benefit: "Reduce delivery time by up to 70%",
      delay: 0.1
    },
    {
      title: "Medical Supplies",
      description: "Critical medical supply transport for hospitals, clinics, and pharmacies. Temperature-controlled options available.",
      icon: <Pill size={24} className="text-white" />,
      benefit: "Life-saving speed and precision",
      delay: 0.2
    },
    {
      title: "Food Delivery",
      description: "Hot food delivery for restaurants and food delivery apps. Keep customers happy with speedy, efficient service.",
      icon: <Coffee size={24} className="text-white" />,
      benefit: "Arrive hot and fresh every time",
      delay: 0.3
    },
    {
      title: "Courier Services",
      description: "Urgent document and small package delivery. Beat traffic and geographical obstacles with our drone network.",
      icon: <FileText size={24} className="text-white" />,
      benefit: "Same-day, time-critical delivery",
      delay: 0.4
    },
    {
      title: "Retail Last-Mile",
      description: "Last-mile delivery solutions for retail businesses. Expand your delivery range without expanding your fleet.",
      icon: <Package size={24} className="text-white" />,
      benefit: "Expand delivery radius by 200%",
      delay: 0.5
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">
            Our <span className="gradient-text">Delivery Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Integrate our specialized drone delivery solutions to transform your business operations and customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              benefit={service.benefit}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="btn-primary">View All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
