import Experience from '../models/Experience.js';

export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({});
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (experience) {
      res.status(200).json(experience);
    } else {
      res.status(404).json({ message: 'Experience not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};