import { component$ } from "@builder.io/qwik";

import { routeLoader$ } from "@builder.io/qwik-city";

export const useSlowLoader = routeLoader$(async (requestEvent) => {
  // Simulate a fetch request with a setTimeout
  const data = await new Promise<{ message: string }>((resolve) => {
    setTimeout(() => {
      resolve({ message: "I'm 3s slow" });
    }, 3000);
  });

  return data.message;
});

export default component$(() => {
  const slowLoader = useSlowLoader();
  return (
    <>
      <h1>{slowLoader.value}</h1>
    </>
  );
});
