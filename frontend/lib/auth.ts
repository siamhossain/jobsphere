import { User } from "@/types/user";

const API_URL = "http://localhost:5000/api";

export const saveAuthData = (data: any) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
};

export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.msg || "Login failed");
  }

  saveAuthData(data);

  return data.user as User;
};

export const registerUser = async (form: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  saveAuthData(data); // AUTO LOGIN HERE

  return data.user as User;
};

// export const getUser = (): User | null => {
//   if (typeof window === "undefined") return null;

//   const user = localStorage.getItem("user");
//   return user ? JSON.parse(user) : null;
// };

export const getUser = (): User | null => {
  if (typeof window === "undefined") return null;

  try {
    const user = localStorage.getItem("user");

    if (!user || user === "undefined") return null;

    return JSON.parse(user);
  } catch (err) {
    console.error("Invalid user in localStorage");
    return null;
  }
};


//logout function
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/";
};