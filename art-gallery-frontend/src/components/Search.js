function Search( {handleSearch} ) {
    return(
        <div id='searchbar'> 
            <input
                type="text"
                className='searchbar'
                id="search"
                placeholder="Search Art"
                onChange={(e) => handleSearch(e)}
            />
            
        </div>
    )
}

export default Search;