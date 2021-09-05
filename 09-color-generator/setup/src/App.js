import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#f15025');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values(color).all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  return (
    <>
      <section className='container'>
        <h4>Generate colors</h4>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={color} 
            onChange={(e) => setColor(e.target.value)} 
            placeholder='#fff'
            className={`${error ? 'error' : null}`}
            />
          <button type='submit' className='btn'>Generate</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </section>
    </>
  )
}

export default App
