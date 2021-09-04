import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if(index < 0) {
      setIndex(lastIndex);
    } else if(index > lastIndex) {
      setIndex(0);
    }

  }, [index, people]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  });
  
  return (
    <section className='section'>
      <div className='section-center'>
        <h1>/ Reviews</h1>
        <div className='title'>
          
        </div>
        {people.map((person, ind) => {
          const {id, image, name, title, quote} = person;
          let slideClass = 'nextSlide';
          if(ind === index) {
            slideClass = 'activeSlide';
          }
          if(ind === index - 1 || (index === 0 && ind === people.length - 1)) {
            slideClass = 'lastSlide';
          }
          return (
            <article key={id} className={slideClass}>
              <img src={image} alt={name} className='person-img'/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          );
        })}   
        
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
        
      </div>
      
   
    </section>);
}

export default App;
