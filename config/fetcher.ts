type FetcherOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: any;
  headers?: HeadersInit;
  revalidate?: number;
  cache?: RequestCache;
};

export async function fetcher<T>(
  endpoint: string,
  options: FetcherOptions = {},
): Promise<T> {
  const {
    method = 'GET',
    body,
    headers,
    revalidate,
    cache = 'force-cache',
  } = options;

  const res = await fetch(`${process.env.API_URL}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache,
    next: revalidate ? { revalidate } : undefined,
  });

  if (!res.ok) {
    throw new Error(`Fetch error: ${res.status}`);
  }

  return res.json();
}
