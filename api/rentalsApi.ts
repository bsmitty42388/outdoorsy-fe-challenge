import axios from "axios";
import { Rental } from "@/types/SearchListing.interfaces";

const rentalsInstance = axios.create({
    baseURL: `https://search.outdoorsy.com`,
    timeout: 5000,
});

/**
 * Acts as a "DTO" of sorts, response object to be parsed for specific FE needs
 */
interface RentalResponse {
    id: string,
    type: string,
    attributes: {
        name: string,
        primary_image_url: string
    }
    relationships: Object[]
}

const parseResponseToRental = (data: RentalResponse[]): Rental[] => {
    return data.map((rental: RentalResponse) => {
        return {
            id: rental.id,
            title: rental.attributes.name,
            imageUrl: rental.attributes.primary_image_url
        }
    });
}

export const rentalsApi = {
    /**
     * Returns a list of rental image urls and display text for a given keyword search - sets page limit to include all entries, TODO: pagination using page limit and offset
     * @param keyword 
     * @returns List of Rental objects
     */
    getAllRentalsByKeyword: async function(keyword: string): Promise<Rental[]>  {
        const response = await rentalsInstance.request({
            method: "GET",
            url: `rentals?filter[keywords]=${keyword}`
        });

        const responseData = response.data;

        return responseData.data.length > 0 ? parseResponseToRental(responseData.data) : [];
        
    }
}