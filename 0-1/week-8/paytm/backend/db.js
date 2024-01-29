import mongoose from "mongoose";

mongoose.connect('mongodb+srv://admin:data123@cluster0.d1bj68x.mongodb.net/paytm') 
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => console.error('Error connecting to database:', err));


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 30,
        trim: true,
        unique: true,
        lowercase: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    account: {type: mongoose.Schema.Types.ObjectId, ref: 'Account'}
})

const AccountSchema = mongoose.Schema({
    userId:     {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number, 
        required: true,
        default: 0
    }
})

const User = mongoose.model('User', UserSchema)
const Account = mongoose.model('Account', AccountSchema)

export {User, Account}