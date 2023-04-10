import { type FC, useId, Children, createElement } from "react"
import "./index.scss"
import { type ISelect } from "./interface"

// !TODO рефакторить

const Select: FC<ISelect> = (props) => {
    const id = useId()

    const { children, placeholder, } = props

    return (
        <div className="select">
            <input
                id={`select-${id}`}
                className="select__checkbox"
                type="checkbox"
            />
            <label
                htmlFor={`select-${id}`}
                className="select__wrapper"
            >
                {placeholder}
            </label>
            <label className="select__closure" htmlFor={`select-${id}`}/>
            <ul className="select__list">
                {
                    children &&
                        Children.map(children, child => (
                            createElement(
                                "li",
                                { className: "select__list-item", },
                                123
                            )
                        ))
                }
            </ul>
        </div>
    )

}

export default Select
