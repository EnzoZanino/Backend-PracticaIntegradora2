import { Router } from 'express';

const router = Router();

router.get('/currentUser', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ email: req.session.user.email });
    } else {
        res.json(null);
    }
});

router.get('/current', (req, res) => {
    if (req.isAuthenticated()) {
        const user = req.user;
        res.status(200).json({
            // name: `${user.first_name} ${user.last_name}`,
            name: `${user.username}`,
            email: user.email,
            age: user.age,
            role: user.role
        });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
});

export default router;