import { type FC } from "react"
import { BaseLayout, Container, Header } from "./presentation/layouts"
import { CountryCard, Input, InputGroup, InputLeftIElement, List } from "./presentation/components"
import { searchSvg } from "./presentation/assets/svg"

const App: FC = () => {
    return (
        <>
            <Header />
            <BaseLayout>
                <InputGroup>
                    <InputLeftIElement>
                        <img src={searchSvg} alt="search" />
                    </InputLeftIElement>
                    <Input placeholder="Test"/>
                </InputGroup>
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
