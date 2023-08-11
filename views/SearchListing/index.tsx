import { rentalsApi } from "@/api/rentalsApi";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { Rental } from "@/types/SearchListing.interfaces";
import ListingItem from "@/components/ListingItem";

const SearchListing = (): JSX.Element => {

    const [rentals, setRentals] = useState<Rental[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const debouncedSearch = useDebounce(searchTerm, 300);

    useEffect(()=> {
        async () => {
            try {
                const data = await rentalsApi.getAllRentalsByKeyword(debouncedSearch);
                setRentals(data);
            } catch {
                setRentals([]);
            }
        }
    },[debouncedSearch])

    const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    },[]);

    return (
        <div className="test">
            <input placeholder={"Search Rentals..."} onChange={onSearchChange} />
            {
               rentals.length > 0 ? 
                (
                    rentals.map((rental) => {
                        return (
                            <ListingItem key={rental.id} data={rental} />
                        )
                    })
                ) : "No Rentals Found."
            }
        </div>
    )
}

export default SearchListing;