import { type ForwardRefRenderFunction, forwardRef } from "react"
import "./index.scss"
import { type IInput } from "./interface"

const Input:
    ForwardRefRenderFunction<HTMLInputElement, IInput> = (props, ref) => {
        const { ...othersProps } = props

        return (
            <input className="input" {...othersProps} ref={ref}/>
        )
    }

Input.displayName = "Input"

export default forwardRef(Input)
