const express = require("express");
const routes = express.Router();

const CreateController = require('./controllers/CreateController');
const DoormanController = require('./controllers/DoormanController');
const AdmController = require('./controllers/AdmController');
const OwnerController = require('./controllers/OwnerController');
const VeichlesController = require('./controllers/VeichlesController');
const HouseController = require('./controllers/HouseController');


routes.post('/doorman/access', DoormanController.access);
routes.post('/adm/access', AdmController.access);
routes.post('/owner/access', OwnerController.access);

routes.post('/adm/create/adm', CreateController.createDoorman);
routes.post('/adm/create/doorman', CreateController.createDoorman);
routes.post('/adm/create/house', CreateController.createHouse);
routes.post('/*/create/owner', CreateController.createOwner);
routes.post('/*/create/veichles', CreateController.createVeichles);

routes.post('/verifyVeichle', VeichlesController.verifyVeichle);

routes.post('/deliteOwner', OwnerController.deliteOwner);
routes.post('/deliteDoorman', DoormanController.deliteDoorman);
routes.post('/deliteHouse', HouseController.deliteHouse);

routes.get('/listOwners', OwnerController.listOwner);
routes.get('/listHouses', HouseController.listHouses);
routes.get('/listDoormans', DoormanController.listDoormans);

routes.get('/getOwnerByUser/:user', OwnerController.getOwnerByUser);
routes.get('/getOwnerById/:id', OwnerController.getById);
routes.get('/getDoormanById/:id', DoormanController.getById);
routes.get('/getHouseById/:id', HouseController.getById);


routes.post('/edit/owner', OwnerController.editOwner);
routes.post('/edit/doorman', DoormanController.editDoorman);
routes.post('/edit/house', HouseController.editHouse);
routes.post('/edit/veichle', VeichlesController.editVeichle);





module.exports = routes;