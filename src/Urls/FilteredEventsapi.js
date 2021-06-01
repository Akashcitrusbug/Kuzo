import axios from "axios";
const baseUrl = "http://44.225.113.133:8000";

function FilterdEvents(option) {
  try {
    return axios
      .get(`${baseUrl}/api/v1/event/home-page/?q=${option}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  } catch (err) {
    return err;
  }
}
export default FilterdEvents;
