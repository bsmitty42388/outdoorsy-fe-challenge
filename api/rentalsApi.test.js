import '@testing-library/jest-dom'
import { rentalsApi } from './rentalsApi'

  
describe("Rentals API Request", () => {

    // TODO: better test, this could break if sorting of the api response changes, etc. should probably mock the response as well assuming api limits, etc.
    test("Returns response with title and image url", async () => {
        const data = await rentalsApi.getAllRentalsByKeyword("trailer");
        expect(data[0]).toStrictEqual({
            id: "365844",
            title: "2018 Cherokee Wolf Cherokee Wolf",
            imageUrl: "https://res.cloudinary.com/outdoorsy/image/upload/v1686197514/p/rentals/365844/images/hhfhiwqiw0lpyl6rvo97.jpg"
          })
    })
})