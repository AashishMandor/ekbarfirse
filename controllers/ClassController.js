import Class from '../models/Class.js';

export const getClassDetails = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching classes' });
  }
};

export const getClassById = async (req, res) => {
  try {
    const classDetails = await Class.findByPk(req.params.classID);
    res.json(classDetails);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching class details' });
  }
};

export const createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res.json(newClass);
  } catch (error) {
    res.status(500).json({ error: 'Error creating class' });
  }
};

export const updateClass = async (req, res) => {
  try {
    const updatedClass = await Class.update(req.body, {
      where: { id: req.params.classID },
    });
    res.json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: 'Error updating class' });
  }
};

export const deleteClass = async (req, res) => {
  try {
    await Class.destroy({ where: { id: req.params.classID } });
    res.json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting class' });
  }
};
