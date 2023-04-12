import { type FC } from "react"
import "./index.scss"
import { type ITag } from "./interface"

const Tag: FC<ITag> = (props) => {
    const { children, } = props

    return (
        <span className="tag">
            {children}
        </span>
    )
}

export default Tag
