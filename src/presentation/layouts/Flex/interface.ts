import { type ReactNode } from "react"
import { type Property } from "csstype"

export default interface IFlex {
    children: ReactNode
    gap?: number
    flexDirection?: Property.FlexDirection
    justifyContent?: Property.JustifyContent
    alignItems?: Property.AlignItems
    flexWrap?: Property.FlexWrap
}
