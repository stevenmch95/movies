import { MoviesGrid } from "../components/MoviesGrid";
import React from "react";
import { Search } from "../components/Search";
import { useQuery } from "../hooks/useQuery";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
    const query = useQuery();
    const search = query.get("search");

    const debounSearch = useDebounce(search, 350)
    return (

        <div>
            <Search />
            < MoviesGrid key={debounSearch} search={debounSearch} />
        </div>

    );
}