import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import ListingItem from "./"
import ListingDetail from "./ListingDetail";
import ListingImage from "./ListingImage";
  
describe("ListingItem Component", () => {
    const mockData = {
        id: "377586",
        title: '2023 Ultimate Toys Ultimate Coach',
        imageUrl: 'https://res.cloudinary.com/outdoorsy/image/upload/v1691499740/p/rentals/377586/images/d9irkp3evup27j40sywb.jpg'
      };

    render(
        <ListingItem data={mockData} />
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