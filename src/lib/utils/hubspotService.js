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
        velue: "",
      },
      {
        name: "lotAreaFrom",
        velue: "",
      },
      {
        name: "lotAreaTo",
        velue: "",
      },
      {
        name: "porpertyType",
        velue: "",
      },
      {
        name: "specificPlace",
        velue: "",
      },
      {
        name: "zoning",
        velue: "",
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
    } else if (xhr.readyState === 4 && xhr.status === 403) {
      alert(xhr.responseText);
    }
  };
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
