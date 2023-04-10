import { type FC } from "react"
import "./index.scss"
import { type IStack } from "./interface"

const Stack: FC<IStack> = (props) => {
    const { children, } = props

    return (
        <div className="stack">
            {children}
        </div>
    )
}

export default Stack
