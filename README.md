## See the app in action
https://messagebird-dashboard.surge.sh/

^ To actually use it, you will need an access code.
If you're supposed to read this, you can find it in the email sent to you 🤡


## About the app
This app allows you to send and receive messages using the Messagebird API. The repository for the server which is needed to run this app locally can be found here: https://bitbucket.org/niekert/messagebird-dashboard-server

## Technical stack
This app is built using React and Redux along with styled components. This stack allows for quick prototyping with a testable and scalable architecture. The project was bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app) but ejected because of the need for some additional features (async/await, Hot module reloading)

The app is tested with Facebook's [Jest](https://github.com/facebook/jest) and AirBnB's [Enzyme](https://github.com/airbnb/enzyme/)

## Running the app locally
1. Clone this repo and cd to it
2. Create an .env.local file in the root of the app directory with the following content:
```
REACT_APP_API_URL_BASE=<Url where the API is hosted>
REACT_APP_WS_URL=<URL of the websocket host for receiving new texts> //
```
3. run `yarn && yarn start`

## About the code
- It uses the "scenes" folder architecture. [This Medium Article](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) explains it in depth
- Even though the app is pretty small, I decided to use redux for state storge because it's easy to implement, prevents you from passing down props all the way down (which is hard to read) and it makes the code easily testable
- Styled components is used to theme the app, one cool thing about this is that you can change colors in the "theme.js" file and they'll update everywhere. This makes it easy to implement different themes
- Websockets are used to directly update the list of messages as soon as a new message is received from a MessageBird webhook

## What's not finished
Obviously this app is not in a production ready state. I've decided to drop some things because it would take a lot of time implementing all of this, here's a list of those things:

- Not everything is tested. I've tested some aspects of the app (actions, reducers, containers and components) to demonstrate how they can be tested, getting more test coverage would only be more time consuming
- Some UI parts look and feel a bit rough

