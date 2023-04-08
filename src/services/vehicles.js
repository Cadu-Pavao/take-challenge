import { HTTPClient } from "./client";

export default {
  /**
   * Get vehicles data from a list
   */
  getVehicles() {
    return HTTPClient.get("5eb553df31000060006994a8");
  },
};
