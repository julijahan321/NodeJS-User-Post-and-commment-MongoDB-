import Comment from '../models/Comment.js';

export const createComment = async (req, res) => {
    const { postId, author, content } = req.body;
    try {
        const comment = new Comment({ postId, author, content });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};