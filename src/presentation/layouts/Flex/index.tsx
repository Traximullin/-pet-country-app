import { type FC } from "react"
import "./index.scss"
import type IFlex from "./interface"

const Flex: FC<IFlex> = (props) => {
    const { children, flexDirection, flexWrap, gap, justifyContent, alignItems, } = props

    return (
        <div
            className="flex"
            style={{
                gap: gap && `${gap}px`,
                flexDirection,
                justifyContent,
                alignItems,
                flexWrap,
            }}
        >
            {children}
        </div>
    )
}

export default Flex
