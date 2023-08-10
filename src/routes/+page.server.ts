import type { PageServerLoad } from "./$types";
import feelingsDatabase from "$lib/db/feelingsDB";

export const load = (({ params }) => {
  const feelingsList = [...feelingsDatabase.keys()];
  return {
    feelingsList,
  };
}) satisfies PageServerLoad;
