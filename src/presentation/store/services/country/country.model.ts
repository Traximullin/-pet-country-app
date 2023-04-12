
export type CountriesResponse = CountryI

interface CountryI {
    name: {
        common: string
        nativeName: {
            eng: {
                official: string
            }
        }
    }
    region: string
    subregion: string
    population: number
    capital: string[]
    currencies: {
        BBD: {
            name: string
        }
    }
    languages: object
    tld: string[]
    borders: string[]
    flags: {
        png: string
        alt: string
    }
}
