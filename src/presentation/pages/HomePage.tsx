import { type FC } from "react"
import { Stack } from "../layouts"
import { CountryList, CountrySearch, CountrySelectionRegion } from "../dataComponents"

const HomePage: FC = () => {
    return (
        <>
            <Stack>
                <CountrySearch />
                <CountrySelectionRegion />
            </Stack>
            <CountryList />
        </>
    )
}

export default HomePage
