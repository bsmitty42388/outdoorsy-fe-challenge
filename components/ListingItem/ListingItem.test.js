import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import ListingItem from "./"
import ListingDetail from "./ListingDetail";
import ListingImage from "./ListingImage";
  
describe("ListingItem Component", () => {
    render(
        <ListingItem>
            <ListingImage />
            <ListingDetail />
        </ListingItem>
    );
    const listingItem = screen.getByTestId("listingItem");
    const listingImage = screen.getByTestId("listingImage");
    const listingDetail = screen.getByTestId("listingDetail");

    test("Renders self with children", () => {
        expect(listingItem).toBeInTheDocument();
        expect(listingImage).toBeInTheDocument();
        expect(listingDetail).toBeInTheDocument();
    });
})