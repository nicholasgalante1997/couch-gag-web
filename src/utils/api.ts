import axios, { type AxiosInstance } from 'axios';

interface ShelfApiClientOptions {
  net: AxiosInstance;
}

class ShelfApiClient {
  private readonly net: AxiosInstance;
  constructor(options: ShelfApiClientOptions) {
    this.net = options.net;
  }

  public async create() {}
}

class Api {
  private readonly net = axios.create({
    baseURL: process.env.VERCEL_PRODUCTION_EF_API_URL,
    timeout: 1500,
    headers: {
      Accept: 'text/html, application/json, image/webp, image/jpg, image/png, */*;q=0.1'
    }
  });

  public Shelf = new ShelfApiClient({ net: this.net });
}

let api: Api;

export function getApi(): Api {
  if (!api) {
    api = new Api();
  }
  return api;
}
