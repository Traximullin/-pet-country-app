import { type FC } from "react"
import { Button, Details } from "../../../components"
import { useNavigate, useParams } from "react-router-dom"
import { useGetCountryByNameQuery } from "../../../store/services/country/countryApi"

const ShowCountryPage: FC = () => {
    const navigate = useNavigate()
    const { name, } = useParams()

    const { data: country, isLoading, isError, } = useGetCountryByNameQuery(name as string)

    const handleBackClick = (): void => {
        navigate(-1)
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {isError && <p>An error has occurred</p>}
            <Button onClick={handleBackClick}>Back</Button>
            {
                !isLoading &&
                <Details
                    title={country?.name.common}
                    nativeName={country?.name.common}
                    population={country?.population}
                    region={country?.region}
                    subregion={country?.subregion}
                    capital={country?.capital.join(" ")}
                    src={country?.flags.png}
                    alt={country?.flags.alt}
                    domain={country?.tld.join(" ")}
                    borders={country?.borders}
                    languages={Object.values(country?.languages as object).join(" ")}
                />
            }
        </>
    )
}

export default ShowCountryPage
