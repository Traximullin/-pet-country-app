import { type FC } from "react"
import { type IInputLeftIElement } from "./interface"
import "./index.scss"

const InputLeftIElement: FC<IInputLeftIElement> = (props) => {
    const { children, } = props

    return (
        <span className="input-left-element">
            {children}
        </span>
    )
}

export default InputLeftIElement
