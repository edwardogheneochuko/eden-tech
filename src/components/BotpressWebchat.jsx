const BotpressWebchat = () => {
  const BUTTON_COLOUR = "#F59E0B"
  const BOT_NAME = "Fevai"
  const BOT_AVATAR_URL = "/inshot.png"

  const iframeSrcDoc = `
    <!doctype html>
    <html lang="en">
      <head></head>
      <body>
        <script src="https://cdn.botpress.cloud/webchat/v3.0/inject.js"></script>
        <script defer>
          // Paste your Webchat config snippet here
          window.botpress.init({
            "botId": "9ed1a1da-9c2c-4eda-bd2e-54be08296b82",
            "configuration": {
              "version": "v1",
              "botAvatar": "${BOT_AVATAR_URL}",
              "website": {},
              "email": {},
              "phone": {},
              "termsOfService": {},
              "privacyPolicy": {},
              "color": "${BUTTON_COLOUR}",
              "variant": "solid",
              "headerVariant": "glass",
              "themeMode": "light",
              "fontFamily": "inter",
              "radius": 4,
              "feedbackEnabled": true,
              "botName": "${BOT_NAME}",
              "footer": "[âš¡ by Botpress](https://botpress.com/?from=webchat)",
              "allowFileUpload": true
            },
            "clientId": "${import.meta.env.VITE_WEBCHAT_CLIENT_ID}"
          });
        </script>
      </body>
    </html>
  `;

  return (
    <div className="
        fixed bottom-5 right-5
        h-[500px] w-[400px]
        z-[1000]
        shadow-lg rounded-lg overflow-hidden
      " >
      <iframe
        className="h-full w-full border-none"
        srcDoc={iframeSrcDoc}
        title="Botpress Webchat"
      ></iframe>
    </div>
  );
};

export default BotpressWebchat;