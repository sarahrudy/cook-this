import React from 'react'
import { Link } from 'react-router-dom'
import smoothieImg from '../../images/smoothie.png'
import saladImg from '../../images/salad.png'
import chickenImg from '../../images/chicken.png'
import pastaImg from '../../images/pasta.png'
import healthyImg from '../../images/diet.png'

const Ideas = ({ handleImageClick }) => {
  return (
    <section className='ideas'>
      <h2>Need some ideas?</h2>
        <Link to='/recipes'>
          <img src={ smoothieImg } className='ideas-img' alt=''
            onClick={ () => handleImageClick('smoothie') }>
          </img>
        </Link>
        <Link to='/recipes'>
          <img src={ saladImg } className='ideas-img' alt='' 
            onClick={ () => handleImageClick('salad') }></img>
        </Link>
        <Link to='/recipes'>
          <img src={ chickenImg } className='ideas-img' alt=''
            onClick={ () => handleImageClick('chicken') }></img>
        </Link>
        <Link to='/recipes'>
          <img src={ pastaImg } className='ideas-img' alt='' 
            onClick={ () => handleImageClick('pasta') }></img>
        </Link>
        <Link to='/recipes'>
          <img src={ healthyImg } className='ideas-img' alt='' 
            onClick={ () => handleImageClick('healthy') }></img>
        </Link>
    </section>
  );
};

export default Ideas;