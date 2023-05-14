# the-weather-app
An app to display weather conditions for a particular city.

## Usage
A version (hopefully latest) of the app can be accessed [from here](https://the-weather-app-97c5b.web.app/)  
Enter a city name, click on one of the fetched city results and the weather info for that city shall be rendered.    
Just a friendly reminder, the data presented by the app undergoes certain approximations and does not claim to be fully accurate.

## Building From Source
**NOTE : App is developed using Node 18 (LTS)**

### client
install the dependencies using
`npm install`  
run the client using `npm run dev`

### server
install the dependencies using `npm install`  
run the server using `npm start`

## Other Information
### client
client is a react app utilizing parcel bundler, [water.css](https://watercss.kognise.dev/) is used for styling. 
Some svg icons distributed by AM Charts (under CC BY 4.0 license) have been used and associated LICENSE has been preserved in the codebase.

### server
server is an express based node application, exposing a very simplified version of the [Open Meteo](https://open-meteo.com/) API. 

### Deployment
As of now the client is being deployed 
using [firebase hosting](https://firebase.google.com/docs/hosting/quickstart) and 
the server is being deployed using [render.com](https://render.com/)
