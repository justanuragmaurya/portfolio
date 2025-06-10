"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Footer() {
  const [visit, setVisit] = useState<number | "Loading">("Loading");
  useEffect(() => {
    async function increaseVisitors() {
      const response = await axios.get("/api/visit");
      setVisit(response.data.visitor);
    }
    increaseVisitors();
  }, []);
  return (
    <div className="flex items-center justify-center my-10 text-sm text-primary/70">
      <h1 className="mx-auto">Total Visitors : {visit}</h1>
    </div>
  );
}
