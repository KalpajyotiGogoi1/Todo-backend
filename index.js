const express = require('express');
const mongoose = require('mongoose');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');
//middleware to parse JSON
app.use(express.json());

//use cors
app.use(cors());

//connection to mongoDB
mongoose.connect('mongodb+srv://gogoikalpa000:o2p2nhsPHKq3NwPS@cluster0.whov5kn.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error', err);
});

// Define a simple route
app.get('/', (req, res)=> {
    res.send('Todo app backend is running');
});

app.use('/api', todoRoutes);

//start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});