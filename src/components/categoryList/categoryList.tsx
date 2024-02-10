import React from 'react';

const categories = ['Category 1', 'Category 2', 'Category 3']; // Replace with real category data

const CategoryList: React.FC = () => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {categories.map((category, index) => (
      <li key={index} style={{ padding: '0.5rem 0' }}>{category}</li>
    ))}
  </ul>
);

export default CategoryList;