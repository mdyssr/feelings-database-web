import { error } from "@sveltejs/kit";
import feelingsDB from "$lib/db/feelingsDB";
import type { PageServerLoad } from "./$types";

export const load = (({ params }) => {
  const { feeling } = params;
  const content = feelingsDB.get(feeling);

  return {
    feeling,
    content,
  };
}) satisfies PageServerLoad;
