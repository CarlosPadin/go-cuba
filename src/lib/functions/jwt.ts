import jwt from "jsonwebtoken";

export function signAccessToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "15m",
  });
}

export function signRefreshToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "15d",
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    return null;
  }
}
