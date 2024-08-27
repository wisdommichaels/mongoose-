import dotenv from "dotenv"
import connectdb from "./utils/db.js";
import express from "express";
import User from "./models/usersmodel.js";
dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

// question 1
app.get('/userRecord', async (req, res) => {
   const addUser = new  User(
    {
        name: "John Doe",
        age: 25,
        favouriteFoods: ["Pizza", "Pasta", "beans"]
    })
    const addedUser = await addUser.save();
    console.log(addedUser);
    res.json(addedUser);

});

// question 2

app.get('/multipleRecords', async (req, res) => {
    const addRecords = await User.create([
        {
            name: "Alice", 
            age: 20, 
            favouriteFoods: ["Pizza", "Burger", "Fries"]
        },
        {
            name: "Bob", 
            age: 30, 
            favouriteFoods: ["Pasta", "Salad", "Chicken"]
        },
        {
            name: "Charlie", 
            age: 25, 
            favouriteFoods: ["Sushi", "Ramen", "Steak"]
        }
    ])
    // const allRecords = await addRecords.create();
    console.log(addRecords);
    res.json(addRecords);
});

// question 3

app.get('/findUser', async (req, res) => {
    const findUser = await User.find();
    console.log(findUser);
    res.json(findUser);
});

// question 4
const food =  "Salad";
app.get('/findFood', async (req, res) => {
    const findFood = await User.findOne({favouriteFoods: food});
    console.log(findFood);
    res.json(findFood);
});

// question 5
const personId = "66cde5fe9b291b37cbdaf147"
app.get('/findById', async (req, res) => {
    const findById = await User.findById(personId);
    console.log(findById);
    res.json(findById);
});

// question 6
app.get('/findUpdateById', async (req, res) => {
    const findUpdateById = await User.findById(personId);
    console.log(findUpdateById);
    const updateFood = "hamburger"
    findUpdateById.favouriteFoods.push(updateFood);
    await findUpdateById.save();
    console.log (findUpdateById)
    res.json(findUpdateById);
});

// question 7

app.get('/findOneAndUpdate',async (req, res) => {
    const findOneAndUpdate = await User.findOneAndUpdate({name: 'Alice'}, {age: 30}, {new: true});
    console.log(findOneAndUpdate);
    res.json(findOneAndUpdate);
});

// question 8
app.get('/findByIdAndRemove', async (req, res) => {
    const findByIdAndRemove = await User.findByIdAndDelete(personId);
    console.log(findByIdAndRemove);
    res.json(findByIdAndRemove);
});

// question 9
app.get('/deleteMany', async (req, res) => {
    const deleteMany = await User.deleteMany({name: "Alice"});
    console.log(deleteMany);
    res.json(deleteMany);

})

app.listen(4003, ()=>{
    console.log("Server is running on port 4003");
});
connectdb();
