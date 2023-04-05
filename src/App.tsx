import { type FC } from "react"
import { BaseLayout, Flex } from "./presentation/layouts"
import { CountryCard } from "./presentation/components"

const App: FC = () => {
    return (
        <BaseLayout>
            <Flex flexDirection="row" gap={12} flexWrap="wrap">
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
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
                <CountryCard />
            </Flex>
        </BaseLayout>
    )
}

export default App
