import React, { useState } from 'react';
import text from './data';
import data from './data';
function App() {
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = 0;
    if(count <= 0) {
      amount = 1;
    }
    if(count > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  }

  return (
    <section className='section'>
      <div className='section-center'>
        <h3>Lorem ipsum</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>paragraphs</label>
          <input type='number' id='amount' name='amount' value={count}
            onChange={(e) => setCount(e.target.value)} />
          <button type='submit' className='btn'>Generate</button>
        </form>
        {text.map((item, index) => {
          return (<p key={index}>{item}</p>)
        })}
      </div>
    </section>
    )
}

export default App;
