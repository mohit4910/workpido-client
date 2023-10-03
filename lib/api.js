import axios from "axios";
// import store from "./../store/index";
const store = { token: "" };

const REACT_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// const X_API_KEY = process.env.REACT_APP_X_API_KEY;

/**
 * API service methods to make life easier
 */
export const API = {
  /**
   * Execute a query
   * @param url
   * @param method
   * @param body
   * @returns
   */
  execute: async (url, method = "GET", data = null) => {
    let body = null;
    let value = null;
    if (data) {
      body = new FormData();
      for (const key in data) {
        // console.log({ key: key, value: data[key], type: typeof (data[key]) });
        value = data[key];
        if (typeof value == "object") {
          var fileURI = value.path;
          let filename = fileURI?.split("/").pop();
          body.append("image", {
            uri: fileURI,
            name: filename,
            type: value.mime,
            mime: value.mime,
          });
          // console.log(filename);
        } else {
          body.append(key, data[key]);
        }
      }
    }
    // console.log({ body, data });
    // let token = store.getState().auth.token;
    let token = store.token;
    if (!token) {
      token = sessionStorage.getItem("token");
    }

    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      //   "x-api-key": X_API_KEY,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    let res = await fetch(`${REACT_API_BASE_URL}${url}`, {
      method: method,
      headers,
      body: data ? JSON.stringify(data) : null,
    });

    return Promise.all([res.status, res.json(), res.ok]);
  },

  /**
   * Process the response after the query has been executed
   * @param res
   * @returns
   */
  processResponse: (res) => {
    if (!res[2]) {
      console.error({ error: res });
      throw new Error(res[1].detail);
    }
    return res[1];
  },

  // Actual APIs

  getGigs: async () => {
    let res = await API.execute(`/gigs?populate=*`, "GET");
    return API.processResponse(res);
  },

  signup: async (data) => {
    let res = await API.execute(`/auth/local/register`, "POST", data);
    return API.processResponse(res);
  },
  login: async (data) => {
    let res = await API.execute(`/auth/local`, "POST", data);
    return API.processResponse(res);
  },

  // Examples
  // =========================================================================================================================================================

  createHistory: async (data) => {
    let res = await API.execute(`history/test`, "POST", data);
    return API.processResponse(res);
  },

  /**
   * Get list of connected websites
   * @param data imit and skip
   * @returns array of connected websites.
   */
  getConnectedWebsites: async (page = 1, limit = 100) => {
    let skip = page - 1;
    let res = await API.execute(
      `connected-websites?skip=${skip}&limit=${limit}`,
      "GET"
    );
    return API.processResponse(res);
  },

  /**
   * Save a new connected website
   * @param data Object containing saving details
   * @returns
   */
  saveAConnectedWebsite: async (data) => {
    let params = new URLSearchParams(data).toString();
    let res = await API.execute(`connected-websites?${params}`, "POST", data);
    return API.processResponse(res);
  },

  /**
   * Delete website
   * @param data Object containing saving details
   * @returns
   */
  deleteAConnectedWebsite: async (data) => {
    let res = await API.execute(`connected-websites/${data.id}`, "DELETE");
    return API.processResponse(res);
  },

  /**
   * Manage user subscription.
   * @returns Object with {redirect, return} and you redirect the user to redirect for subscription
   */
  manageSubscription: async () => {
    let res = await API.execute(`stripe/manage-subscriptions`, "GET");
    return API.processResponse(res);
  },

  /**
   * Purchase Tokens Link.
   * @returns Object with {redirect, return} and you redirect the user to redirect to purchase tokens
   */
  buyTokens: async (data) => {
    let res = await API.execute(`stripe/buy-tokens`, "POST", data);
    return API.processResponse(res);
  },

  /**
   * Manage user subscription.
   * @returns Object with {redirect, return} and you redirect the user to redirect for subscription
   */
  allSubscriptionInfo: async () => {
    let res = await API.execute(`stripe/all-subscription-info`, "GET");
    return API.processResponse(res);
  },

  userSubscriptionInfo: async () => {
    let res = await API.execute(`stripe/user-subscription-info`, "GET");
    return API.processResponse(res);
  },

  userDashboardData: async () => {
    let res = await API.execute(`users/dashboard-data`, "GET");
    return API.processResponse(res);
  },

  /**
   * Read user information
   * @returns Object of user
   */
  getUserInfo: async () => {
    let res = await API.execute(`users/me`, "GET");
    return API.processResponse(res);
  },

  // Model APIs
  getModels: async (page = 1, limit = 100) => {
    let skip = page - 1;
    let res = await API.execute(`model?skip=${skip}&limit=${limit}`, "GET");
    return API.processResponse(res);
  },

  createModel: async (data) => {
    // let params = new URLSearchParams(data).toString();
    let res = await API.execute(`model`, "POST", data);
    return API.processResponse(res);
  },

  updateModel: async (modelId, data) => {
    let res = await API.execute(`model/${modelId}`, "PUT", data);
    return API.processResponse(res);
  },

  getSingleModel: async (id) => {
    let res = await API.execute(`model/single?id=${id}`, "GET");
    return API.processResponse(res);
  },
  deleteAModel: async (data) => {
    let res = await API.execute(`model/${data.id}`, "DELETE");
    return API.processResponse(res);
  },
  trainModel: async (model) => {
    let res = await API.execute(`model/train?model_id=${model.id}`, "POST");
    return API.processResponse(res);
  },

  // Dataset APIs
  createDataset: async (data) => {
    // console.log(data);
    let res = await API.execute(`datasets`, "POST", data);
    return API.processResponse(res);
  },
  prepareDataset: async (datasetId) => {
    let res = await API.execute(
      `datasets/prepare?dataset_id=${datasetId}`,
      "POST"
    );
    return API.processResponse(res);
  },

  getDatasets: async (skip = 0, limit = 20) => {
    let res = await API.execute(`datasets?skip=${skip}&limit=${limit}`, "GET");
    return API.processResponse(res);
  },

  deleteADataset: async (data) => {
    let res = await API.execute(`datasets/${data.id}`, "DELETE");
    return API.processResponse(res);
  },

  // Entry APIs
  readEntry: async (datasetId, skip = 0, limit = 1000) => {
    let res = await API.execute(
      `entry?&dataset_id=${datasetId}&skip=${skip}&limit=${limit}`,
      "GET"
    );
    return API.processResponse(res);
  },

  updateEntry: async (data) => {
    let res = await API.execute(`entry/${data.id}`, "PUT", data);
    return API.processResponse(res);
  },

  deleteAnEntry: async (data) => {
    let res = await API.execute(`entry/${data.id}`, "DELETE");
    return API.processResponse(res);
  },

  // Chatbot APIs
  getChatbots: async (page = 1, limit = 100) => {
    // let skip = page - 1;
    let res = await API.execute(`chatbot`, "GET");
    return API.processResponse(res);
  },
  createChatbot: async (data) => {
    // let params = new URLSearchParams(data).toString();
    let res = await API.execute(`chatbot`, "POST", data);
    return API.processResponse(res);
  },

  updateChatbot: async (chatbotID, data) => {
    let res = await API.execute(`chatbot/${chatbotID}`, "PUT", data);
    return API.processResponse(res);
  },

  getChatbotByID: async (id) => {
    let res = await API.execute(`chatbot/${id}`, "GET");
    return API.processResponse(res);
  },
};

export const downloadModelFile = async (model) => {
  let token = store.getState().auth.token;
  if (!token) {
    token = sessionStorage.getItem("token");
  }
  const axiosConfig = {
    responseType: "arraybuffer",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      //   "x-api-key": X_API_KEY,
    },
  };
  let res = await axios.get(
    `${REACT_API_BASE_URL}model/download?id=${model.id}`,
    axiosConfig
  );
  return res;
};

export const downloadDataset = async (dataset) => {
  let token = store.getState().auth.token;
  if (!token) {
    token = sessionStorage.getItem("token");
  }
  const axiosConfig = {
    responseType: "arraybuffer",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      //   "x-api-key": X_API_KEY,
    },
  };
  let res = await axios.get(
    `${REACT_API_BASE_URL}datasets/download?id=${dataset.id}`,
    axiosConfig
  );
  return res;
};

export const addEntries = async (data, datasetId) => {
  let token = store.getState().auth.token;
  if (!token) {
    token = sessionStorage.getItem("token");
  }
  const axiosConfig = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      //   "x-api-key": X_API_KEY,
    },
  };
  let res = await axios.post(
    `${REACT_API_BASE_URL}entry?dataset_id=${datasetId}`,
    data,
    axiosConfig
  );
  return res;
};
