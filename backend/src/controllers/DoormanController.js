const DoormanControlller = require('../models/Doorman');

module.exports = {

    async access(req, res) {
        const user = await DoormanControlller.findOne({ user: req.body.user });

        if(user){
            let userID = user._id;
            return res.json({ message: 'Found', user }); 
        }
        else res.json({ newStatus: 400 });
        
    },

    async listDoormans(req, res){
        const doormans = await DoormanControlller.find();

        console.log('listdoormans');
        return res.json(doormans);
    },

    async deliteDoorman (req, res){
        await DoormanControlller.findByIdAndDelete(req.body.id);
        console.log("deliteDoorman");
        return res.json();
    },

    async editDoorman(req, res){
        const response = await DoormanControlller.findByIdAndUpdate(req.headers._id, req.body, {new: true});
        console.log('editDoorman');
        return res.json(response);
    },

    async getById (req, res){
        const user = await DoormanControlller.findById(req.params.id);

        return res.json(user);
    },

}