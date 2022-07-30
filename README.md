# Tello Front End V2

The front end viewer and commander for the Tello EDU drone which requires the Tello Node.JS backend [here](https://github.com/lm93547/tello-backend). To use this please first run:
`npm install`
Then once you have installed and started the backend, while connected to a drone run:
`npm run start`
This will spin up the local control and viewing window at [http://localhost:4000](http://localhost:4000)

#### Tech Stack
- React 17
- React Router
- [JSMpegPlayer](https://github.com/cycjimmy/jsmpeg-player)
- DJI Tello

Main screen controls and video screen:
<img width="1720" alt="Screenshot 2022-07-30 at 12 00 51" src="https://user-images.githubusercontent.com/49888000/181908024-81ee1f12-e990-426d-b773-dd8182e07fc2.png">


# Roadmap
- Flight planning (chaining commands)
- Swarm Control
- AI control
- New backend 🤣 golang probably
