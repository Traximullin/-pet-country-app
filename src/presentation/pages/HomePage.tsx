import { type FC } from "react"
import { Container, Stack } from "../layouts"
import { CountryList, CountrySearch, CountrySelectionRegion } from "../dataComponents"

const HomePage: FC = () => {
    return (
        <Container>
            <Stack>
                <CountrySearch />
                <CountrySelectionRegion />
            </Stack>
            <CountryList />
        </Container>
    )
}

export default HomePage
