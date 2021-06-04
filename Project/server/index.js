var api = require('./src/api.js').app;
const fs = require('fs');
const guitarsFilepath = './src/chitara.json';

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/guitars', function (request, response) {
  response.json(getGuitars());
});

api.get('/guitars/:id', function (request, response) {
  let guitar = getGuitarById(request.params.id);
  if (guitar)
    response.json(guitar);

  response.json('not found');
});

api.put('/guitars', function (request, response) {
  saveGuitar(request.body);

  response.json('Guitar was saved succesfully');
});

api.post('/guitar', function (request, response) {

  let guitar = request.body;
  let guitars = getGuitars();

  for(let i=0; i < guitars.length; i++) {
    if (guitars[i].id === guitar.id) {
      guitars[i] = guitar;
    }
  }

  try {
    fs.writeFileSync(guitarsFilepath, JSON.stringify(guitars));
  } catch (err) {
    console.error(err)
  }

  response.json('Guitar was updated succesfully');
});

api.delete('/guitars/:index', function (request, response) {

    let guitars = getGuitars();

    guitars.splice(findIdInArray(request.params.index),1);

    try {
            fs.writeFileSync(guitarsFilepath, JSON.stringify(guitars));
        } catch (err) {
            console.error(err)
        }

    response.json('Guitar with index ' + request.params.index + ' was deleted');
});

api.listen(3000, function () {
  console.log('Server running @ localhost:3000');
});

function getGuitars() {
  let guitars = [];
  try {
    guitars = JSON.parse(fs.readFileSync(guitarsFilepath, 'utf8'));
  } catch (err) {
    console.error(err);
    return false;
  }
  return guitars;
}

function saveGuitar(guitar) {
  let guitars = getGuitars();
  let maxId = getMaxId(guitars);
  console.log(guitar);
  guitar.id = maxId+1;
  guitars.push(guitar);
  try {
    fs.writeFileSync(guitarsFilepath, JSON.stringify(guitars));
  } catch (err) {
    console.error(err)
  }
}

function getMaxId(guitars) {
  let max = 0;
  for (var i=0; i<guitars.length;i++) {
    if(max < guitars[i].id) {
      max = guitars[i].id;
    }
  }
  return max;
}

function getGuitarById(id){
  let guitars = getGuitars();
  let selectedGuitar = null;
  for(var i=0; i<guitars.length; i++) {
    if(id == guitars[i].id)
        selectedGuitar = guitars[i];
  }
      return selectedGuitar;
}

function findIdInArray(id){
    let guitars = getGuitars();
    for(var i=0; i<guitars.length; i++) {
        if(id == guitars[i].id)
            return i;
      }
    return -1;
}