import axios from "axios";
import { API_BASE_URL, API_BEERS_URL } from "../constants/api.constant";
import { getBeerListParamType } from "../types/common.type";
import { beerListResponseNormalizer } from "../utils/common";

const getBeerList = (params: getBeerListParamType) => {
  const { page, perPage } = params;
  const paginationFilterApiString =
    page && perPage ? `?page=${page}&per_page=${perPage}` : "";
  return axios
    .get(`${API_BASE_URL}${API_BEERS_URL}` + paginationFilterApiString)
    .then((response) => {
      const normalizedBeerListData = beerListResponseNormalizer(response?.data);
      return normalizedBeerListData;
    })
    .catch((err) => {
      console.error(err);
    });
};

const beerService = {
  getBeerList,
};

export default beerService;
