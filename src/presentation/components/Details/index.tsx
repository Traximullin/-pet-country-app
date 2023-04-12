import { type FC } from "react"
import "./index.scss"
import { type IDetails } from "./interface"
import Tag from "../Tag"

const Details: FC<IDetails> = (props) => {
    const {
        title, nativeName, population,
        region, subregion, capital,
        src, alt, domain,
        languages, borders,
    } = props

    return (
        <section className="details">
            <img
                className="details__image"
                src={src}
                alt={alt}
            />
            <div>
                <h1 className="details__title">{title}</h1>
                <div className="details__list-group">
                    <ul>
                        <li className="details__list-item">
                            <b>Native Name:</b>
                            {nativeName}
                        </li>
                        <li className="details__list-item">
                            <b>Population:</b>
                            {population}
                        </li>
                        <li className="details__list-item">
                            <b>Region:</b>
                            {region}
                        </li>
                        <li className="details__list-item">
                            <b>Sub Region:</b>
                            {subregion}
                        </li>
                        <li className="details__list-item">
                            <b>Capital:</b>
                            {capital}
                        </li>
                    </ul>
                    <ul>
                        <li className="details__list-item">
                            <b>Top Level Domain:</b>
                            {domain}
                        </li>
                        <li className="details__list-item">
                            <b>Languages:</b>
                            {languages}
                        </li>
                    </ul>
                </div>
                <div className="details__tags">
                    <b>Border Countries:</b>
                    <div className="details__list-tag">
                        {
                            borders?.map((border, index) => (
                                <Tag
                                    key={`border-country-${border}-${index}`}
                                >
                                    {border}
                                </Tag>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details
