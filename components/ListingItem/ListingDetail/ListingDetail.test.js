import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import ListingDetail from "./"
  
describe("ListingDetail Component", () => {
    render(<ListingDetail source='https://res.cloudinary.com/outdoorsy/image/upload/v1686197514/p/rentals/365844/images/hhfhiwqiw0lpyl6rvo97.jpg' alt='Test'/>);
    const listingDetail = screen.getByTestId("listingDetail");

    test("Rendering", () => {
        expect(listingDetail).toBeInTheDocument();
    })
})