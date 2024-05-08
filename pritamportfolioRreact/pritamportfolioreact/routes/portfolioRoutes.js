const router = require("express").Router();

const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Course,
} = require("../modals/portfolioModel");

router.get("/get-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      project: projects[0],
      contact: contacts[0],
      experince: experiences[0],
      course: courses[0],
    });

    console.log(intros[0]);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
