import { create } from "apisauce";
// import * as Constants from "utils/constants";

const api = create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en",
    // "X-API-KEY": Constants.RECO_ID_KEY,
  },
  timeout: 10000,
});