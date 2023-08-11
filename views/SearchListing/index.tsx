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
    const [isLoading, setIsLoading] = useState<boolean>();

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(()=> {
        const updateSearch = async (searchString: string): Promise<void> => {
            try {
                const data = await rentalsApi.getAllRentalsByKeyword(searchString);
                setRentals(data);
            } catch {
                setRentals([]);
            }
        }
        updateSearch(debouncedSearchTerm).then(() => setIsLoading(false));
    },[debouncedSearchTerm])

    const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const searchString = e.target.value;
        if (searchString != "")
        {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
        setSearchTerm(e.target.value);
    }, []);

    const getSearchedDisplay = (): JSX.Element | JSX.Element[] | string => {
        if (searchTerm == "") {return (<div className={styles.resultsDisplay}></div>)}
        if (rentals.length > 0) {return (
            rentals.map((rental) => {
                return (
                    <ListingItem key={rental.id} data={rental} />
                )
            })
        )}
        return (<div className={styles.resultsDisplay}>{`No results round for ${searchTerm}`}</div>)
    }

    return (
        <div className="test">
            <input placeholder={"Search Rentals..."} onChange={onSearchChange} className={styles.searchInput} />
            {
                isLoading ? (<div className={styles.resultsDisplay}>Loading...</div>) : getSearchedDisplay()
            }
        </div>
    )
}

export default SearchListing;