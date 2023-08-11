'use client';

import { rentalsApi } from "@/api/rentalsApi";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { Rental } from "@/types/SearchListing.interfaces";
import ListingItem from "@/components/ListingItem";
import styles from "./SearchListing.module.css"

const SearchListing = (): JSX.Element => {

    const [rentals, setRentals] = useState<Rental[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(()=> {
        const updateSearch = async (searchString: string): Promise<void> => {
            console.log(searchString)
            try {
                const data = await rentalsApi.getAllRentalsByKeyword(searchString);
                setRentals(data);
            } catch {
                setRentals([]);
            }
        }
        updateSearch(debouncedSearchTerm);
    },[debouncedSearchTerm])

    const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }, []);

    const getSearchedDisplay = (): JSX.Element[] | string => {
        if (searchTerm == "") {return ""}
        if (rentals.length > 0) {return (
            rentals.map((rental) => {
                return (
                    <ListingItem key={rental.id} data={rental} />
                )
            })
        )}
        return `No results round for ${searchTerm}`
    }

    return (
        <div className="test">
            <input placeholder={"Search Rentals..."} onChange={onSearchChange} className={styles.searchInput} />
            {getSearchedDisplay()}
        </div>
    )
}

export default SearchListing;