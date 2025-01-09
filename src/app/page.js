"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

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
    <main className="flex flex-col justify-center items-center gap-36 mt-20 mb-16">
      <section className="w-[700px] text-neutral-300 justify-center">
        <p className="font-normal text-lg mb-2">Hi there</p>
        <p className="font-normal text-lg mb-8">
          {" "}
          I am{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/himanshufs/"
            className="underline-offset-2 underline text-indigo-600"
          >
            Himanshu
          </a>
          , founder @ a web dev agency,&nbsp;
          <a
            target="_blank"
            href="https://www.linkedin.com/company/bimboo-co/"
            className="underline-offset-2 underline text-indigo-600"
          >
            Bimboo.
          </a>
        </p>
        <p className="font-normal text-lg mb-2">here's what we do 👇</p>

        <ul>
          <li className="font-normal text-lg mb-2">
            - we research the market and analyze competitors to find what works.
          </li>
          <li className="font-normal text-lg mb-2">
            - we write content for your website, resonating with your target
            markets, age groups and more.
          </li>
          <li className="font-normal text-lg mb-8">
            - we then create a website for your company that doesn't just
            present information but tells a story & builds a connection.
          </li>
        </ul>

        <p className="font-normal text-lg mb-8">
          This call is for us to brainstorm and figure out where we can help
          you!
        </p>

        <p className="font-normal text-lg mb-8">
          Best <br /> Himanshu :)
        </p>
      </section>

      <section className="w-screen">
        <h3 className="text-3xl font-bold text-neutral-300 text-center mb-8">
          schedule a call now.
        </h3>
        <Cal
          namespace="30min"
          calLink="work-with-bimboo/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </section>
    </main>
  );
}
