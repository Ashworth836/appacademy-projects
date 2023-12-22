const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
    if(req.method === 'GET' && req.url === '/'){
      let htmlTemplate = fs.readFileSync('./views/new-player.html', 'utf-8');
      let htmlPage = htmlTemplate.replace(/#{availableRooms}/g, world.availableRoomsToString());

      console.log(player);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(htmlPage);
    }

    // Phase 2: POST /player
    if(res.method === 'POST' && res.url === '/player'){
      const {name, roomId} = req.body;
      player = new Player(name, world.rooms[roomId]);

      res.statusCode = 302;
      res.setHeader('location', `/rooms/${roomId}`);
      return res.end();
    }

    if(!player){
      res.setHeader('location', '/');
      res.statusCode = 302;
      return res.end();
    }

    // Phase 3: GET /rooms/:roomId
    if(res.method === 'GET' && res.url.startsWith('/rooms/')){
      const urlParts = req.url.split('/');
      if(urlParts.length === 3){
        const worldRoom = world.rooms[urlParts[2]];

        if(worldRoom !== player.currentRoom){
          for(const room in world.rooms){
            res.setHeader('location', `rooms/${room}`);
            res.statusCode = 302;
            return res.end();
          }
        }
      }

      const htmlTemplate = fs.readFileSync('./views/room.html', 'utf-8');
      cont htmlPage = htmlTemplate
      .replace(/#{roomName}/g, player.currentRoom.name)
      .replace(/#{roomItems}/g, player.currentRoom.itemsToString())
      .replace(/#{exits}/g, player.currentRoom.exitsToString())
      .replace(/#{inventory}/g, player.inventoryToString());

      console.log(player);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(htmlPage);
    }

    // Phase 4: GET /rooms/:roomId/:direction
    if(req.method === 'GET' && req.url.startsWith(`/rooms/${player.currentRoom.id}/`)){
      const reqPath = req.url.split('/');
      const reqExit = reqPath[3][0];
      player.move(reqExit);

      const htmlTemplate = fs.readFileSync('./views/room.html', 'utf-8');
      const htmlPage = htmlTemplate
      .replace(/#{roomName}/g, player.currentRoom.name)
      .replace(/#{roomItems}/g, player.currentRoom.itemsToString())
      .replace(/#{exits}/g, player.currentRoom.exitsToString())
      .replace(/#{inventory}/g, player.currentRoom.inventoryToString());

      console.log(player);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(htmlPage);
    }

    // Phase 5: POST /items/:itemId/:action
    if(req.method === 'POST' && req.url.startsWith('/items/')){
      const action = req.url.split('/')[3];
      const itemId = req.url.split('/')[2];

      switch (action) {
        case 'take':
          player.takeItem(itemId);
          break;
        case 'drop':
          player.dropItem(itemsId);
          break;
        case 'eat':
          player.eatItem(itemId);
          break;
      }

      res.statusCode = 302;
      res.setHeader('Location', `rooms${player.currentRoom.id}`);
      res.end();
      return;
    }

    // Phase 6: Redirect if no matching route handlers
    let currRoom;
    for(let room in world.rooms){
      if(world.rooms[room].name === player.currentRoom.name){
        currRoom = room;
      }
    }

    res.setHeader('Location', `/rooms/${currRoom}`);
    res.statusCode = 302;
    console.log('no matching handdler')
    return res.end();
  })
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));