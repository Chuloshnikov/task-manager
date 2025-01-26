import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

export default async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(404).send({ message: 'User not found'});
        }

        if (req.user.role !== 'admin') {
            return res.status(500).json({
                message: `Access denied. User don't have permissions`,
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};
