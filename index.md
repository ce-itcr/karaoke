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
  <img width="45%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632070194/karaoke-app/Documentaci%C3%B3n/karaoke_-_Diagrama_de_Funcionalides.drawio.png" 
  alt="karaoke - Diagrama de Funcionalidades">
</h1>

## Design and implementation decisions

### Programming language
### Frameworks / Toolkits
### Database technology
### Programming standards
### Organization / layout of code projects

## Description of the architecture model

### First Level Diagram (Context Diagram)

Level 1, a system context diagram, shows the software system you are building and how it fits into the world in terms of the people who use it and the other software systems with which it interacts.

<h1 align="center">
  <br>
  <img width="45%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632074879/karaoke-app/Documentaci%C3%B3n/Modelo_C4-1er_nivel.png" 
  alt="karaoke - Diagrama de Funcionalidades">
</h1>

### Second level diagram (Container diagram)

Level 2, a container diagram, expands the software system and shows the containers (applications, data warehouses, microservices, etc.) that make up this software system. Technology decisions are also a critical part of this diagram.

<h1 align="center">
  <br>
  <img width="55%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632074880/karaoke-app/Documentaci%C3%B3n/Modelo_C4-2do_nivel.png" 
  alt="karaoke - Diagrama de Funcionalidades">
</h1>

### Third level diagram (Component diagram)

Level 3, a component diagram, expands an individual container to display the components it contains. These components must be mapped to actual abstractions (for example, a tag grouping) based on your code.

<h1 align="center">
  <br>
  <img width="55%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632074880/karaoke-app/Documentaci%C3%B3n/Modelo_C4-3er_nivel.png" 
  alt="karaoke - Diagrama de Funcionalidades">
</h1>

### Fourth level diagram (Code)

Finally, if you really want or need it, you can extend an individual component to show how this component is implemented.

<h1 align="center">
  <br>
  <img width="55%" src="https://res.cloudinary.com/dek4evg4t/image/upload/v1632074880/karaoke-app/Documentaci%C3%B3n/Modelo_C4-4to_nivel.png" 
  alt="karaoke - Diagrama de Funcionalidades">
</h1>

## Support and Contact

If you want to contact us visit the site on Github for more information [ce-itcr](https://github.com/ce-itcr/karaoke/)
