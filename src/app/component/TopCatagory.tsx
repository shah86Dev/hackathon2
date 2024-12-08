import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const TopCategories: React.FC = () => {
  const categories = [
    {
      id: 1,
      image: '/ti1.png',
      title: 'Wing Chair',
      productCount: 3584,
    },
    {
      id: 2,
      image: '/ti2.png',
      title: 'Wooden Chair',
      productCount: 157,
    },
    {
      id: 3,
      image: '/ti3.png',
      title: 'Desk Chair',
      productCount: 154,
    },
  ];

  return (
    <Card className="w-full pr-40 pl-40">
      <CardHeader>
        <CardTitle>Top Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={category.image} alt={category.title} className="h-64 w-full object-cover" width={500} height={256} />
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">{category.title}</h3>
                <p className="text-gray-500 font-medium">{category.productCount} Products</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopCategories;