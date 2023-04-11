import { useState, type FC, useEffect } from "react"
import "./index.scss"
import { ToggleTheme } from "../../components"

const Header: FC = () => {

    const [theme, setTheme] = useState("light")

    useEffect(() => {
        document.body.setAttribute("data-theme", theme)
    }, [theme])

    const handleToggleTheme = (): void => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Where is the world?</h1>
                <ToggleTheme onClick={handleToggleTheme}>
                    {theme}
                </ToggleTheme>
            </div>
        </header>
    )
}

export default Header
