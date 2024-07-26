import { Helmet } from "react-helmet";
import { useEffect } from "react";

const HubspotScript = () => {
  const hubspotId = "2979356";

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent");

    if (!consentGiven) {
      const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        removeListeners();
      };

      const rejectCookies = () => {
        localStorage.setItem("cookieConsent", "false");
        removeListeners();
      };

      const removeListeners = () => {
        const acceptButton = document.getElementById(
          "hs-eu-confirmation-button"
        );
        const rejectButton = document.getElementById("hs-eu-decline-button");

        if (acceptButton) {
          acceptButton.removeEventListener("click", acceptCookies);
        }

        if (rejectButton) {
          rejectButton.removeEventListener("click", rejectCookies);
        }
      };

      const initListeners = () => {
        const acceptButton = document.getElementById(
          "accept-cookies-button-id"
        );
        const rejectButton = document.getElementById(
          "reject-cookies-button-id"
        );

        if (acceptButton) {
          console.log("hizo click en aceptar");
          acceptButton.addEventListener("click", acceptCookies);
        }

        if (rejectButton) {
          console.log("hizo click en aceptar");
          rejectButton.addEventListener("click", rejectCookies);
        }
      };

      initListeners();
    }
  }, []);

  return (
    <Helmet>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src={`//js.hs-scripts.com/${hubspotId}.js`}
      ></script>
      <script type="text/javascript">
        {`
        var _hsq = (window._hsq = window._hsq || []);
        _hsq.push(["setPath", "/home"]);
      `}
      </script>
    </Helmet>
  );
};

export default HubspotScript;
