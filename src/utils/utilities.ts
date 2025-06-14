import axiosInstance from "../axios/interceptor";

export const apiCall = async (method: string, url: string, data?: any) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    // Handle errors here, e.g., log, display error messages, etc.
    console.error('API Error:', error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}