import nodemailer from "nodemailer";
import { UserTypes } from "@/app/api/auth/(types)";
import { APP_NAME } from "@/constants/TextConsts";

export async function sendVerificationMail(user: UserTypes) {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("verifyToken", user.verifyToken);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Verify your email address",
      html: `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>${APP_NAME} welcome email</title><!--[if !mso]>--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
      <style>body {-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; margin: 0; min-width: 100%; padding: 0; width: 100% !important; color: #1a2e44; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; font-size: 14px; line-height: 1.5; background-color: #f8fafa;}

      .ExternalClass {width: 100%; line-height: 100%;} .ReadMsgBody {width: 100%;} img { -ms-interpolation-mode: bicubic; max-width: 100%; width: auto; border: none; outline: none; text-decoration: none;}
      a:active {color: #008c70 !important;} a:hover {color: #008c70 !important;} a:visited {color: #008c70 !important;}
      .button-block .button a:visited {color: #fff !important; text-decoration: none;} .dns_table a:visited {color: #4c83ee !important; text-decoration: underline;} .footer a:active {color: #a3abb4 !important;} .footer a:hover {color: #a3abb4 !important;} .footer a:visited {color: #a3abb4 !important;} .footer .social-link:visited {color: #313a45 !important; opacity: .5;} .footer .social-link:active { color: #313a45 !important; opacity: 1 !important; } .footer .social-link:hover {color: #313a45 !important; opacity: 1 !important;}
      @media (max-width:600px) {
      body {min-width: 100% !important; width: 100% !important; -webkit-text-size-adjust: none !important; -moz-text-size-adjust: none !important; text-size-adjust: none !important; font-size: 16px; line-height: 1.4 !important; padding: 16px 0 !important;}

      a {-webkit-text-size-adjust: none !important; -moz-text-size-adjust: none !important; text-size-adjust: none !important;}
      p {-webkit-text-size-adjust: none !important; -moz-text-size-adjust: none !important; text-size-adjust: none !important;}
      table {-webkit-text-size-adjust: none !important; -moz-text-size-adjust: none !important; text-size-adjust: none !important;}
      td {-webkit-text-size-adjust: none !important; -moz-text-size-adjust: none !important; text-size-adjust: none !important;}
      img {height: auto !important; width: auto !important;} center {min-width: 0 !important;} table {width: 100% !important;}
      table[class=body] {font-size: 16px; line-height: 1.4 !important;} .h1 {font-size: 22px !important; padding-bottom: 15px !important;}
      h1 {font-size: 22px !important; padding-bottom: 15px !important;} h2 {font-size: 20px !important;} p.lead {font-size: 21px !important; padding-bottom: 20px !important;}
      .button-block {width: auto !important;} .email-body {border-radius: 0 !important; margin-top: 16px !important;}
      .inner-footer.is-marketing {padding-bottom: 15px !important;} .inner-footer {padding: 20px 16px 30px !important;}
      .content {padding: 20px 15px !important;} .footer-container {padding: 24px 16px 0 !important;} .footer .footer-section {
      display: block !important; width: 100% !important;} .footer .social-block {text-align: center !important;}
      .footer .social-item {display: inline-block !important; text-align: center !important; width: 60px !important;}}
      @media (max-width:480px) { .invoice-section .invoice-logo {display: none;} .column {display: block !important; padding: 0 0 15px !important; width: 100% !important;} } </style> </head>
      <body style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; min-width: 100%; width: 100% !important; color: #1a2e44; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; font-size: 14px; line-height: 1.5; margin: 0; padding: 0;" bgcolor="#f8fafa">
      <div class="pre-header" style="color: #fff; display: none !important; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; visibility: hidden;"> Your getting started guide </div>
     <div class="body" style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; min-width: 100%; width: 100% !important; background-color: #f8fafa; margin: 0; padding: 32px 0;">
      <table style="width: 100%; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse; border-spacing: 0; table-layout: fixed; padding: 0; border: 0;" height="100%">
        <tr style="padding: 0;">
          <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; min-width: 100%; width: 100% !important; margin: 0; padding: 0;" class="email-container" align="center" valign="top">
            <img src="/image.png" class="mailtrap-logo" alt="mailtrap logo" draggable="false" style="-ms-interpolation-mode: bicubic; max-width: 100%; width: 136px !important; outline: none; text-decoration: none; height: 41px !important; border: none;">
            <table style="width: 580px; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: separate; border-spacing: 0; table-layout: auto; border-radius: 8px; margin-top: 24px; padding: 0; border: 1px solid #eee;" class="email-body" bgcolor="#fff">
              <!-- Content -->
              <tr style="padding: 0;">
                <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; padding: 24px 32px 30px;" class="content" align="left" valign="top">
                  <p style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; font-size: 14px; padding-bottom: 10px; margin: 0;">Hello! ${user.name}</p>
                  <p style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; font-size: 14px; padding-bottom: 10px; margin: 0;">
                    We just need to verify your email address before you can access ${APP_NAME}.
                  </p>
                  <table border="0" cellpadding="0" cellspacing="0" width="335" class="button-block is-small" style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: separate; border-spacing: 0; table-layout: auto; width: auto; padding: 0; border: 0;">
                    <tr style="padding: 0;">
                      <td align="center" valign="middle" class="button" style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; border-radius: 6px; padding: 8px 14px;" bgcolor="#4c83ee">
                        <a target="_blank" rel="noopener noreferrer" href="${process.env.NEXTAUTH_URL}/api/auth/verifyToken?token=${user.verifyToken}" style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; color: #fff !important; display: block; font-size: 14px; font-weight: 500; text-decoration: none;">Continue</a>
                      </td>
                    </tr>
                  </table> 
                  ${process.env.NEXTAUTH_URL}/api/auth/verifyToken?token=${user.verifyToken} <br> 
                  <!-- Content Footer -->
                  <tr style="padding: 0;">
                    <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; padding: 0 32px 24px;" class="inner-footer" align="left" valign="middle">

                    <!-- Closing text -->
                    <table style="width: 50%; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse; border-spacing: 0; table-layout: auto; padding: 0; border: 0;">
                      <tr class="signature" style="padding: 0;">
                        <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; border-top-width: 1px; border-top-color: #e4e4e9; border-top-style: solid; font-size: 12px; line-height: 1.5; padding: 15px 0 0;" class="close-text" align="left" valign="middle">
                          <table style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse; border-spacing: 0; table-layout: auto; padding: 0; border: 0;">
                            <tr style="padding: 0;">
                              <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; padding: 0;">
                                <span>Sincerely,</span><br><br><strong>The ${APP_NAME} team</strong><br>
                                <span class="signature-email" style="color: #a3abb4; font-size: 10px;">support@${APP_NAME}.com</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
             </table>
            </td>
        </tr>
      </table>
    </div>
  </body> </html>`,
    });
    return info;
  } catch (error: any) {
    return error.message;
  }
}

