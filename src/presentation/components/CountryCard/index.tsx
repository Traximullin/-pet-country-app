import { type FC } from "react"
import "./index.scss"
import { type ICountryCard } from "./interface"

const CountryCard: FC<ICountryCard> = (props) => {
    const { onClick, title, population, region, capital, src, alt, } = props

    return (
        <article className="country-card" onClick={onClick}>
            <img
                className="country-card__flag"
                src={src}
                alt={alt}
            />
            <div className="country-card__desc">
                <p className="country-card__title">
                    {title}
                </p>
                <ul className="country-card__list">
                    <li>
                        <b>Polulation: </b>
                        {population}
                    </li>
                    <li>
                        <b>Region: </b>
                        {region}
                    </li>
                    <li>
                        <b>Capital: </b>
                        {capital}
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default CountryCard
