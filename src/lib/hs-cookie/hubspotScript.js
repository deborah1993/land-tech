import { Helmet } from "react-helmet";

const HubspotScript = () => {
  const hubspotId = "2979356";

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
