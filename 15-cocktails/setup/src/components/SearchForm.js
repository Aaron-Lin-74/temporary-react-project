import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  return (
    <section className='search section'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Search your favourate cocktail</label>
          <input
            id='name'
            ref={searchValue}
            type='text'
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
