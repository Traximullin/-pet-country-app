import { type FC } from "react"
import { type IToggleTheme } from "./interface"
import "./index.scss"

const ToggleTheme: FC<IToggleTheme> = (props) => {
    const { onClick, children, } = props

    return (
        <div className="toggle-theme" onClick={onClick} >
            <p className="toggle-theme__title">
                {children}
            </p>
        </div>
    )
}

export default ToggleTheme
