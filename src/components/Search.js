import React from 'react'

export default function Search(props) {
    const {filterFoods, searchInput} = props;

    return (
        <div>
        <h1>Search Food</h1>
        <input type='text' placeholder='Search food ...' value={searchInput} onChange={(e) => filterFoods(e)} />

    </div>
    )
}
