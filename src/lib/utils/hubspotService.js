import axios from "axios";

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
