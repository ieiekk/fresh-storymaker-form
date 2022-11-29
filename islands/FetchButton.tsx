import { useState } from "preact/hooks";

export default function FetchButton() {
  const [content, setContent] = useState("Here displays contents");
  const index = Math.ceil(Math.random() * 100);
  const url = `https://jsonplaceholder.typicode.com/todos/${index}`;

  return (
    <>
      <button
        onClick={async () => setContent(await fetchData(url, index))}
        class="focus:outline-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-[96px] text-center"
      >
        FETCH
      </button>
      <p class="text-gray-400">{content}</p>
    </>
  );
}

async function fetchData(url: string, index: number) {
  let content = "";
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      content = JSON.stringify(json);
      console.log(index);
    });
  return content;
}
