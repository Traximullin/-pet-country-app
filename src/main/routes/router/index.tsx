import { type FC } from "react"
import { Routes, Route } from "react-router-dom"
import { HomePage } from "../../../presentation/pages"
import { RouteEnum } from "../mainRoute"

const Router: FC = () => (
    <Routes>
        <Route
            path={RouteEnum.HOME}
            element={<HomePage />}
        />
    </Routes>
)

export default Router
