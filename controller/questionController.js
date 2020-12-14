const express = require("express");
const router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;
var { Questions } = require("../model/Question");

router.route("/questions").post((req, res) => {
  if (req.body.ques == "") {
    res.status(404).send("please enter question");
  } else {
    var questions = new Questions(req.body);
    questions
      .save()
      .then((questions) => res.send(questions))
      .catch((err) =>
        res.status(400).send("error occured while posting question")
      );
  }
});

router.route("/questions").get((req, res) => {
  
  Questions.find((err, questions) => {
    if (err) {
      res.status(404).send("error occured while posting questions");
    } else {
      res.send(questions);
    }
  });
});

router.route("/questions/:id").get((req, res) => {
  Questions.findOne({ id: req.params.id }, (err, questions) => {
    if (err) {
      res.status(404).send("error occured while posting questions");
    } else {
      res.send(questions);
    }
  });
});

router.route("/questions/:id").delete((req, res) => {
  Questions.deleteOne({ _id: req.params.id }, (err, questions) => {
    if (err) {
      res.status(404).send("error occured while deleting");
    } else {
      res.send(`${req.params.id} deleted`);
    }
  });
});

router.put("/questions/:id", (req, res) => {
  if (req.body.id == "" || req.body.ques == "") {
    res.status(404).send("error occured while updating");
  } else {
    id: req.body.id;
    //  ques:req.body.ques;
  }
  Questions.updateOne({ id: req.params.id }, questions, (err, questions) => {
    if (err) {
      res.status(404).send("error occured while updating questions");
    } else {
      res.redirect(`/api/questions/${req.params.id}`);
    }
  });
});
module.exports = router;
