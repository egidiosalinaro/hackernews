<a name="readme-top"></a>

  <h1 align="center">HackerNews</h1>

  <p align="center">
    An awesome Tech News Reader powered with <a href="https://github.com/HackerNews/API" target="_blank"><strong>Hacker News</strong></a> service.
    <br />
    <a href="https://hackernews-api-react-egidiosalinaro.netlify.app/" target="_blank">Try the app!</a>
  </p>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project-question">About The Project</a>
      <ul>
        <li><a href="#built-with-bricks">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started-clapper">Getting Started</a>
      <ul>
        <li><a href="#prerequisites-pencil">Prerequisites</a></li>
        <li><a href="#installation-gear">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage-joystick">Usage</a></li>
    <li><a href="#roadmap-world_map">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project :question:

<br>
<p align="center">
  <img width="800" alt="hackernews-by-egidiosalinaro" src="https://github.com/egidiosalinaro/hackernews/assets/129901135/e2dfcf14-f30e-4876-917d-aa930ee4f9b8">
<p>
<br>
The goal of the project is to develop an application to democratize the sharing of information in the tech field, through the use of the <strong>Hacker News</strong> service.
  
At its startup the application displays the list of the latest news available by showing title, link, author and date of the story. Then it contacts APIs of the external Hacker News service to retrieve the list of latest news IDs. For each ID, the application recalls another API of the Hacker News service to obtain the information to be displayed such as the title, link, author and date of the news.

Note: the first API useful to get the list of the latest news (newstories) returns about 500 elements. In order to avoid performance problems, after having retrieved the list of the latest news, the application will show only details of the first 10 news. Through a button `Load more` the application will allow the user to go and view information of the next 10 news.
  
Functions to call APIs are in the `services` folder; the main button features are developed in the `hooks` folder; a function to show release time of each story referred to current nowtime can be found in the `mappers` folder.
  
A golden shadow, developed in `./src/styles/headerStyle.js` and in `./src/styles/buttonStyle.js` shows up to inform the user that there are new available stories above/below her/his viewport.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With :bricks:

JavaScript is basically all I used to bootstrap this project.
I created the app using React: every html element and css/sass style is developed through JavaScript files.

<p align="left"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> Html5 <br>
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a> Css3 <br>
<a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> Sass <br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> JavaScript ES6 <br>
<a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> Webpack <br>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> React</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started :clapper:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br>
I published this code at the link https://hackernews-api-react-egidiosalinaro.netlify.app/ so you can use it, but if you want you can also install it in your device using React:


### Prerequisites :pencil:

You need to have Node and npm installed. You can check the version you have installed running:
* npm
  ```sh
  npm -v
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Installation :gear:

Once downloaded this repo, in the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage :joystick:

At its startup the application displays a list of the latest 10 tech news available by showing title, link, author and release date of each story. The user can read them by clicking on the title or on the relative open-in-a-new-tab button. User can decide to load ten more stories with the bottom `LOAD MORE` button, or to refresh the page using the `NEW STORIES` button.
Golden shadows shows up from the header and the footer to inform the user that there are new available stories above/below her/his viewport.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap :world_map:

- [x] call `newstories` API
- [x] call APIs for each stories' details
- [x] time functions
- [x] `Load More` button to call 10 new stories
- [x] styles improvements
    - [x] shadows to inform about new available stories
    - [x] colors and buttons images


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

egidiosalinaro@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
