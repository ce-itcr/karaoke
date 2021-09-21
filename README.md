# karaoke

[![Netlify Status](https://api.netlify.com/api/v1/badges/96ac06e6-5fad-46ba-8807-2574d9cd059f/deploy-status)](https://app.netlify.com/sites/karaoke-ceitcr/deploys)

karaoke! Project for the course SOA41D - Software Architecture. A simple Karaoke Streaming App build with React and Nodejs.

> This application works in conjunction with with a self-built API, you can see the code here 👉 [karaoke-api](https://github.com/ce-itcr/karaoke-api).

## Working application

Check out the **live application** -> https://karaoke-ceitcr.netlify.app/

If you need to test functionalities for different users, log in with the following credentials:

Basic level user:

* username: basic
* password: basic1

Premium user (With this type of user, you can edit/delete and add songs to the database):

* username: premium
* password: premium1

![app-landing](https://github.com/ce-itcr/karaoke/blob/master/src/assets/videos/app-landing.gif)

![app-login](https://github.com/ce-itcr/karaoke/blob/master/src/assets/videos/app-login.gif)

![app-songs](https://github.com/ce-itcr/karaoke/blob/master/src/assets/videos/app-songs.gif)


## Support

If you like our work, feel free to:

- ⭐ this repository. And we will be happy together :)

## Who is it for 🤷‍♀️

As a user, you can search and play a song for which the Karaoke application will stream the audio and synchronize the lyrics so that you can sing to the rhythm of the music.

Among the main requirements (at a very general level) that have been foreseen are the following:

* The user must authenticate through Forms and the system validates it against its own user database.
* User can add / delete / modify existing songs and lyrics. This is only allowed for premium users.
* The user must be able to search through a list of songs, the one they want to play. You can search for it by song name, artist, album, and lyric snippets.
* The user can play a song for which the Karaoke application will stream the audio and synchronize the lyrics so that the user can sing to the rhythm of the music

## Tech stack

![Tech Logos](https://res.cloudinary.com/dek4evg4t/image/upload/v1632256120/karaoke-app/Documentaci%C3%B3n/tech-stack.png)

- [React](https://reactjs.org/) - frontend development
- [Nodejs](https://nodejs.org/en/) - backend development
- [Mongodb](https://www.mongodb.com/) - database technology
- [Netlify](https://www.netlify.com/) - app deployment

## High-level design

See the original notes on [karaoke-app/Documentation][https://ce-itcr.github.io/karaoke/]

### Structure

It was intended to make a facade for each main section, where an index redirects only to the components it needs and only consumes the connections in the clients folder

```
├───assets ->	Multimedia
│   ├───images	
│   └───videos	
├───clients -> API Connections
├───components ->	React Components
│   ├───app	-> Main App Navigation
│   │   ├───AddSong	
│   │   ├───EditSong	
│   │   ├───Home	
│   │   ├───Navbar	
│   │   ├───Player	
│   │   │   ├───PlayerBottom	
│   │   │   └───SongsLyrics	
│   │   ├───Profile	
│   │   └───Sidebar	
│   ├───landing	-> Landing Navigation
│   │   ├───Footer	
│   │   ├───HeroSection	
│   │   ├───InfoSection	
│   │   ├───Navbar	
│   │   └───Sidebar	
│   ├───login	-> Login UI
│   │   └───Signin	
│   └───utils	
│       ├───NotFound	
│       └───Player	
├───pages	-> index Facade
└───tests	-> App tests
```

## Features and Roadmap

### 1.0 - karaoke!

> September 01 - 30, 2021

- [✓] Landing
- [✓] Login/Logout
- [✓] Profile Section
- [✓] Add/Edit/Remove Songs -> for premium users
- [✓] Search songs by filters (Name, Author, Album, Lyrics)
- [✓] Play song and lyrics

## Setting up the development environment 🛠

- `git clone https://github.com/ce-itcr/karaoke.git`
- `npm install`
- `npm start` for starting React web application
- The app should run on `http://localhost:3000/`

### Unit/Integration tests 🧪

- Run `npm test` 

## Compatibility

karaoke! supports Chrome, Firefox, Edge, IE 11, or above running on Mac/Windows/Linux.


## Authors:

### Angelo Ortiz Vega ✍️

- Student of the Computer Engineering degree at the ITCR.
- Github Contact: [angelortizv](https://github.com/angelortizv)

### Agustín Venegas Vega ✍️

- Student of the Computer Engineering degree at the ITCR.
- Github Contact: [JoseAgus00](https://github.com/JoseAgus00)

### Jonathan Esquivel Sánchez ✍️

- Student of the Computer Engineering degree at the ITCR.
- Github Contact: [jesquivel48](https://github.com/jesquivel48)

## License

Feel free to use our code on your project. Please put a reference to this repository.

[MIT](https://opensource.org/licenses/MIT)


