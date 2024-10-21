import { create } from "apisauce";
// import * as Constants from "utils/constants";

export const api = create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    // "X-API-KEY": Constants.RECO_ID_KEY,
  },
  timeout: 10000,
});