"use client";

import { useState } from "react";
import { loginUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { updateUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState(false);

  // ---------------- VALIDATION ----------------
  const validate = (field: string, value: string) => {
    let error = "";

    if (field === "email") {
      if (!value) error = "Email is required";
      else if (!value.includes("@")) error = "Invalid email format";
    }

    if (field === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 6) error = "Min 6 characters required";
    }

    return error;
  };

  // ---------------- LOGIN ----------------
  const handleLogin = async () => {
    setErrors({
      email: validate("email", email),
      password: validate("password", password),
    });

    if (validate("email", email) || validate("password", password)) {
      return;
    }

    try {
      setLoading(true);

      const user = await loginUser(email, password);
      updateUser(); // UPDATE CONTEXT

      if (user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      setErrors((prev) => ({
        ...prev,
        password: err.message || "Login failed",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back 👋</h2>

        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          {/* EMAIL */}
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);

              if (touched.email) {
                setErrors({
                  ...errors,
                  email: validate("email", e.target.value),
                });
              }
            }}
            onBlur={() => setTouched({ ...touched, email: true })}
            className={`w-full mb-2 px-4 py-2 border rounded-lg
              ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
          />

          {errors.email && touched.email && (
            <p className="text-red-500 text-sm mb-3">{errors.email}</p>
          )}

          {/* PASSWORD */}
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);

              if (touched.password) {
                setErrors({
                  ...errors,
                  password: validate("password", e.target.value),
                });
              }
            }}
            onBlur={() => setTouched({ ...touched, password: true })}
            className={`w-full mb-2 px-4 py-2 border rounded-lg
              ${
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
          />

          {errors.password && touched.password && (
            <p className="text-red-500 text-sm mb-3">{errors.password}</p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* LINK */}
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
