interface ErrorData {
  message: string | string[];
  error: string;
  statusCode: number;
}

const handleError = async (response: Response) => {
  if (response.status === 401) {
    localStorage.removeItem("authToken");
  }
  const errorData: ErrorData = await response.json();
  const errorMessage = Array.isArray(errorData.message)
    ? errorData.message.join(", ")
    : errorData.message;
  throw new Error(errorMessage);
};

const baseUrl = import.meta.env.VITE_API_URL;

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

  const response = await fetch(`${baseUrl}`+`${url}`, config);

  if (!response.ok) {
    await handleError(response);
  }

  const data: T = await response.json();
  return data;
};

export default authenticatedFetch;
