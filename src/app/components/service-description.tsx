import React from 'react';

interface ServiceDescriptionProps {
  title: string;
  description: string;
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ title, description }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <p className="text-gray-700 text-center mb-8">{description}</p>
    </div>
  );
};

export default ServiceDescription;