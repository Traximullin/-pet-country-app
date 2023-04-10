import { type FC } from "react"
import { useNavigate } from "react-router-dom"
import { RouteEnum } from "../../../main/routes/mainRoute"
import { CountryCard, List } from "../../components"

const CountryList: FC = () => {
    const navigation = useNavigate()

    return (
        <List>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
            <CountryCard onClick={() => { navigation(`${RouteEnum.COUNTRY}/1`) }}/>
        </List>
    )
}

export default CountryList
