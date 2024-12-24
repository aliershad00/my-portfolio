// import nodemailer from "nodemailer";
// import sendGridTransport from "nodemailer-sendgrid-transport";

// // Configure SendGrid transporter
// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: process.env.API_SENDGRID, // Ensure this is correctly set in your environment
//     },
//   })
// );

// // Send Email Controller
// const sendEmailController = async (req, res) => {
//   try {
//     const { name, email, msg } = req.body;

//     // Validation
//     if (!name || !email || !msg) {
//       return res.status(400).send({
//         success: false,
//         message: "Please provide all fields.",
//       });
//     }

//     // Email content
//     const mailOptions = {
//       to: "ershadoffice18@gmail.com",
//       from: "ershadoffice18@gmail.com",
//       subject: "Regarding Job Through Mern Portfolio App",
//       html: `
//         <h5>Detail Information</h5>
//         <ul>
//           <li>Name: ${name}</li>
//           <li>Email: ${email}</li>
//           <li>Message: ${msg}</li>
//         </ul>
//       `,
//     };

//     // Send email with detailed error logging
//     await transporter
//       .sendMail(mailOptions)
//       .catch((error) => {
//         console.error("SendGrid Error Response:", error.response?.body || error);
//         throw error; // Rethrow the error to ensure it's caught by the outer `catch`
//       });

//     // Response after success
//     return res.status(200).send({
//       success: true,
//       message: "Your message was sent successfully.",
//     });
//   } catch (error) {
//     // Error handling
//     console.error("Error sending email:", error);
//     return res.status(500).send({
//       success: false,
//       message: "Error sending email.",
//       error: error.message || error,
//     });
//   }
// };

// export default sendEmailController;

import nodemailer from "nodemailer";
import sendGridTransport from "nodemailer-sendgrid-transport";
import dotenv from "dotenv";

dotenv.config(); // Make sure dotenv is used to load environment variables

// Configure SendGrid transporter
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID, // Ensure this is correctly set in your environment
    },
  })
);

// Send Email Controller
const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields.",
      });
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Email content
    const mailOptions = {
      to: "rkhan01aa@gmail.com", // Replace with your target recipient email
      from: "ershadoffice18@gmail.com", // Replace with your verified sender email
      subject: "Regarding Job Through Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Message: ${msg}</li>
        </ul>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // Response after success
    return res.status(200).send({
      success: true,
      message: "Your message was sent successfully.",
      info, // Optionally send back the response from SendGrid
    });
  } catch (error) {
    // Log the error for debugging
    console.error("Error sending email:", error);

    // Response after failure
    return res.status(500).send({
      success: false,
      message: "Error sending email.",
      error: error.message || error, // Send the error message back in the response
    });
  }
};

export default sendEmailController;
