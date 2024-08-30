import User from '../models/User.js';
 const createUser = async (req, res) => {
   
    const { username, email, password } = req.body;
    try {
        
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default createUser;