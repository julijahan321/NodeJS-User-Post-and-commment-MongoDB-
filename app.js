import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the full file path
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = dirname(__filename);

const app = express();

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/blogsiteDatabase';  

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use((req,res,next)=>{
    res.status(404).json({
        message : "route not found"
    })
})

app.use((err,req,res,next)=>{
    res.status(500).json({
        message : "something is broken"
    })
})