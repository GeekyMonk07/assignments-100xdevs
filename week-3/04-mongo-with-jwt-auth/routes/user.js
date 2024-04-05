const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Create a new user
        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error in user signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if the user exists and password is correct
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Generate JWT token for authentication
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error('Error in user signin:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/courses', async (req, res) => {
    try {
        // Fetch all available courses
        const courses = await Course.find({});
        res.json({ courses });
    } catch (error) {
        console.error('Error in fetching courses:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const user = req.username; // Assuming user ID is stored in the token
        // Query the database to find all courses associated with the user
        const purchasedCourses = await User.findById(user).populate('courses');
        res.json({ purchasedCourses });
    } catch (error) {
        console.error('Error in fetching purchased courses:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        const courseId = req.params.courseId;
        // Check if the course exists and is available for purchase
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        // Implement logic for course purchase (e.g., add course to user's purchased courses)
        const user = await User.findById(user);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Add the course to the user's purchased courses (assuming 'courses' is an array field in the User schema)
        user.courses.push(course);
        await user.save();
        res.json({ message: 'Course purchased successfully' });
    } catch (error) {
        console.error('Error in course purchase:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
