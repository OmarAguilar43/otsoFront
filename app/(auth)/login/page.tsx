"use client";

import { API_URL } from "@/constants";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [submitting, setSubmiting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSubmiting(true);
    e.preventDefault();

    const emailInput = e.currentTarget.userEmail.value;
    const passwordInput = e.currentTarget.userPassword.value;

    const payload = {
      userEmail: emailInput,
      userPassword: passwordInput,
    };

    try {
      console.log("Enviando payload:", payload);
      const response = await axios.post(`${API_URL}/auth/login`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log("Login exitoso:", );
      if (response.status === 201)router.push('/dashboard')
        
    } catch (error) {
      console.error(" Error en login:");
    } finally {
      setSubmiting(false);
    }
  };

  return (
    <form className="bg-white px-10 py-2 rounded-md" onSubmit={handleSubmit}>
      <p className="text-2xl my-4">Iniciar Sesión</p>

      <div className="flex flex-col gap-2 my-4 items-center">
        <Input label="Email" type="email" name="userEmail" required size="sm" />
        <Input
          label="Password"
          type="password"
          name="userPassword"
          required
          size="sm"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <Button type="submit" disabled={submitting} color="primary">
          {submitting ? "Cargando..." : "Iniciar sesión"}
        </Button>
        <p className="mt-2">
          ¿Aún no tienes una cuenta?{" "}
          <Link href="/signup" className="hover:text-blue-800 underline">
            Regístrate
          </Link>
        </p>
      </div>
    </form>
  );
}
