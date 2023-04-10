import { type FC } from "react"
import { Routes, Route } from "react-router-dom"
import { HomePage, ShowCountryPage } from "../../../presentation/pages"
import { RouteEnum } from "../mainRoute"

const Router: FC = () => (
    <Routes>
        <Route
            path={RouteEnum.HOME}
            element={<HomePage />}
        />
        <Route
            path={`${RouteEnum.COUNTRY}/:id`}
            element={<ShowCountryPage />}
        />
    </Routes>
)

export default Router
