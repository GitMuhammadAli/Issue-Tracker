"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  createdAt: string;
  updatedAt: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  userId: string | null;
  userData: User | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();

  const login = (token: string) => {
    Cookies.set("token", token); // Store token in cookies
    const decoded: any = jwtDecode(token); // Decode token
    console.log("Decoded token:", decoded);

    if (decoded && decoded.id) {
      setIsAuthenticated(true);
      setUserId(decoded.id);
      fetchUser(decoded.id); // Fetch user data immediately after login
    } else {
      console.log("Token does not contain a valid user ID");
    }
  };

  const fetchUser = async (id: string) => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching user with token:", token);
      const response = await fetch('/api/user', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
      });

      if (!response.ok) {
        console.error("Failed to fetch user data:", response.statusText);
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      console.log("Fetched user data:", userData);
      setUserData(userData); 
    } catch (error) {
      console.error("Error fetching user data:", error);
      logout(); 
    }
  };

  const logout = () => {
    Cookies.remove("token"); // Remove token from cookies
    setIsAuthenticated(false);
    setUserId(null);
    setUserData(null); // Clear user data on logout
    router.push("/signin"); // Redirect to sign-in page
  };

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token on load:", token); // Check if token exists

    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        console.log("Decoded token on load:", decoded); 

        if (decoded && decoded.id) {
          setIsAuthenticated(true);
          setUserId(decoded.id);
          fetchUser(decoded.id); 
        } else {
          console.log("Invalid token, logging out.");
          logout(); 
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
        logout(); 
      }
    } else {
      console.log("No token found, user not authenticated.");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, userData, login, logout  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
