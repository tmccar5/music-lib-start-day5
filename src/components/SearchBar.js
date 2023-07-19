import { useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar(props) {
    // const {term, handleSearch} = useContext(SearchContext)
    const [termState, setTermState] = useState()

    return (
        <form>
            <input onChange={(e)=> setTermState(e.target.value)} type="text" placeholder="Search Here" />
            <button onClick={(e) => props.handleSearch(e, termState)}>Submit</button>
        </form>
    )
}

export default SearchBar
