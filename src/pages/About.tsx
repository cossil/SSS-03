import React from 'react';
import { Users, Award, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Header section remains unchanged */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="mb-4">At South Side Sun, we're committed to empowering homes, small businesses, and rural properties in Florida with sustainable and cost-effective solar energy solutions. Our mission is to make clean energy accessible, understandable, and beneficial for everyone in our community.</p>
              <p>We believe in personalized service, technical excellence, and long-term partnerships with our clients. Our goal is not just to install solar panels, but to create energy independence and contribute to a greener future for Gainesville and beyond.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4">Founded by a veteran electrical engineer with over 30 years of experience, South Side Sun was born out of a passion for renewable energy and a desire to serve our local community. We saw a need for honest, expert solar consulting that prioritizes the customer's needs over aggressive sales tactics.</p>
              <p>Since our inception, we've been dedicated to educating and guiding our neighbors through the solar energy transition, ensuring they make informed decisions that benefit them in the long run.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <img src="https://via.placeholder.com/150" alt="John Doe" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">Founder & Lead Consultant</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <img src="https://via.placeholder.com/150" alt="Jane Smith" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Solar System Designer</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <img src="https://via.placeholder.com/150" alt="Mike Johnson" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-gray-600">Customer Relations Manager</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose South Side Sun?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p>We understand Gainesville's unique energy needs and regulations.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">30+ Years Experience</h3>
              <p>Benefit from our founder's extensive electrical engineering background.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <Leaf className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Solutions</h3>
              <p>We're committed to promoting clean energy and environmental responsibility.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;