# Karaoke-app

## Control sheet

```
Author: ce-itcr
Project: karaoke-app
Approval Date: 09/18/2021
```

#### Change Log

<table>
   <tr>
     <th align = "center">
       <img width = "441" height = "1">
       <p> <small> Version </small> </p>
     </th>
     <th align = "center">
       <img width = "441" height = "1">
       <p> <small> Cause of change </small> </p>
     </th>
     <th align = "center">
       <img width = "441" height = "1">
       <p> <small> Responsible for the change </small> </p>
     </th>
     <th align = "center">
       <img width = "441" height = "1">
       <p> <small> Date of change </small> </p>
     </th>
   </tr>
   <tr>
     <td align = "center">
       001
     </td>
     <td align = "center">
       Initial Version
     </td>
     <td align = "center">
       Angelo Ortiz Vega
     </td>
     <td align = "center">
       09/18/2021
     </td>
   </tr>
</table>

#### Development team

```
Angelo Ortiz Vega: @angelortizv - Functions:
Agustín Venegas Vega: @ JoseAgus00 - Features:
Jonathan Esquivel Sánchez: @ jesquivel48 - Functions:
```

## Presentation

This documentation is associated with Project I - Karaoke! of the Software Architecture course (CE5508) of the Technological Institute of Costa Rica. Its general idea is to design software to provide a karaoke service.

### Objectives

#### General objective

* Build a web application for karaoke.

#### Specific objectives

* Learn about the C4 model to document software architecture.
* Design a web application that consumes web services.

### Description of the problem

Among the main requirements (at a very general level) that have been foreseen are the following:

* The user must authenticate through Forms and the system validates it against its own user database.
* User can add / delete / modify existing songs and lyrics. This is only allowed for premium users.
* The user must be able to search through a list of songs, the one they want to play. You can search for it by song name, artist, album, and lyric snippets.
* The user can play a song for which the Karaoke application will stream the audio and synchronize the lyrics so that the user can sing to the rhythm of the music

#### Functionalities Diagram

<h1 align="center">
  <br>
  <img width="45%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632237558/karaoke-app/Documentaci%C3%B3n/karaoke_-_Diagrama_de_Funcionalides.png" 
  alt="karaoke - Diagram">
</h1>

## Working application

Check out the live application -> [https://karaoke-ceitcr.netlify.app/](https://karaoke-ceitcr.netlify.app/)

If you need to test functionalities for different users, log in with the following credentials:

Basic level user: 

* username: basic
* password: basic1

Premium user (With this type of user, you can edit/delete and add songs to the database):

* username: premium
* password: premium1


## Design and implementation decisions



<table>
   <tr>
     <th align = "center">
       <img width = "441" height = "1">
       <p> <small>Decision</small> </p>
     </th>
     <th align = "center">
       <img width = "441" height = "1">
       <p> <small>Justification</small> </p>
     </th>
   </tr>
   <tr>
     <td align = "center">
       Programming Languaje
     </td>
     <td align = "center">
       <b>Javascript:</b> karaoke is a web application, Javascript is chosen as the main language since it has endless advantages, among the main ones could be described: Speed, Simplicity, Popularity, Compatibility, Server Load, Simple Interfaces, Versatility and Constant Updates.
     </td>
   </tr>
   <tr>
     <td align = "center">
       Frameworks / Toolkits
     </td>
     <td align = "center">
       <b>React:</b> In the first instance, React is a complete library, suitable for many different types of projects. It allows us an agile, orderly development with a maintainable architecture, focused on components and that offers us great performance. It is used to develop web applications in a more orderly way and with less code. Allows views to be associated with data, so if the data changes, the views change too.<br>
       <b>NodeJS:</b> In general we can say that Node.js is a Javascript interpreter that works on the server side and completely changes the notion of how it should work. What is innovative about this runtime environment is that, traditionally, programmers work using JavaScript on the client side but are looking for a new language on the server side; With Node.js this would no longer be necessary, as it is a Javascript interpreter, the same programming language could be used on both sides.<br>
       <b>Express:</b> Express is the most popular Node web framework, and is the underlying library for a large number of other popular Node web frameworks. Provides mechanisms for: Writing request handlers with different HTTP verbs in different URL paths (routes).
     </td>
   </tr>
   <tr>
     <td align = "center">
       Database technology
     </td>
     <td align = "center">
       <b>Mongodb:</b> The main reason why Mongodb is chosen as the database technology refers to scalability, both vertical and horizontal. Scalability is the need for the database to adapt, increasing its size depending on the information it stores, the users who will access it and other aspects. Vertical scalability refers to memory and CPU usage. Horizontal scalability refers to the ability of MongoDB to create new nodes, since it is a distributed system in which new nodes can be incorporated, as if they were replications of MongoDB itself. This allows much better performance for the application. 
     </td>
   </tr>
   <tr>
     <td align = "center">
        Organization / layout of code projects
     </td>
     <td align = "center">
       The project is divided into two main stages: Backend - Node Js and Frontend made with React.
        <b>Frontend: </b><br> 
        <img width="45%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632175833/karaoke-app/Documentaci%C3%B3n/Screenshot_2021-09-20_160701.png" 
        alt="karaoke - Diagram">
     <br>
        <b>Backend: </b><br>
        <img width="45%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632175833/karaoke-app/Documentaci%C3%B3n/Screenshot_2021-09-20_160858.png" 
        alt="karaoke - Diagram">
     </td>
   </tr>
   <tr>
     <td align = "center">
        Branching
     </td>
     <td align = "center">
        <img width="88%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632236557/karaoke-app/Documentaci%C3%B3n/Screenshot_2021-09-21_090216.png" 
        alt="karaoke - Diagram">
     </td>
   </tr>
</table>

## Description of the architecture model

### First Level Diagram (Context Diagram)

Level 1, a system context diagram, shows the software system you are building and how it fits into the world in terms of the people who use it and the other software systems with which it interacts.

<h1 align="center">
  <img width="45%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632074879/karaoke-app/Documentaci%C3%B3n/Modelo_C4-1er_nivel.png" 
  alt="karaoke - Diagrama de Funcionalidades">
</h1>

### Second level diagram (Container diagram)

Level 2, a container diagram, expands the software system and shows the containers (applications, data warehouses, microservices, etc.) that make up this software system. Technology decisions are also a critical part of this diagram.

<h1 align="center">
  <img width="55%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632074880/karaoke-app/Documentaci%C3%B3n/Modelo_C4-2do_nivel.png" 
  alt="karaoke - Diagram">
</h1>

### Third level diagram (Component diagram)

Level 3, a component diagram, expands an individual container to display the components it contains. These components must be mapped to actual abstractions (for example, a tag grouping) based on your code.

<h1 align="center">
  <img width="55%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632074880/karaoke-app/Documentaci%C3%B3n/Modelo_C4-3er_nivel.png" 
  alt="karaoke - Diagram">
</h1>

### Fourth level diagram (Code)

Finally, if you really want or need it, you can extend an individual component to show how this component is implemented.

<h1 align="center">
  <img width="55%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632074880/karaoke-app/Documentaci%C3%B3n/Modelo_C4-4to_nivel.png" 
  alt="karaoke - Diagram">
</h1>


## Support and Contact

If you want to contact us visit the site on Github for more information [ce-itcr](https://github.com/ce-itcr/karaoke/)
