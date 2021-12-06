const Joi = require("joi").extend(require("@joi/date"));

exports.validateTasks = (body) => {
  const schema = Joi.object({
    label: Joi.string().required(),
    deadline: Joi.date().format("YYYY/MM/DD").required(),
    isdone: Joi.boolean(),
  });
  return schema.validate(body);
};
