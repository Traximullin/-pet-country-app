import { type FC } from "react"
import { useNavigate } from "react-router-dom"
import { RouteEnum } from "../../../main/routes/mainRoute"
import { CountryCard, List } from "../../components"
import { useGetAllCountriesQuery } from "../../store/services/country/countryApi"
import { useAppSelector } from "../../store/hooks"

const CountryList: FC = () => {
    const navigation = useNavigate()
    const { search, region, } = useAppSelector(state => state.controls)

    const { data: countries, isLoading, isError, } = useGetAllCountriesQuery("")

    return (
        <List>
            {
                countries?.map(country => (
                    (
                        country.name.common.toLowerCase().includes(search.toLowerCase()) &&
                        country.region.includes(region)
                    ) &&

                    <CountryCard
                        key={`country-list-item-${country.name.common}`}
                        title={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital?.join(" ")}
                        src={country.flags.png}
                        alt={country.flags.alt}
                        onClick={() => { navigation(`${RouteEnum.COUNTRY}/${country.name.common}`) }}
                    />
                ))
            }
        </List>
    )
}

export default CountryList
