import React from 'react';
import { Sun, Wrench, Zap, BookOpen, Activity } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p>{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl">Comprehensive solar energy solutions tailored to your needs</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Sun className="h-8 w-8 text-blue-600" />}
              title="Solar System Assessment and Planning"
              description="Our experts evaluate your property, energy needs, and budget to design the optimal solar energy system for you."
            />
            <ServiceCard
              icon={<Wrench className="h-8 w-8 text-blue-600" />}
              title="DIY Installation Consulting"
              description="For the hands-on homeowner, we provide guidance and support throughout your DIY solar installation process."
            />
            <ServiceCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Energy Efficiency Optimization"
              description="We analyze your energy consumption patterns and recommend ways to maximize efficiency and reduce costs."
            />
            <ServiceCard
              icon={<BookOpen className="h-8 w-8 text-blue-600" />}
              title="Education and Training"
              description="Learn about solar technology, energy conservation, and best practices through our workshops and seminars."
            />
            <ServiceCard
              icon={<Activity className="h-8 w-8 text-blue-600" />}
              title="System Monitoring"
              description="We set up and explain monitoring systems to help you track your solar energy production and consumption."
            />
            <ServiceCard
              icon={<Wrench className="h-8 w-8 text-blue-600" />}
              title="Maintenance Services"
              description="Regular check-ups and maintenance to ensure your solar system operates at peak efficiency for years to come."
            />
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
    </div>
  );
};

export default Services;