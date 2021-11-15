import React from 'react'
import './Ideas.css'
import { Link } from 'react-router-dom'
import smoothieImg from '../../images/smoothie.png'
import saladImg from '../../images/salad.png'
import chickenImg from '../../images/chicken.png'
import pastaImg from '../../images/pasta.png'
import healthyImg from '../../images/diet.png'

const Ideas = ({ handleImageClick }) => {
  return (
    <section className='ideas-container'>
      <p className='ideas-title'>Need some ideas? Click on one of the images below:</p>
      <div className='img-container'>
        <Link to='/recipes'>
          <img src={ smoothieImg } className='ideas-img' alt='smoothie'
            onClick={ () => handleImageClick('smoothie') }>
          </img>
        </Link>
        <Link to='/recipes'>
          <img src={ saladImg } className='ideas-img' alt='salad bowl' 
            onClick={ () => handleImageClick('salad') }></img>
        </Link>
        <Link to='/recipes'>
          <img src={ chickenImg } className='ideas-img' alt='chicken'
            onClick={ () => handleImageClick('chicken') }></img>
        </Link>
        <Link to='/recipes'>
          <img src={ pastaImg } className='ideas-img' alt='pasta' 
            onClick={ () => handleImageClick('pasta') }></img>
        </Link>
        <Link to='/recipes'>
          <img src={ healthyImg } className='ideas-img' alt='healthy ingredients' 
            onClick={ () => handleImageClick('healthy') }></img>
        </Link>
      </div>
    </section>
  );
};

export default Ideas;