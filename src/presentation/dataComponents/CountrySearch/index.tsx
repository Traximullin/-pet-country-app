import { useRef, type FC } from "react"
import { Input, InputGroup, InputLeftIElement } from "../../components"
import { searchSvg } from "../../assets/svg"

const CountrySearch: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSearchChange = (): void => {
        if (inputRef.current?.value.trim()) {
            console.log(inputRef.current.value)
        }
    }

    return (
        <InputGroup>
            <InputLeftIElement>
                <img src={searchSvg} alt="search" />
            </InputLeftIElement>
            <Input
                ref={inputRef}
                placeholder="Search for a country..."
                onChange={handleSearchChange}
            />
        </InputGroup>
    )
}

export default CountrySearch
