const Project = require("../models/color.model");

const getAllProject = async (req, res) => {
  try {
    let projectList = await projectList.find({});
    res.json({
      success: true,
      message: projectList,
    });
  } catch (error) {
    res.json({
      success: false,
      message: result.message,
      result: null,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    let { id } = req.params;
    let { nameProject, refColor, description, nameProduit } = req.body;
    let result = Project.findByIdAndUpdate(id, {
      nameProject: nameProject,
      refColor: refColor,
      description: description,
      nameProduit: nameProduit,
    });
    res.json({
      success: true,
      message: "Modifier avec success",
    });
  } catch (error) {
    res.json({
      success: false,
      message: result.message,
      result: null,
    });
  }
};
const addProject = async (req, res) => {
  try {
    let { nameProject, refColor, description, nameProduit } = req.body;
    let existingProject = await Project.findOne({ nameProject: nameProject });
    if (existingProject) {
      res.json({
        message: "projet existant",
        result: null,
        success: false,
      });
    } else {
      let newProject = new Project({
        nameProject: nameProject,
        refColor: refColor,
        description: description,
        nameProduit: nameProduit,
      });
      let result = await newProject.save();
      res.json({
        message: "projet ajouter",
        result: result,
        success: true,
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
      result: null,
      success: false,
    });
  }
};

const deleteProject = async (req, res) => {
    try {
      let { id } = req.params;
      let result = await Project.findByIdAndDelete(id);
      res.json({
        success: true,
        message: "projet supprimer",
      });
    } catch (error) {
      res.json({
        success: false,
        message: result.message,
        result: null,
      });
    }
  };

module.exports = { getAllProject, updateProject ,addProject,deleteProject};
