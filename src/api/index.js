import axios from "axios";

const baseURL = "https://disease.sh/v3/covid-19";

export const dailyData = async (country) => {
  try {
    let url;
    if (!country) url = `${baseURL}/all`;
    else url = `${baseURL}/countries/${country}`;

    const {
      data: { active, recovered, deaths, updated },
    } = await axios.get(url);

    return { active, recovered, deaths, updated };
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const historicData = async (days) => {
  try {
    const { data } = await axios.get(`${baseURL}/historical/all`, {
      params: {
        lastdays: days,
      },
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const countryData = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/historical?lastdays=5`);

    return Array.from(new Set(data.map((country) => country.country)));
  } catch (error) {
    console.error(error);
    return {};
  }
};
