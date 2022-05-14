import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="../styles/Global.css" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet"></link>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/foxlittle.png" />
                </Head>
                <body id="root">
                    <Main />
                    <div id="loading"></div>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
