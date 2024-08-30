import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const postSchema = new mongoose.Schema({
    postId: { type: String, default: uuidv4 },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);
export default Post;
