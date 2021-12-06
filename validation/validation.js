const Joi = require("joi");

exports.tasks = (body) => {
  const schema = Joi.object({
    label: Joi.string().required(),
    deadline: Joi.date().format(""),
  });
};
