const Joi = require("joi").extend(require("@joi/date"));

exports.validateTasks = (body) => {
  const schema = Joi.object({
    label: Joi.string().required(),
    deadline: Joi.date().required(),
    isDone: Joi.boolean(),
    userId: Joi.string(),
    reminderTime: Joi.string().allow("", null),
  });
  return schema.validate(body);
};
