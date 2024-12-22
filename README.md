# Hotel App
This is a React application that displays a list of hotels and shows detailed information about a single hotel when selected. . The application fetches data from a JSON server and renders it on the frontend. Please find  the instructions below to set up and run the application locally.

### 1. Clone the Repository

Clone the project repository to your local machine.

### 2. Navigate to the Folder

Navigate to the project folder `hotel` and install the dependencies:

```bash
cd hotel
npm install
```
### 3. Start the json server using command 
Run the command to start the JSON server:
``` bash
npx json-server --watch hotels.json --port 5000
```
The JSON server will be available at:
API Endpoint: http://localhost:5000/hotels

### 4. Start the application 
Start the React application using the command: 
```bash
npm start