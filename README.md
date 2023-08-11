## Getting Started

- Ensure Docker is installed on your machine ( https://www.docker.com/products/docker-desktop/ )
    - Build/Start the container by running ```docker-compose up -d```
    - To enter the container to run commands (such as testing)
        - Get the container name: ```docker-compose ps```
        - Enter the container: ```docker exec -it <container-name> sh```
        - To test: ```npm run test```
    - Navigate to `http://localhost:3000` to see the application
-  Alternatively, you can run ```npm run dev``` (or ```npm run test```) from the root

## IF I had a week...
- More testing, specifically integration testing
- Update styling organization to include separate files for variables, likely introduce SASS or another preprocessor to get mixins/more defined structure to CSS
- Add to the API layer to enhance functionality, off the cuff - add a view for finding rentals by filtering attributes

