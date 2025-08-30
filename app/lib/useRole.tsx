"use client";

import { useEffect, useState } from "react";

export type Role = "party" | "guest";

export function useRole() {
const [role, setRole] = useState<Role | null>(null);

useEffect(() => {
if (typeof window === "undefined") return;
const r = localStorage.getItem("wed_role");
if (r === "party" || r === "guest") setRole(r);
else setRole("guest");
}, []);

return role;
}