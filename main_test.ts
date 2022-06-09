import { assertExists } from "https://deno.land/std/testing/asserts.ts";
Deno.test("Check that articles exist", async () => {
  // look for files in the posts directory
  let articles = await Deno.readDir("./posts");
  assertExists(articles);
});
