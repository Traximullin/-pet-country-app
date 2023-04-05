import { type FC } from "react"
import { BaseLayout, Container, Header } from "./presentation/layouts"
import { CountryCard, List } from "./presentation/components"

const App: FC = () => {
    return (
        <>
            <Header />
            <BaseLayout>
                <Container>
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
                        <CountryCard />
                        <CountryCard />
                        <CountryCard />
                        <CountryCard />
                        <CountryCard />
                    </List>
                </Container>
            </BaseLayout>
        </>
    )
}

export default App
