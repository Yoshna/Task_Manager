const Task = require("./models/tasks");
const schedule = require("node-schedule");
const nodemailer = require("nodemailer");
const User = require("./models/user");
module.exports = async () => {
  let tasks = await Task.find({}).populate("userId");
  const newtasks = tasks.filter((task) => {
    if (task.reminderTime) {
      const [hour, min] = task.reminderTime.split(":");
      let date = new Date(task.deadline);
      date.setHours(hour);
      date.setMinutes(min);
      return date > new Date();
    }
  });
  newtasks.map((task) => {
    if (task.reminderTime) {
      const date = JSON.stringify(task.deadline).substring(1, 11);
      const mailOptions = {
        from: "dev.yoshnam@gmail.com",
        to: task.userId.emailId,
        subject: "Email from Task Manager",
        text: `You have ${task.label} scheduled on ${date} `,
      };
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "dev.yoshnam@gmail.com",
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const timel = JSON.stringify(task.deadline).substring(1, 11);

      schedule.scheduleJob(`${timel}T${task.reminderTime}:00`, () => {
        // console.log("emailll " + new Date().toLocaleString() + task.label);
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Email send: " + info.response);
          }
        });
      });
    }
  });
};
