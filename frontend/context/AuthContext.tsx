"use client";

import { createContext, useState, useEffect } from "react";
import { getUser } from "@/lib/auth";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Load user on first mount (same as your Navbar logic)
  useEffect(() => {
    const u = getUser();
    setUser(u);
    setLoading(false);
  }, []);

  // 🔥 Called after login/register
  const updateUser = () => {
    const u = getUser();
    setUser(u);
  };

  // 🔥 Called after logout
  const clearUser = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </AuthContext.Provider>
  );
};
