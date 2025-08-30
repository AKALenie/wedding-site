"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface GuardProps {
children: React.ReactNode;
roleRequired?: "party" | "guest"; // optional restriction
}

export default function Guard({ children, roleRequired }: GuardProps) {
const router = useRouter();
const [ok, setOk] = useState<boolean | null>(null);

useEffect(() => {
if (typeof window === "undefined") return;

const authed = localStorage.getItem("wed_authed") === "true";
const role = localStorage.getItem("wed_role"); // "party" | "guest"

if (!authed) {
router.replace("/login");
return;
}

if (roleRequired && role !== roleRequired) {
// Wrong role -> send home
router.replace("/");
return;
}

setOk(true);
}, [router, roleRequired]);

if (ok !== true) return null;
return <>{children}</>;
}