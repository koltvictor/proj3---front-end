import Search from './Search';

function NavBar({searchArt,handleSearch}) {
    return(
        <div>
            <Search searchArt={searchArt} handleSearch={handleSearch} /> 
        </div>
    )
}

export default Search;