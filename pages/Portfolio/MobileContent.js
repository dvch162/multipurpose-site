import React from 'react';

export default function MobileContent() {
  const industries = [
    'Education',
    'Beauty',
    'eCommerce',
    'Food',
    'Medical',
    'Real Estate',
    'Travel',
    'Personal',
    'Fitness',
    'Car Services',
  ];

  return (
    <div>
      <h2>Mobile Industries</h2>
      <ul>
        {industries.map((industry) => (
          <li key={industry}>{industry}</li>
        ))}
      </ul>
    </div>
  );
}
