
const express = require('express');
const { postProject, getAllProject, getSingleProject, deleteProject, updateProject } = require('../controllers/projectController');

const router = express.Router();

router.get('/', getAllProject);

router.get('/:id', getSingleProject);

router.post('/', postProject);

router.delete('/:id', deleteProject);

router.patch('/:id', updateProject);

module.exports = router;