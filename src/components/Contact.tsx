
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';
import { Check, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a server
    toast({
      title: "Message received!",
      description: "We'll get back to you as soon as possible.",
      action: (
        <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="h-5 w-5 text-white" />
        </div>
      ),
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Contact our team to learn how SkyLink can transform your delivery operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your business needs and how we can help" 
                    rows={5}
                    required
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="btn-primary">
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Schedule a Demo</h3>
              <p className="text-gray-600 mb-6">
                See SkyLink in action with a personalized demo tailored to your business needs.
              </p>
              <Button className="w-full">Book Demo</Button>
            </Card>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office Location</h4>
                  <p className="text-gray-600 text-sm">
                    SkyLink Tower, 123 Tech Park<br />
                    Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm">
                    +91 (80) 2345-6789<br />
                    Mon-Fri: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">
                    info@skylink-delivery.com<br />
                    support@skylink-delivery.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
