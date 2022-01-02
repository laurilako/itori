Place, where you can post, edit or delete your images with title and some details.
Making this for learning purposes and as a full stack project.
Creating during free time / when I have spare time.
Backend in separate repository: https://github.com/laurilako/itori-backend

Test application live: https://stark-meadow-54802.herokuapp.com/
(Application is not 100% bug free! 😅)

Stack I've planned to use: MongoDB, Express, ReactJS, NodeJS. (aka MERN)

## Dev blog 2.1.2022:

This is something I have planned to do ever since doing Full-Stack Open course back in summer 2021 and
now as I finally had some spare time from my studies, I finally managed to do this. My initial idea was to 
create some kind of marketplace (as the name might reveal to someone) thing where one would be able to:
 - Create account and then use created credentials to login.
 - Create listings with info and image.
 - Edit, delete own listings/posts.
 - See all listings/posts.

The stack I chose was simply because It was used in the Full Stack Open course (it was familiar).
First I tried to find good UI framework for React, and decided to use Chakra-UI because it was rated good for small-medium sized projects
and it was simple to use and had good documentation.

I started with front-end: First I created the landing page and header/navigation component, and planned some routes and how the overall site would look.
Then I started to develope the backend. During the creation of authentication and route controlling I had to remember and check the materials of FS open and google
about how it should be done (Hashing, JWT library, Schemes for MongoDB with refs to listings etc).

After developing the backend and testing that it works, (with Postman), I then added database functionalities to the front-end with axios.

One of the harder things to implement was this: How can I create working Image addition to the listings. After googling, I decided to use Cloudinary for image storing.
Mostly because it had free plan, good documentation to implement with React. I only had to add the url from the uploaded picture to its listing and database.

More detailed info from developing this project you can get by checking commit history (Commits should have somewhat accurate info about the commit).

When I was finalizing these core functionalities to the front-end, I thought I should think of some negative things I can myself see as a not-so-experienced full stack dev.
  - State controlling is a bit messy and I seriously should've thought using Redux or implement it now.
  - Code is also a bit messy in some parts.
  - I should've added comments about what I did and WHY on the hardest parts.

Overall I think this was great project to do in learning purposes, and I had great help from different documentations and course materials of courses I've done.
And, in the end, It works as intended. Might look clumsy and have some of the negative things I listed above, but these all can be fixed. =)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
