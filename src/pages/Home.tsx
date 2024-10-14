import React from 'react';
import { ArrowRight, Sun, DollarSign, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Expert Solar Energy Consulting in Gainesville, FL</h1>
          <p className="text-xl mb-8 animate-fade-in-delay-1">Empowering homes, small businesses, and rural properties with sustainable energy solutions.</p>
          <Link to="/contact" className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 inline-flex items-center animate-fade-in-delay-2">
            Get a Free Consultation <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <Sun className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Solar System Assessment</h3>
              <p>Expert evaluation of your property for optimal solar energy solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <DollarSign className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">DIY Installation Consulting</h3>
              <p>Guidance and support for those looking to install their own solar systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <Leaf className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Energy Efficiency Optimization</h3>
              <p>Comprehensive analysis and recommendations to maximize your energy savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
    </div>
  );
};

export default Home;