const VeichlesController = require('../models/Veichles');

module.exports = {
    
    async verifyVeichle(req, res){
        const veichleExists = await VeichlesController.findOne({ plaque: req.body.plaque });
        console.log('verifyVeichle');
        if(veichleExists){
            return res.json({ newStatus: 200, veichleExists });     
        }
        else return res.json({ newStatus: 400 });
    },

    async editVeichle(req, res){
        const veichle = await VeichlesController.findOneAndUpdate( { plaque: req.headers.plaque }, req.body, { new: true} );
        console.log('editveichle');
        return res.json(veichle);
    }

}