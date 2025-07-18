const SearchFilter = ({ filter, setFilter, search, setSearch, countries, setCountries }) => {

    const sortCountries = (value) => {
        const sortCountries = [...countries].sort((a, b) => {
            return value === 'asc' ?
                a.name.common.localeCompare(b.name.common) :
                b.name.common.localeCompare(a.name.common)
        })
        setCountries(sortCountries)
    }


    return (
        <section className="section-searchFilter container">
            <input
            className="search-input"
                type="search"
                placeholder="search"
                value={search}
                onChange={(e) => {
                    e.preventDefault()
                    setSearch(e.target.value)
                }}
            />

            <div>
                <button onClick={() => sortCountries('asc')}>Asc</button>
            </div>
            <div>
                <button onClick={() => sortCountries('desc')}>Desc</button>
            </div>

            <div>
                <select className="select-section"
                    value={filter}
                    onChange={(e) => {
                        e.preventDefault()
                        setFilter(e.target.value)
                    }}
                >
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    );
};

export default SearchFilter;
