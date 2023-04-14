import { type FC } from "react"
import { Select } from "../../components"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setRegion } from "../../store/reducers/controlSlice"

const CountrySelectionRegion: FC = () => {
    const dispatch = useAppDispatch()
    const region = useAppSelector(state => state.controls.region)

    const handleChangeRegion = (value: string): void => {
        dispatch(setRegion(value))
    }

    return (
        <Select
            handleChangeClick={handleChangeRegion}
            placeholder="Filter by region"
            value={region}
        >
            <option value="">None</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </Select>
    )
}

export default CountrySelectionRegion
