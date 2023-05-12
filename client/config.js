export class APIConfig {
  static apiURL = "http://localhost:4420";
  static apiPrefix = "/api/v1";

  static searchPrefix = "/search";
  static searchEndpoint = APIConfig.apiURL + APIConfig.apiPrefix + APIConfig.searchPrefix;

  static forecastPrefix = "/forecast";
  static forecastEndpoint = APIConfig.apiURL + APIConfig.apiPrefix + APIConfig.forecastPrefix;
}