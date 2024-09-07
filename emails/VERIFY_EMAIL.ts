import { APP_NAME } from "@/constants/TextConsts";
import emailStyles from "./styles";

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
        <div class="logo">
            <svg id="logo-58" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="stroke" d="M25 43.94H14.06L10.86 38.39L8.28998 33.94L10.86 29.48" stroke="blue"
                    strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path class="stroke"
                    d="M10.86 29.4801H5.7L3.13 25.0001L6.77 18.6901L8.27001 16.1001L10.87 11.6101L13.44 7.15006L14.06 6.06006H25"
                    stroke="blue" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path class="stroke"
                    d="M25 39.48H16.64L13.44 33.94L10.86 29.48L13.47 25H8.28003L11.95 18.63L13.44 16.06L16.01 11.61L16.64 10.52H25"
                    stroke="blue" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path class="stroke" d="M25 15.01H19.23L13.47 25L19.23 34.99H25" stroke="blue" strokeWidth="0.5"
                    strokeMiterlimit="10"></path>
                <path class="stroke" d="M8.28001 25L5.70001 29.48" stroke="blue" strokeWidth="0.5" strokeMiterlimit="10">
                </path>
                <path class="stroke" d="M44.3 29.48L41.72 25" stroke="blue" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path class="stroke" d="M25 43.94H35.94L39.14 38.39L41.71 33.94L39.14 29.48" stroke="blue" strokeWidth="0.5"
                    strokeMiterlimit="10"></path>
                <path class="stroke"
                    d="M39.14 29.4801L44.31 29.4401L46.87 25.0001L43.23 18.6901L41.73 16.1001L39.13 11.6101L36.56 7.15006L35.94 6.06006H25"
                    stroke="blue" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path class="stroke"
                    d="M25 39.48H33.36L36.56 33.94L39.14 29.48L36.53 25H41.72L38.05 18.63L36.56 16.06L33.99 11.61L33.36 10.52H25"
                    stroke="blue" strokeWidth="0.5" strokeMiterlimit="10"></path>
                <path class="stroke" d="M25 15.01H30.77L36.53 25L30.77 34.99H25" stroke="blue" strokeWidth="0.5"
                    strokeMiterlimit="10"></path>
                <path class="stroke" d="M19.23 15.01L16.64 10.52" stroke="blue" strokeWidth="0.5" strokeMiterlimit="10">
                </path>
                <path class="stroke" d="M30.77 15.01L33.36 10.52" stroke="blue" strokeWidth="0.5" strokeMiterlimit="10">
                </path>
            </svg>
            <span class="fs">${APP_NAME}</span>
        </div>
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
