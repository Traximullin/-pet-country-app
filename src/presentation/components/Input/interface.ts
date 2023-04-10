import { type RefObject, type InputHTMLAttributes } from "react"

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    ref?: RefObject<HTMLInputElement>
}
