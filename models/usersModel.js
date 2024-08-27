import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 99,
        required: true
    },
    favouriteFoods: {
        type: [String],
        foods: ['Pizza', 'Pasta', 'Burger', 'Salad', 'Pancake']
    }
})

const User = mongoose.model('User', userSchema);

export default User;