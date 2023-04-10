import { type FC } from "react"
import { BaseLayout, Header } from "./presentation/layouts"
import Router from "./main/routes/router"

const App: FC = () => {
    return (
        <>
            <Header />
            <BaseLayout>
                <Router />
            </BaseLayout>
        </>
    )
}

export default App
