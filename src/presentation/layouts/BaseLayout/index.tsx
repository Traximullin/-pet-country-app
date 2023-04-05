import { type FC } from "react"
import "./index.scss"
import type IBaseLayout from "./interface"

const BaseLayout: FC<IBaseLayout> = (props) => {
    const { children, } = props

    return (
        <main className="base-layout">
            {children}
        </main>
    )
}

export default BaseLayout
