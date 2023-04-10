import { type FC } from "react"
import { Container, Stack } from "../layouts"
import { CountryCard, Input, InputGroup, InputLeftIElement, List, Select } from "../components"
import { searchSvg } from "../assets/svg"

const HomePage: FC = () => {
    return (
        <Container>
            <Stack>
                <InputGroup>
                    <InputLeftIElement>
                        <img src={searchSvg} alt="search" />
                    </InputLeftIElement>
                    <Input placeholder="Search for a country..."/>
                </InputGroup>
                <Select placeholder="Filter by region">
                    <option>123</option>
                    <option>123</option>
                    <option>123</option>
                    <option>123</option>
                </Select>
            </Stack>
            <List>
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
            </List>
        </Container>
    )
}

export default HomePage
