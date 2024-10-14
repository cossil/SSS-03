import React, { useState, useEffect } from 'react';
import { Sun, Battery, Home, Image as ImageIcon } from 'lucide-react';
import { getImageUrl } from '../utils/imageService';

const ProjectCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getImageUrl(image).then(setImageUrl);
  }, [image]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={imageUrl || 'https://via.placeholder.com/400x300?text=Loading...'}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Residential Solar Installation",
      description: "A 10kW solar system for a family home in Gainesville, reducing their energy bills by 70%.",
      image: "residential solar installation"
    },
    {
      title: "Small Business Energy Upgrade",
      description: "Helped a local café optimize their energy usage and install a 15kW solar array.",
      image: "commercial solar installation"
    },
    {
      title: "Rural Property Off-Grid Solution",
      description: "Designed and consulted on an off-grid solar system for a remote farm property.",
      image: "off-grid solar system"
    },
    {
      title: "Community Solar Project",
      description: "Advised on a 50kW community solar project, benefiting multiple households.",
      image: "community solar project"
    },
    {
      title: "Solar Water Heating System",
      description: "Installed a solar water heating system for a local gym, significantly reducing their energy costs.",
      image: "solar water heating"
    },
    {
      title: "School Solar Education Program",
      description: "Implemented a small solar array at a local school, coupled with an educational program.",
      image: "school solar program"
    }
  ];

  return (
    <div className="bg-gray-100">
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl">Explore some of our successful solar energy installations and consultations</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Sun className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">1.5 MW</h3>
              <p>Total Solar Capacity Installed</p>
            </div>
            <div>
              <Battery className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">2.5 GWh</h3>
              <p>Annual Clean Energy Production</p>
            </div>
            <div>
              <Home className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">500+</h3>
              <p>Homes and Businesses Powered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;