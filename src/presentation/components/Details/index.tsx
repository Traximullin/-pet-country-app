import { type FC } from "react"
import "./index.scss"
import { type IDetails } from "./interface"
import Tag from "../Tag"

const Details: FC<IDetails> = (props) => {
    const { ...othersProps } = props

    return (
        <section className="details">
            <img
                className="details__image"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9f/%D0%A4%D0%BB%D0%B0%D0%B3_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_%281%29.jpg"
                alt="flag"
            />
            <div>
                <h1 className="details__title">Title</h1>
                <div className="details__list-group">
                    <ul>
                        <li className="details__list-item">
                            <b>Native Name:</b>
                            1
                        </li>
                        <li className="details__list-item">
                            <b>Population:</b>
                            2
                        </li>
                        <li className="details__list-item">
                            <b>Region:</b>
                            3
                        </li>
                        <li className="details__list-item">
                            <b>Sub Region:</b>
                            4
                        </li>
                        <li className="details__list-item">
                            <b>Capital:</b>
                            5
                        </li>
                    </ul>
                    <ul>
                        <li className="details__list-item">
                            <b>Top Level Domain:</b>
                            6
                        </li>
                        <li className="details__list-item">
                            <b>Currency:</b>
                            7
                        </li>
                        <li className="details__list-item">
                            <b>Languages:</b>
                            8
                        </li>
                    </ul>
                </div>
                <div className="details__tags">
                    <b>Border Countries:</b>
                    <div className="details__list-tag">
                        <Tag/>
                        <Tag/>
                        <Tag/>
                        <Tag/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details
