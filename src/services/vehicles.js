import { HTTPClient } from "./client";
import { vehicle } from "../mocks/mockVehicle";

export default {
  /**
   * Get vehicles data from a list
   */
  getVehicles() {
    return HTTPClient.get("5eb553df31000060006994a8");
  },
  /**
   * Get vehicle details
   */
  getVehicleDetails() {
    return vehicle;
  },
};
