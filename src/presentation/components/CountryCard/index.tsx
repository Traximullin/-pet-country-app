import { type FC } from "react"
import "./index.scss"

const CountryCard: FC = () => {
    return (
        <article className="country-card">
            <img
                className="country-card__flag"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9f/%D0%A4%D0%BB%D0%B0%D0%B3_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_%281%29.jpg"
                alt="flag"
            />
            <div className="country-card__desc">
                <h3 className="country-card__title">
                    Russland
                </h3>
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
