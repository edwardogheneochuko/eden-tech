import { useState } from "react";

const BotpressWebchat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const BUTTON_COLOUR = "#F59E0B"; // amber/yellow color
  const BOT_NAME = "Fevai";
  const BOT_AVATAR_URL = "/inshot.png"; // ideally use an absolute URL

  const iframeSrcDoc = `
    <!doctype html>
    <html lang="en">
      <head></head>
      <body>
        <script src="https://cdn.botpress.cloud/webchat/v3.1/inject.js" defer></script>
        <script src="https://files.bpcontent.cloud/2025/07/09/21/20250709210603-U1GL57H5.js" defer></script>
        <script defer>
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
              "footer": "[⚡ by Botpress](https://botpress.com/?from=webchat)",
              "allowFileUpload": true
            },
            "clientId": "${import.meta.env.VITE_WEBCHAT_CLIENT_ID}"
          });
        </script>
      </body>
    </html>
  `;

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed bottom-4 right-4
          z-[1001]
          bg-[#F59E0B]
          text-white
          p-3 rounded-full
          shadow-lg
          hover:bg-yellow-500
          transition-colors
        "
      >
        {/* chat bubble icon */}
        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M7.5 10.5h9m-9 3h6M21 6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v7.5A2.25 2.25 0 005.25 16.5h5.25l3.75 3v-3h4.5A2.25 2.25 0 0021 14.25v-7.5z" />
        </svg>
      </button>

      {/* Chat iframe (only show when open) */}
      {isOpen && (
        <div className="
          fixed bottom-16 right-4
          h-[400px] w-[90%] max-w-[400px]
          sm:h-[450px] sm:w-[350px]
          md:h-[500px] md:w-[400px]
          z-[1000]
          shadow-lg rounded-lg overflow-hidden
        ">
          <iframe
            className="h-full w-full border-none"
            srcDoc={iframeSrcDoc}
            title="Botpress Webchat"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default BotpressWebchat;
