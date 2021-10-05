function Search({searchArt, handleSearch}) {
    return(
        <div id='searchbar'> 
            <input
                type="text"
                className='searchbar'
                id="search"
                placeholder="Search Art"
                value={searchArt}
                onChange={(e) => handleSearch(e)}
            />
            
        </div>
    )
}

export default Search;