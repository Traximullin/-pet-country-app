import { useRef, type FC, type ChangeEvent } from "react"
import { Input, InputGroup, InputLeftIElement } from "../../components"
import { searchSvg } from "../../assets/svg"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setSearch } from "../../store/reducers/controlSlice"

const CountrySearch: FC = () => {
    const dispatch = useAppDispatch()
    const search = useAppSelector(state => state.controls.search)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        dispatch(setSearch(e.target.value))
    }

    return (
        <InputGroup>
            <InputLeftIElement>
                <img src={searchSvg} alt="search" />
            </InputLeftIElement>
            <Input
                value={search}
                ref={inputRef}
                placeholder="Search for a country..."
                onChange={handleSearchChange}
            />
        </InputGroup>
    )
}

export default CountrySearch
