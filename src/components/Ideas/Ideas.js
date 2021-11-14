import React from 'react' 
import { NavLink } from 'react-router-dom'

const Ideas = () => {
  return (
    <section>
      <h2>Need some ideas?</h2>
        <NavLink to='/smoothies'>Smoothies</NavLink>
        <NavLink to='/salads'>Salads</NavLink>
        <NavLink to='/chicken'>Chicken Dishes</NavLink>
        <NavLink to='/pasta'>Pasta Dishes</NavLink>
        <NavLink to='/healthy'>Healthy Dishes</NavLink>
    </section>
  );
};

export default Ideas;