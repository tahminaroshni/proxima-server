
const express = require('express');
const { postProject, getAllProject, getSingleProject, deleteProject, updateProject } = require('../controllers/projectController');
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.get('/', getAllProject);

router.get('/:id', getSingleProject);

router.post('/', postProject);

router.delete('/:id', deleteProject);

router.patch('/:id', updateProject);

module.exports = router;