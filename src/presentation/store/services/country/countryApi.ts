import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ALL_COUNTRIES, BASE_URL, COUNTRY_BY_NAME } from "../../../../main/api/config"
import { type CountriesResponse } from "./country.model"

export const countryApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getAllCountries: builder.query<CountriesResponse[], string>({
            query: () => ALL_COUNTRIES,
        }),
        getCountryByName: builder.query<CountriesResponse, string>({
            query: (name) => `${COUNTRY_BY_NAME}/${name}`,
            transformResponse: (response: CountriesResponse[]) => response[0],
        }),
    }),
})

export const { useGetAllCountriesQuery, useGetCountryByNameQuery, } = countryApi
