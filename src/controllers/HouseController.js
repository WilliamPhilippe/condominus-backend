const HouseController = require('../models/House');

module.exports = {
    
    async listHouses(req, res){
        const houses = await HouseController.find();
        console.log('listHouses');
        return res.json(houses);
    },

    async deliteHouse (req, res){
        await HouseController.findByIdAndDelete(req.body.id);
        console.log('deliteHouse');
        return res.json();
    },

    async editHouse(req, res){
        const response = await HouseController.findByIdAndUpdate(req.headers._id, req.body, {new: true});
        console.log('editHouse');
        return res.json(response);
    },

    async getById (req, res){
        const user = await HouseController.findById(req.params.id);

        return res.json(user);
    },
}