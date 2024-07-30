# Dungeon/Game Master Companion App Back End
Front end: https://github.com/bi1cor0/dmC_frontend.git

## About
The goal for this application is mainly for use game masters or more specifically, Dungeon Masters for the Dungeons and Dragons tabletop roleplaying game. There is a lot of data that dungeon masters have to manage, and characters are only one type of many types of data. This app is meant to be a data organizer and manager that takes data necessary for dungeon masters and puts it in a card format for easy selection and manipulation.

This is the backend portion of the application. Right now it only has player character data that takes the character's player name, it's own name, class, race, level and health points. It also takes it's initiative value and a boolean which marks either dead or alive. I also implemented full CRUD functionality with Mongoose schemas. 

## Future Goals
Right now this back end takes characters, and doesn't really validate duplicates or actual D&D races. I would like to implement a type of verification tech to help out with the organization of the data. But I also wanted to implement a map portion of the database, where DMs can store their maps for selection later. 