
import React from 'react';
import { Code, Github, Server, Globe, Database, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Integration = () => {
  return (
    <section id="integration" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Seamless <span className="gradient-text">Integration</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Effortlessly connect our drone delivery network with your existing business infrastructure using our developer-friendly tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Connect Your Platform</h3>
            <p className="text-gray-600 mb-6">
              Our API-first approach makes it simple to integrate drone delivery capabilities into your existing apps, websites, or business systems.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full gradient-bg flex items-center justify-center mr-4">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">RESTful APIs</h4>
                  <p className="text-gray-600 text-sm">Simple, well-documented endpoints for order creation, tracking, and management.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full gradient-bg flex items-center justify-center mr-4">
                  <Github className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">SDKs & Libraries</h4>
                  <p className="text-gray-600 text-sm">Ready-to-use client libraries for JavaScript, Python, Java, and more.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full gradient-bg flex items-center justify-center mr-4">
                  <Server className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Webhook Events</h4>
                  <p className="text-gray-600 text-sm">Real-time notifications for delivery status updates and system events.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <Tabs defaultValue="rest" className="w-full animate-fade-in" style={{animationDelay: '0.3s'}}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="rest">REST API</TabsTrigger>
                <TabsTrigger value="sdk">SDK</TabsTrigger>
                <TabsTrigger value="webhook">Webhooks</TabsTrigger>
              </TabsList>
              
              <TabsContent value="rest" className="border rounded-lg overflow-hidden">
                <div className="bg-gray-900 text-gray-100 p-4 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-400 text-xs">API Request Example</span>
                  </div>
                  <pre className="whitespace-pre-wrap">
                    <code>{`// Creating a new delivery request
fetch('https://api.skylink-delivery.com/deliveries', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    pickup: {
      lat: 37.7749,
      lng: -122.4194,
      address: "123 Market St, San Francisco, CA"
    },
    dropoff: {
      lat: 37.7833,
      lng: -122.4167,
      address: "456 Mission St, San Francisco, CA"
    },
    package: {
      size: "small",
      weight: 1.5, // kg
      description: "Food delivery"
    },
    priority: "high"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}</code>
                  </pre>
                </div>
              </TabsContent>
              
              <TabsContent value="sdk" className="border rounded-lg overflow-hidden">
                <div className="bg-gray-900 text-gray-100 p-4 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-400 text-xs">JavaScript SDK Example</span>
                  </div>
                  <pre className="whitespace-pre-wrap">
                    <code>{`// First, install our SDK
// npm install skylink-delivery-sdk

import { SkyLinkDelivery } from 'skylink-delivery-sdk';

// Initialize the client
const skylink = new SkyLinkDelivery('YOUR_API_KEY');

// Create a delivery
async function createDelivery() {
  try {
    const delivery = await skylink.deliveries.create({
      pickup: {
        lat: 37.7749,
        lng: -122.4194,
        address: "123 Market St, San Francisco, CA"
      },
      dropoff: {
        lat: 37.7833,
        lng: -122.4167,
        address: "456 Mission St, San Francisco, CA"
      },
      package: {
        size: "small",
        weight: 1.5,
        description: "Food delivery"
      }
    });
    
    console.log('Delivery created:', delivery.id);
    
    // Track the delivery in real-time
    skylink.deliveries.track(delivery.id, (status) => {
      console.log(\`Delivery status: \${status.current}\`);
    });
  } catch (error) {
    console.error('Error creating delivery:', error);
  }
}`}</code>
                  </pre>
                </div>
              </TabsContent>
              
              <TabsContent value="webhook" className="border rounded-lg overflow-hidden">
                <div className="bg-gray-900 text-gray-100 p-4 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-400 text-xs">Webhook Event Example</span>
                  </div>
                  <pre className="whitespace-pre-wrap">
                    <code>{`// Sample webhook event payload
{
  "event": "delivery.status_updated",
  "delivery_id": "del_8f293hd92",
  "timestamp": "2025-04-07T14:28:43.511Z",
  "data": {
    "status": "in_transit",
    "previous_status": "preparing",
    "estimated_arrival": "2025-04-07T14:35:00.000Z",
    "current_location": {
      "lat": 37.7800,
      "lng": -122.4180
    },
    "progress": {
      "percent": 65,
      "distance_remaining": 1.2, // km
      "time_remaining": 420 // seconds
    }
  }
}

// Setting up a webhook endpoint (Node.js/Express example)
app.post('/webhooks/skylink', (req, res) => {
  const event = req.body;
  
  // Verify webhook signature (recommended)
  if (isValidSignature(req)) {
    // Handle different event types
    switch (event.event) {
      case 'delivery.status_updated':
        updateDeliveryStatus(event.delivery_id, event.data);
        break;
      case 'delivery.completed':
        completeDelivery(event.delivery_id);
        break;
      // Handle other event types...
    }
    
    res.status(200).send('Webhook received');
  } else {
    res.status(401).send('Invalid signature');
  }
});`}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <Card className="card-hover animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center mb-4">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <CardTitle>Global Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our APIs support multiple languages, regions, and currencies for seamless global operations.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="card-hover animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center mb-4">
                <Database className="h-5 w-5 text-white" />
              </div>
              <CardTitle>Scalable Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Built to handle millions of delivery requests with 99.99% uptime guarantee and seamless scaling.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="card-hover animate-fade-in" style={{animationDelay: '0.3s'}}>
            <CardHeader>
              <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center mb-4">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <CardTitle>Enterprise Security</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                End-to-end encryption, OAuth 2.0 authentication, and SOC 2 Type II compliance for maximum security.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Integration;
