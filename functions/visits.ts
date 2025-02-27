import { Redis } from "@upstash/redis";
import { VercelRequest, VercelResponse } from "@vercel/node";

// Use environment variables for Upstash credentials
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Handler for Netlify
export async function handler(event: any, context: any) {
  console.log("Netlify handler called. Event:", event); // LOG EVENT
  const response = await handleRequest(event);

  // Add CORS headers to the response
  response.headers = {
    ...(response.headers || {}),
    "Access-Control-Allow-Origin": "https://gurkanozil.github.io", // SPECIFIC ORIGIN
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allowed methods
    "Access-Control-Allow-Headers": "Content-Type", // Allowed headers
  };

  return response;
}

export default async function vercelHandler(
  req: VercelRequest,
  res: VercelResponse
) {
  const event = {
    httpMethod: req.method,
    body: req.body ? JSON.stringify(req.body) : null,
    headers: req.headers,
  };
  console.log("Vercel handler called. Event:", event); // LOG EVENT
  const response = await handleRequest(event);

  // Add CORS headers to the response
  res.setHeader("Access-Control-Allow-Origin", "https://gurkanozil.github.io"); // SPECIFIC ORIGIN
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allowed methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allowed headers

  res.status(response.statusCode);
  if (response.headers) {
    for (const key in response.headers) {
      res.setHeader(key, response.headers[key]);
    }
  }
  res.send(response.body);
}

async function handleRequest(event: any) {
  try {
    console.log("handleRequest called. Event:", event); // LOG EVENT
    if (event.httpMethod === "GET") {
      // Fetch the current visit count
      let visits = await redis.get<number>("visits");
      console.log("GET - Current visits:", visits); // LOG VISITS

      // If there's no visit count yet, start at zero.
      if (visits === null) {
        visits = 0;
      }

      // Return the visit count
      return {
        statusCode: 200,
        body: JSON.stringify({ visits }),
        headers: { "Content-Type": "application/json" },
      };
    } else if (event.httpMethod === "POST") {
      // Increment visit count
      const visits = await redis.incr("visits");
      console.log("POST - Incremented visits:", visits); // LOG VISITS

      return {
        statusCode: 200,
        body: JSON.stringify({ visits }),
        headers: { "Content-Type": "application/json" },
      };
    } else {
      // If it's not a GET or POST request, return an error.
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
        headers: { "Content-Type": "application/json" },
      };
    }
  } catch (error) {
    // Log the error
    console.error("Error:", error);

    // Return a server error
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
      headers: { "Content-Type": "application/json" },
    };
  }
}
