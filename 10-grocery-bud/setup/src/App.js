import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  if (localStorage.getItem('list')) {
    return JSON.parse(localStorage.getItem('list'));

  } else {
    return [];
  }
}
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: 'hello world', type: 'success' });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("success");
    if (!name) {
      //setAlert({show:true, msg:'Please enter value', type:'danger'})
      showAlert(true, 'danger', 'Please enter value')
    } else if (name && isEditing) {
      // deal with edit
      setList(list.map(item => {
        if (item.id === editID) {
          return { ...item, title: name }
        }
        return item;
      }))

      setEditID(null);
      setIsEditing(false);
      setName('');
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'Item added')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem]);
      setName('');
    }
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  }
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    const newList = list.filter(item => {
      return item.id != id;
    });
    setList(newList);
  }

  const editItem = (id) => {
    // find the specific item by id
    const specificItem = list.find(item => item.id === id);
    setName(specificItem.title);
    setIsEditing(true);
    setEditID(id);

  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery bud</h3>
        <div className='form-control'>
          <input type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <button className='submit-btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>Clear items</button>
        </div>
      )}

    </section>
  )
}

export default App
