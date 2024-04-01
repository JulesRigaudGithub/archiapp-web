# archiapp-web
Simple messaging app for Benoit Valiron's web course at CentraleSupélec by Grégoire Desjonquères and Jules Rigaud

## Links to replit tutorial
All questions about TP 1 and 2 are answered in replit but the code is quite messy and unorganized :

- [TP1 : front](https://replit.com/@julesrigaud200/MockUp)
- [TP2 : back](https://replit.com/@julesrigaud200/MessageBoard)

The zip archives are available on this repo under the archive folder as well. The API in this repo is only meant for the messaging service.

## Link to render app

The deployement is feasible with render blueprints, which is Infrastructure as Code. All the requirements for the static webfront and Node microservice are written in the yaml file.

The[ site is available here ](https://archiapp-web-front.onrender.com/).

## Features list

1. Can publish any length message with POST request
2. Possibility to delete the whole list of messages on the server
3. Very zen interface
4. Automatic deploy uppon push with Render connected to Github
5. Render services as code in the YAML file
6. [**TODO**] Implement websocket to avoid loading messages at button click
7. [**TODO**] Implement image transfer
