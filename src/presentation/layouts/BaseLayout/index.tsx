import { type FC } from "react"
import "./index.scss"
import { Header, Footer } from "../index"
import type IBaseLayout from "./interface"

const BaseLayout: FC<IBaseLayout> = (props) => {
    const { children, } = props

    return (
        <div className="base-layout">
            <Header />
            <div data-grid="23">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default BaseLayout
