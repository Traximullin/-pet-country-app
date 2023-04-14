import { type FC, useId, Children, createElement } from "react"
import "./index.scss"
import { type IOption, type ISelect } from "./interface"

// !TODO рефакторить

const Select: FC<ISelect> = (props) => {
    const id = useId()
    const { children, placeholder, value, handleChangeClick, } = props

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
                {value || placeholder}
            </label>
            <label className="select__closure" htmlFor={`select-${id}`}/>
            <ul className="select__list">
                {
                    children &&
                        Children.map(children, child => {
                            const item = child as IOption

                            return (
                                createElement(
                                    "li",
                                    {
                                        className: "select__list-item",
                                        onClick: () => {
                                            handleChangeClick(item.props.value as string)
                                        },
                                    },
                                    item.props.children
                                )
                            )
                        })
                }
            </ul>
        </div>
    )

}

export default Select
