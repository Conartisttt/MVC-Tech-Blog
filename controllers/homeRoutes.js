const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

//Update for this project to show home page when visited
//Home page should include blog posts if any have een posted,
//navigation links for the homepage and dashboard, and the option to login
router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const projects = projectData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        projects, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;