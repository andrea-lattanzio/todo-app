const authenticatedFetch = async (url: string, options: RequestInit = {}) => {
  const authToken = localStorage.getItem("authToken");
  const headers: HeadersInit = {
    "Content-type": "application/json",
  };

  if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  const config = {
    ...options,
    headers: {
      ...headers,
      ...(options.headers || {}),
    },
  };

  try {
    const response = await fetch(`${url}`, config);

    if (response.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }

    const data = await response.json();

    if (!response.ok) throw new Error(data.message || "An error occured");

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default authenticatedFetch;
