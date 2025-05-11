import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const categoryProducts = products[category]?.[subcategory] || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 capitalize">
          {subcategory.replace(/-/g, ' ')}
        </h1>
        
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-600">
              No products found in this category
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage; 