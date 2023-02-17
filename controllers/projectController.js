const mongoose = require('mongoose');
const Project = require('../models/projectModels');

// get all projects
const getAllProject = async (req, res) => {
  console.log("Getting all Projects");
  const projects = await Project.find({});

  res.status(200).json(projects);
}

// get a single project
const getSingleProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Id!" });
  }

  const project = await Project.findById(id);

  if (!project) {
    return res.status(400).json({ error: "No project found!" });
  }

  res.status(200).json(project);
}

// post a project
const postProject = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const project = await Project.create({
      ...data
    });

    res.status(200).json(project);

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Invalid Id" });
  }

  const project = await Project.findOneAndDelete({ _id: id });

  if (!project) {
    res.status(400).json({ error: "No project found" });
  }
  res.status(200).json(project);
}

// update a project
const updateProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Invalid Id" });
  }

  const project = await Project.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!project) {
    res.status(400).json({ error: "No project found" });
  }
  res.status(200).json(project);
}

module.exports = {
  getAllProject,
  getSingleProject,
  postProject,
  deleteProject,
  updateProject
}