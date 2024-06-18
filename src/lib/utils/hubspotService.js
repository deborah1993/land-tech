import axios from "axios";
// https://www.youtube.com/watch?v=FCZAO33fRKg This video to make the integration!
const HUBSPOT_API_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_API_KEY}/FORM_ID`;

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

// const response = await hubspotClient.apiRequest({
//     method: 'POST',
//     path: '/filemanager/api/v3/files/upload',
//     body: formData,
//     defaultJson: false
// });
