const mongoose  = require("mongoose");
mongoose.connect("mongodb+srv://admin:OHp5uOrmqP7acYNo@cluster0.d9l2cqe.mongodb.net/paytm2");

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        
    },
    password: {
        type: String,
        
    },
    firstName: {
        type: String,
       
    },
    lastName: {
        type: String,
        
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, //Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model("Account",accountSchema)
const User= mongoose.model("User",usersSchema);

module.exports ={
    User,
    Account
    
}