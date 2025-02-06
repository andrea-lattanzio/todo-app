const authenticatedFetch = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
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
      throw new Error("Unauthorized");
    }

    if (response.status === 400) {
      throw new Error("Bad request");
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default authenticatedFetch;
