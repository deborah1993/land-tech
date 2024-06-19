import axios from "axios";

const HUBSPOT_API_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.PORTAL_ID}/${process.env.FORM_ID}`;

export const handleSubmit = (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  const url = HUBSPOT_API_URL;
  const data = {
    fields: [
      {
        name: "zipCode",
        value: "",
      },
      {
        name: "lotAreaFrom",
        value: "",
      },
      {
        name: "lotAreaTo",
        value: "",
      },
      {
        name: "porpertyType",
        value: "",
      },
      {
        name: "specificPlace",
        value: "",
      },
      {
        name: "zoning",
        value: {
          agriculture: false,
          core: false,
          general: true,
          lightIndustrial: false,
          mixedUse: false,
          multiFamily: true,
        },
      },
    ],
    context: {
      pageUri: "https://land-tech.vercel.app/",
      pageName: "Land Tech Hero",
    },
  };

  const finalData = JSON.stringify(data);
  xhr.post("POST", url);
  xhr.setRequestHeader("content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert(xhr.responseText);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      alert(xhr.responseText);
    }
  };

  xhr.send(finalData);
};

const hubspotService = {
  sendEvent: async (eventName, properties) => {
    try {
      const response = await axios.post(
        `${HUBSPOT_API_URL}/crm/v3/objects/events/send`, //events/v3/send
        {
          name: eventName,
          properties: properties,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error sending event to HubSpot", error);
      throw error;
    }
  },
};

export default hubspotService;
