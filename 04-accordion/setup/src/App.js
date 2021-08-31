import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about the login</h3>
        <section className="info">
          {data.map(item => <SingleQuestion 
            key={item.id} 
            title={item.title} 
            info={item.info}

        />)}
        </section>
      </div>
    </main>
  );
}

export default App;
