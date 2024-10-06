import { APP_NAME } from "@/lib/constants/TextConsts";
import emailStyles from "@/lib/emails/styles";

const resetPassMailHTML = (resetPasswordLink: string, userName: string) => `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <title>${APP_NAME} reset password email</title><!--[if !mso]>-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
    ${emailStyles}
</head>
<body>
    <div class="main-body">
        <div class="email-container">
            <!-- Reset Password -->
            <h1>Reset your password</h1>
            <p>Hi ${userName},</p>
            <p>We received a request to reset your password. If you did not make this request, please ignore this email.</p>
            <p>Click the link below to reset your password.</p>
            <a href="${resetPasswordLink}">Reset password</a>
        </div>
    </div>
</body>
</html>`;

export default resetPassMailHTML;
