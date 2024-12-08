import React from 'react';
import Image from 'next/image';

const FeaturedSec: React.FC = () => {
  const products = [
    {
      id: 1,
      label: 'New',
      image: '/p1.jpg', // Ensure this file exists in the /public folder
      title: 'Library Stool Chair',
      price: '$20',
    },
    {
      id: 2,
      label: 'Sales',
      image: '/p2.png', // Ensure this file exists in the /public folder
      title: 'Library Stool Chair',
      price: '$20 $30',
    },
    {
      id: 3,
      image: '/p3.png', // Ensure this file exists
      title: 'Library Stool Chair',
      price: '$20',
    },
    {
      id: 4,
      image: '/p4.png', // Ensure this file exists
      title: 'Library Stool Chair',
      price: '$20',
    },
  ];

  return (
    <section className="bg-white py-12 pr-40 pl-40">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <Image
                  src={product.image || '/placeholder.png'} // Fallback to '/placeholder.png'
                  alt={product.title}
                  className="w-full h-64 object-cover"
                  width={500}
                  height={300}
                />
                {product.label && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded text-xs">
                    {product.label}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                <p className="text-gray-600 font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSec;