export async function sendPasswordResetLink(user: UserTypes) {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("forgotPasswordToken", user.forgotPasswordToken);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Reset your password",
      html: `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>${APP_NAME} password reset</title><!--[if !mso]>--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
      <style>body {-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; margin: 0; min-width: 100%; padding: 0; width: 100% !important; color: #1a2e44; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; font-size: 14px; line-height: 1.5; background-color: #f8fafa;}

      .ExternalClass {width: 100%; line-height: 100%;} .ReadMsgBody {width: 100%;} img { -ms-interpolation-mode: bicubic; max-width: 100%; width: auto; border: none; outline: none; text-decoration: none;}
      a:active {color: #008c70 !important;} a:hover {color: #008c70 !important;} a:visited {color: #008c70 !important;}
      .button-block .button a:visited {color: #fff !important; text-decoration: none;} .dns_table a:visited {color: #4c83ee !important; text-decoration: underline;} .footer a:active {color: #a3abb4 !important;} .footer a:hover {color: #a3abb4 !important;} .footer a:visited {color: #a3abb4 !important;} .footer .social-link:visited {color: #313a45 !important; opacity: .5;} .footer .social-link:active { color: #313a45 !important; opacity: 1 !important; } .footer .social-link:hover {color: #313a45 !important; opacity: 1 !important;}
      @media (max-width:600px) {
      body {min-width: 100% !important; width: 100% !important; -webkit-text-size-adjust: none !important; -moz-text-size-adjust: none !important; text-size-adjust: none !important; font-size: 16px; line-height: 1.4 !important; padding: 16px 0 !important;}
      }
      @media (max-width:480px) { .invoice-section .invoice-logo {display: none;} .column {display: block !important; padding: 0 0 15px !important; } </style> </head>
      <body style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; min-width: 100%; width: 100% !important; color: #1a2e44; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; font-size: 14px; line-height: 1.5; margin: 0; padding: 0;" bgcolor="#f8fafa">
      <div class="pre-header" style="color: #fff; display: none !important; font-size: 1px; line-height: 1px; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; visibility: hidden;"> Your getting started guide </div>
      <div class="body" style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; min-width: 100%; width: 100% !important; background-color: #f8fafa; margin: 0; padding: 32px 0;">
      <table style="width: 100%; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse; border-spacing: 0; table-layout: fixed; padding: 0; border: 0;" height="100%">
        <tr style="padding: 0;">
          <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; min-width: 100%; width: 100% !important; margin: 0; padding: 0;" class="email-container" align="center" valign="top">
            <img src="/image.png" class="mailtrap-logo" alt="mailtrap logo" draggable="false" style="-ms-interpolation-mode: bicubic; max-width: 100%; width: 136px !important; outline: none; text-decoration: none; height: 41px !important; border: none;">
            <table style="width: 580px; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: separate; border-spacing: 0; table-layout: auto; border-radius: 8px; margin-top: 24px; padding: 0; border: 1px solid #eee;" class="email-body" bgcolor="#fff">
              <!-- Content -->
              <tr style="padding: 0;">
                <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; padding: 24px 32px 30px;" class="content" align="left" valign="top">
                  <p style="-webkit
                  -text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; font-size: 14px; padding-bottom: 10px; margin: 0;">Hello! ${user.name}</p>
                  <p style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; font-size: 14px; padding-bottom: 10px; margin: 0;">
                    You requested to reset your password. Click the link below to reset your password.
                  </p>
                  <table border="0" cellpadding="0" cellspacing="0" width="335" class="button-block is-small" style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: separate; border-spacing: 0; table-layout: auto; width: auto; padding: 0; border: 0;">
                    <tr style="padding: 0;">
                      <td align="center" valign="middle" class="button" style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; border-radius: 6px; padding: 8px 14px;" bgcolor="#4c83ee">
                        <a target="_blank" rel="noopener noreferrer" href="${process.env.NEXTAUTH_URL}/api/auth/resetPassword?token=${user.forgotPasswordToken}" style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; color: #fff !important; display: block; font-size: 14px; font-weight: 500; text-decoration: none;">Reset Password</a>
                      </td>
                    </tr>
                  </table>
                  ${process.env.NEXTAUTH_URL}/api/auth/resetPassword?token=${user.forgotPasswordToken} <br>
                  <!-- Content Footer -->
                  <tr style="padding: 0;">
                    <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; padding: 0 32px 24px;" class="inner-footer" align="left" valign="middle">

                    <!-- Closing text -->
                    <table style="width: 50%; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse; border-spacing: 0; table-layout: auto; padding: 0; border: 0;">
                      <tr class="signature" style="padding: 0;">
                        <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word-break: break-word; border-top-width: 1px; border-top-color: #e4e4e9; border-top-style: solid; font-size: 12px; line-height: 1.5; padding: 15px 0 0;" class="close-text" align="left" valign="middle">
                          <table style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse; border-spacing: 0; table-layout: auto; padding: 0; border: 0;">
                            <tr style="padding: 0;">
                              <td style="-webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; mso-table-lspace: 0; mso-table-rspace: 0; border-collapse: collapse !important; -webkit-hyphens: auto; hyphens: auto; word
                              -break: break-word; padding: 0;">
                                <span>Sincerely,</span><br><br><strong>The ${APP_NAME} team</strong><br>
                                <span class="signature-email" style="color: #a3abb4; font-size: 10px;">support@${APP_NAME}.com</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
        </tr>
      </table>
    </div>
  </body> </html>`,
    });
    return info;
  } catch (error: any) {
    return error.message;
  }
}
