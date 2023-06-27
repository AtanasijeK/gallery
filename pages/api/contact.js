const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL, 
    pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS, 
  },
});

export default async function (req, res) {
  if ("POST" !== req.method) {
    return resesponse.status(405).send(`${req.method} requests are not allowed.`);
  }

  const { email, message, name, startDate, endDate, roomNumber, badsNumber, phone } = req.body;

  const mail = {
    from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    subject: `Nova poruka od ${name}`,
    text: `
      Od: ${startDate}
      Do: ${endDate}
      Ime i prezime: ${name}
      Email: ${email}
      Broj telefona: ${phone}
      Broj Soba: ${roomNumber}
      Broj Kreveta: ${badsNumber}
      ${message && `Poruka:${message}` }
    `,
  };

  try {
    await transporter.sendMail(mail);
    res.status(200).send({ message: "Message sent successfully." });
  } catch (error) {
    res.status(400).send({ message: "Message not sent." });
  }
}
