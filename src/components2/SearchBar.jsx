import React from 'react'
import { useState } from 'react'
import '../components/SearchBar.css'

const SearchBar = () => {
  const [term, setTerm] = useState('')
  const onInputChange = (e) => {
    setTerm(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="searchbar">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Video</label>
        <input type="text" value={term} onChange={onInputChange} />
      </form>
    </div>
  )
}

export default SearchBar
