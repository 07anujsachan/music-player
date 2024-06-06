export const getMusicData = async (searchValue: any) => {
  const url = `https://v1.nocodeapi.com/anuj07/spotify/FnBLjWbCHxYpMngt/search?q=${
    searchValue === "" ? "trending" : searchValue
  }&type=track`;
  const url2 = `https://v1.nocodeapi.com/anujsachan_07/spotify/eOiElwVAmCKFuWVg/search?q=${
    searchValue === "" ? "trending" : searchValue
  }&type=track`;

  const makeApiCall = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }
    return response.json();
  };

  try {
    const data = await makeApiCall(url);
    return data;
  } catch (primaryError: any) {
    console.error("Primary API call failed:", primaryError.message);

    try {
      const data = await makeApiCall(url2);
      return data;
    } catch (fallbackError: any) {
      console.error("Fallback API call failed:", fallbackError.message);

      throw new Error("Both primary and fallback API calls failed");
    }
  }
};
