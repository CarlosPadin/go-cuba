// Called from useLogin hook
export async function loginUser(data: {
  username: string;
  password: string;
}) {
  const res = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Login Error");
  }

  return res.json();
}


// Called from useCreateUser hook
export const createUser = async (data: any) => {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error creating user");

  return res.json();
};
