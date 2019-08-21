const OwnerController = require('../models/Owner');

module.exports = {

    async getById (req, res){
        const user = await OwnerController.findById(req.params.id);

        return res.json(user);
    },

    async access (req, res) {
        const user = await OwnerController.findOne({ user: req.body.user });

        if(user){
            let userID = user._id;
            return res.json({ message: 'Found', user });
        }
        else res.json({ newStatus: 400 });
        
    },

    async listOwner (req, res){
        const owners = await OwnerController.find();
        console.log('listowner');
        return res.json(owners);
    },

    async deliteOwner(req, res){
        await OwnerController.findByIdAndDelete(req.body.id);
        console.log('deliteOwner');
        return res.json();
    },

    async editOwner (req, res){
        const edited = await OwnerController.findByIdAndUpdate(req.headers.user, req.body, {new: true});

        console.log('editOwner');

        return res.json(edited);
    },

    async getOwnerByUser (req, res){
        const owner = await OwnerController.findOne({ user: req.params.user });
        console.log('getOwnerByUser');
        return res.json(owner);
    }

}