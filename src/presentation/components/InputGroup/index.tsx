import { type FC } from "react"
import { type IInputGroup } from "./interface"
import "./index.scss"

const InputGroup: FC<IInputGroup> = (props) => {
    const { children, } = props

    return (
        <label className="input-group">
            {children}
        </label>
    )
}

export default InputGroup
