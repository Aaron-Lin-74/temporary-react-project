import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(["all", ...new Set(items.map(item=>item.category))]);
  // const allCategories = items.map((item) => {
  //   return item.category;
  // }).filter((value, index, self) => {
  //   return self.indexOf(value) === index
  // })
  const filterItems = (category) => {
    if(category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
