import axios from "axios";

const apiKey = process.env.HUBSPOT_CRM_API_KEY;
const apiUrl = "https://api.hubapi.com/crm/v3/objects/contacts";

axios
  .get(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
  .then((response) => {
    console.log("Contacts:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
