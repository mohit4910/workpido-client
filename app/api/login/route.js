import { API_BASE_URL, JWT_SECRET, TOKEN_MAX_AGE } from "@/lib/constants";
import axios from "axios";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

/**
 *
 * @param {Request} req
 * @returns {Response}
 */
export async function POST(req) {
  try {
    const body = await req.json();
    const { identifier, password } = body;
    if (!identifier || !password) {
      return new Response(
        { message: "Identifier and password is required" },
        { status: 400 }
      );
    }

    const res = await axios.post(`${API_BASE_URL}/auth/local`, body);

    const sessionToken = jwt.sign({ userId: res.data?.id }, JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: TOKEN_MAX_AGE,
    });

    const serializedSessionToken = serialize("sessionToken", sessionToken, {
      httpOnly: true,
      secure: false,
      maxAge: TOKEN_MAX_AGE,
    });

    const accessToken = serialize("token", res.data?.jwt, {
      httpOnly: true,
      secure: true,
      maxAge: TOKEN_MAX_AGE,
    });

    return new Response(res?.data, {
      status: res?.status || 200,
      headers: {
        "Set-Cookie": [serializedSessionToken, accessToken],
      },
    });
  } catch (error) {
    return new Response(error, { status: error?.response?.status || 500 });
  }
}
