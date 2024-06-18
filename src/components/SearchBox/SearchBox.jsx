const SearchBox = ({value, onFilter}) => {
    return <><div>
        <label htmlFor="">Find contacts by name</label>
        <input type="text" value={value} onChange={e =>onFilter(e.target.value)} /></div>
    </>
}

export default SearchBox;