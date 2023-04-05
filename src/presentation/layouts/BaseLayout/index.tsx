import { type FC } from "react"
import "./index.scss"
import Header from "../Header"
import Footer from "../Footer"
import type IBaseLayout from "./interface"

const BaseLayout: FC<IBaseLayout> = (props) => {
    const { children, } = props

    return (
        <div className="base-layout">
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default BaseLayout
