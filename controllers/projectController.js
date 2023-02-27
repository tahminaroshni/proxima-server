const mongoose = require('mongoose');
const Project = require('../models/projectModels');

// get all projects
const getAllProject = async (req, res) => {
  console.log("Getting all Projects");
  const projects = await Project.find({}).sort({ createdAt: -1 });

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
  const { title, tech, budget, duration, manager, dev } = req.body;
  // console.log(data);
  const emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!tech) {
    emptyFields.push("tech");
  }
  if (!budget) {
    emptyFields.push("budget");
  }
  if (!duration) {
    emptyFields.push("duration");
  }
  if (!manager) {
    emptyFields.push("manager");
  }
  if (!dev) {
    emptyFields.push("dev");
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please, fill up all the fields", emptyFields })
  }

  try {
    const project = await Project.create({
      ...req.body
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

  const { title, tech, budget, duration, manager, dev } = req.body;
  const emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!tech) {
    emptyFields.push("tech");
  }
  if (!budget) {
    emptyFields.push("budget");
  }
  if (!duration) {
    emptyFields.push("duration");
  }
  if (!manager) {
    emptyFields.push("manager");
  }
  if (!dev) {
    emptyFields.push("dev");
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please, fill up all the fields", emptyFields })
  }

  const project = await Project.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });

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