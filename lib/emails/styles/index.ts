const emailStyles = `
<style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        .main-body {
            background-color: #f5f5f5;
            padding: 20px;
            width: 100%;
            height: 100%;
            text-wrap: wrap;
        }
        .fs{
            font-size: larger;
        }

        .email-container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-wrap: wrap;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            margin-bottom: 10px;
        }

        a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #000;
            color: rgb(255 255 255);
            text-decoration-line: none;
            border-radius: 5px;
            margin-top: 10px;
        }

        @media (max-width: 600px) {

            .email-container {
                padding: 10px;
            }

            h1 {
                font-size: 20px;
            }

            p {
                font-size: 14px;
            }

            a {
                padding: 8px 16px;
            }
        }
    </style>

`;

export default emailStyles;
