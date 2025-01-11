"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./styles/page.module.css";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#0A0A0A" },
          dark: { "cal-brand": "#7851A9" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <p className="text-center text-lg font-normal mb-8">
        Website under maintenance. <br /> In the meantime, follow{" "}
        <Link
          className="text-indigo-600"
          href={"https://www.linkedin.com/in/himanshufs/"}
        >
          <span className="underline underline-offset-4">Himanshu</span> :)
        </Link>{" "}
      </p>

      <div className="mt-4">
        <p className="text-center text-lg font-normal">
          Or Book a Free Call 👇
        </p>
        <Link href={"/call"} className="">
          <div className="text-gray-800 bg-slate-200 text-lg font-medium px-8 py-2 text-center rounded mt-4 hover:bg-slate-300 transition-all">
            from here
          </div>
        </Link>
      </div>
    </main>
  );
}
