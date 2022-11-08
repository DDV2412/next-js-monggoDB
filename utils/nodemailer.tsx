import nodemailer from "nodemailer";

export const mailService = async (options: any) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "816424e9bc131b",
        pass: "7650fd6ca6af61",
      },
    });

    const mailOptions = {
      from: `UK Project` + `<` + "noreplay@uk-project.my.id" + `>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.message,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
