import FetchButton from "../../islands/FetchButton.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    const url = new URL(req.url);
    const id = new URLSearchParams(url.search).get('id');
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return await ctx.render({ data, id });
  },
};

export default function FetchTestPage(props: PageProps) {
  console.log(props);
  return (
    <div class="flex flex-col gap-[36px] justify-center items-center">
      <h1 class="pt-16 text-underline text-5xl font-black text-center">
        This is fetch test page
      </h1>
      <h2>{`${JSON.stringify(props)}`}</h2>
      <FetchButton />
    </div>
  );
}
