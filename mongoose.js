const { name } = require('ejs');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Mongoose Connected!"))
    .catch(() => console.log("Connection failed!"));

    
    
    const ContectSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        messege: {
            type: String,
            required: true,
        },
    });
    
    const ipAddressSchema = new mongoose.Schema({
        ip: String,
        date: { type: Date, default: Date.now }
    });
    
    const Contect = mongoose.model("Collection2", ContectSchema);
    const IPAddress = mongoose.model('IPAddress', ipAddressSchema);

module.exports =  {Contect,  IPAddress};
