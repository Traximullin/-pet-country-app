import { type FC } from "react"
import { Button, Details } from "../../../components"
import { useNavigate } from "react-router-dom"

const ShowCountryPage: FC = () => {
    const navigate = useNavigate()

    const handleBackClick = (): void => {
        navigate(-1)
    }

    return (
        <>
            <Button onClick={handleBackClick}>Back</Button>
            <Details />
        </>
    )
}

export default ShowCountryPage
