import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import ListingImage from "./"
  
describe("ListingImage Component", () => {
    render(<ListingImage source='https://res.cloudinary.com/outdoorsy/image/upload/v1686197514/p/rentals/365844/images/hhfhiwqiw0lpyl6rvo97.jpg' alt='Test'/>);
    const listingImage = screen.getByTestId("listingImage");

    test("Rendering", () => {
        expect(listingImage).toBeInTheDocument();
    })
})