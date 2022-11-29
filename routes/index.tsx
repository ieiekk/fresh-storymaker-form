import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { createClient } from "https://deno.land/x/supabase@1.3.1/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
        <Counter start={4} />
      </div>

      <section>
        <h2>{Deno.env.get("GREETING") || "TEST"}</h2>
      </section>
    </>
  );
}
