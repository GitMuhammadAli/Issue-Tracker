"use client";

import React , {useEffect} from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Github, Twitter } from "lucide-react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { Separator } from "@components/ui/seprator";
import signInReducer from "@reducers/signInReducer";
import { useRouter } from "next/navigation";
import { useAuth } from "@context/AutContext";

const initialState = {
  email: "",
  password: "",
  error: "",
  loading: false,
};

export default function SignIn() {
  const { login , isAuthenticated } = useAuth(); 
  const router = useRouter();
  const [state, dispatch] = React.useReducer(signInReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_FIELD", field: e.target.id, value: e.target.value });
  };
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      const data = await response.json();
      if (response.ok) {
        router.push("/dashboard");
      } else {
        dispatch({ type: "SET_ERROR", error: data.message });
      }
    } catch (error) {
      dispatch({ type: "SET_ERROR", error: "An error occurred" });
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#DBE2EF] to-[#F9F7F7]">
      <Card className="w-full max-w-md shadow-lg">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold text-center text-[#112D4E]">Welcome Back</CardTitle>
            <CardDescription className="text-center text-[#3F72AF]">
              Enter your credentials to access TrackPro
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-[#3F72AF]" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="pl-10 bg-[#F9F7F7] border-[#3F72AF] focus:border-[#112D4E]"
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-[#112D4E] hover:bg-[#3F72AF] transition-colors">
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex items-center justify-between">
              <Separator className="w-1/3" />
              <span className="text-xs text-[#3F72AF]">OR</span>
              <Separator className="w-1/3" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="w-full">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Link href="/forgot-password" className="text-sm text-[#3F72AF] hover:text-[#112D4E] transition-colors">
              Forgot your password?
            </Link>
            <div className="text-sm text-[#3F72AF]">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-[#112D4E] hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
