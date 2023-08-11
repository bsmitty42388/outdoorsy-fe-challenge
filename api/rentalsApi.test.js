import '@testing-library/jest-dom'
import { rentalsApi } from './rentalsApi'

  
describe("Rentals API Request", () => {

    // TODO: better test, this could break if sorting of the api response changes, etc. should probably mock the response as well assuming api limits, etc.
    test("Returns response with title and image url", async () => {
        const data = await rentalsApi.getAllRentalsByKeyword("trailer");
        expect(data[0]).toStrictEqual({
            id: "377586",
            title: '2023 Ultimate Toys Ultimate Coach',
            imageUrl: 'https://res.cloudinary.com/outdoorsy/image/upload/v1691499740/p/rentals/377586/images/d9irkp3evup27j40sywb.jpg'
          })
    })
})