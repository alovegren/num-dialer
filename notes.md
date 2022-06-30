# Problem
Implement a full stack application with one feature: the application frontend displays a "call" button, and when it is clicked, the application simulates the dialing of a hardcoded list of phone numbers.

- The completion of each phone call will not necessarily occur in the same order that the calls were made
- The status of a phone call at any given moment will either be the literal string "ringing", "answered", or "completed".
  - Response e.g. would look like { "id": 2345, "status": "answered" }

## Frontend
- We could invoke setInterval and poll the backend for updates in the status of the phone calls

## Backend
### Our backend API endpoints to expose 
- An endpoint to set off the dialing of numbers (idk POST /calls??)
  - Sends a request to the LS API
  - Provide JSON body: e.g. { 
    phone: "13018040009",
    webhookURL: "blah.meow.com",
    }
  - we'll get back something like this { "id": 2345 }, identifying the call itself
- Create one API endpoint (POST) to receive webhooks from the numDialerAPI
  - Update the status of a particular call that we have stored in our hash
- Create another endpoint (GET) that the front end can poll
  - maybe to /statuses which would respond with a list 

## Other app logic
- The array of phone numbers is stored in memory
- The server is listening for webhooks from the dialer API
- We can store a hash in memory to track the status of each call
  - Phone number, status of the call, id of the call
- Option: use Promises (copy our code from Monday) to control the logic of setting off the "chain reaction" of calls

## File Structure
### Frontend
*insert react app here*

### Backend
controllers
  - external API related logic.js
  - all other logic.js
index.js <---- set up Express, expose our backend API endpoints, use
               middlewares a la Trello



13018040009 - ringing

19842068287 - answered

15512459377 - completed # 1

19362072765 - answered

18582210308 - ringing

13018040009 - idle

19842068287 - idle

15512459377 - idle

19362072765 - idle