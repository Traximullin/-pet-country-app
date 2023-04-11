import { type FC } from "react"
import { BaseLayout, Container, Header } from "./presentation/layouts"
import Router from "./main/routes/router"

const App: FC = () => {
    return (
        <>
            <Header />
            <BaseLayout>
                <Container>
                    <Router />
                </Container>
            </BaseLayout>
        </>
    )
}

export default App
