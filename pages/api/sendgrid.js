import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey("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");

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "deuxm2022@gmail.com", // Your email where you'll receive emails
      from: "wedoprofan@dubaniagency.com", // your website email address here
      subject: `[Depuis votre site ] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Je m'appelle <b>${req.body.fullname}</b>.</h3>
              <div style="font-size: 16px;">
              <p>Je viens confirmer ma présence à la fête, <b>${req.body.message}.</b> </p>
              <p>
                Mon adresse E-mail est <b>${req.body.email} </b>.
              </p>
              <br>
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;