import { type FC } from "react"
import "./index.scss"
import { type ICountryCard } from "./interface"

const CountryCard: FC<ICountryCard> = (props) => {
    const { onClick, } = props

    return (
        <article className="country-card" onClick={onClick}>
            <img
                className="country-card__flag"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9f/%D0%A4%D0%BB%D0%B0%D0%B3_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_%281%29.jpg"
                alt="flag"
            />
            <div className="country-card__desc">
                <p className="country-card__title">
                    Russland
                </p>
                <ul className="country-card__list">
                    <li>
                        <b>Polulation: </b>
                        40 128 234
                    </li>
                    <li>
                        <b>Region: </b>
                        40 128 234
                    </li>
                    <li>
                        <b>Capital: </b>
                        40 128 234
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default CountryCard
