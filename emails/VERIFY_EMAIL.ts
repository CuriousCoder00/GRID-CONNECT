import { APP_NAME } from "@/constants/TextConsts";
import emailStyles from "@/emails/styles";

const verificationMailHTML = (verificationLink: string, userName: string) => `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <title>${APP_NAME} welcome email</title><!--[if !mso]>-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
    ${emailStyles}
</head>
<body align='center'>
    <div class="main-body">
        <div class="email-container" align='start'>
            <h1>Welcome to ${APP_NAME}</h1>
            <p>Hi ${userName},</p>
            <p>Thank you for signing up to ${APP_NAME}. <br> We are excited to have you on board.</p>
            <p>Click the link below to verify your email address and complete your registration.</p>
            <a href="${verificationLink}">Verify email</a>
            <p>If you have any questions, please don't hesitate to contact us at: support@${APP_NAME}.com
            </p>
        </div>
    </div>
</body>
</html>`;

export default verificationMailHTML;
