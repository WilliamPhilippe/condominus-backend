const AdmController = require('../models/Adm');

module.exports = {

    async access(req, res){
        const user = await AdmController.findOne({ user: req.body.user });
        console.log(user);
        if(user){
            let userID = user._id;
            return res.json({ message: 'found', user });
        }
        else return res.json({ newStatus: 400 });
    },

}