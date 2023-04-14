import { type ReactNode, type PropsWithChildren, type ReactElement, type SelectHTMLAttributes } from "react"

export interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
    value: string
    handleChangeClick: (value: string) => void
}

export interface IOption extends ReactElement<PropsWithChildren> {
    props: {
        children: ReactNode
        value: string
    }
}
