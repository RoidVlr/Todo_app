import { Input } from "antd"

const Search = ({search, setSearch}) => {

  return <Input.Search
    className="search"
    variant="underlined"
    placeholder="Поиск"
    value={search}
    onChange={e => setSearch(e.target.value)}
  />
}

export default Search;