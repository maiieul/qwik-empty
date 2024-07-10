import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useSlowLoader = routeLoader$(async (requestEvent) => {
  const data = await new Promise<{ message: string }>((resolve) => {
    setTimeout(() => {
      resolve({ message: "I'm 1s slow" });
    }, 1000);
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
