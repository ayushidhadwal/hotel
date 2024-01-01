import Config from '../config';
import axios from 'axios';
import {ApiEndpoints} from '../store/ApiEndpoints';
import {load} from '../utils/storage';
import {store} from '../store';

let state = store.getState();
store.subscribe(() => {
  state = store.getState();
});

export const Axios = axios.create({
  baseURL: Config.API_URL,
});

const authRoutes: string[] = [ApiEndpoints.login];

Axios.interceptors.request.use(
  async function (config) {
    config.headers = config.headers ?? {};

    if (state.auth.token) {
      // const {lat, long} = await load(Config.USER_LOCATION);
      config.headers = {
        ...config.headers,
        language: state.auth.language,
        Authorization: `Bearer ${state.auth.token}`,
        // latitude: lat,
        // longitude: long,
      };
    }

    // console.log(config);
    

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
