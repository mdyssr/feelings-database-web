import { readable } from "svelte/store";
import feelingsDatabase from "$lib/db/feelingsDB";

export const feelings = readable({
  الغضب: feelingsDatabase.get("الغضب"),
  الفرح: feelingsDatabase.get("الفرح"),
  الخوف: feelingsDatabase.get("الخوف"),
  الحزن: feelingsDatabase.get("الحزن"),
  اليأس: feelingsDatabase.get("اليأس"),
  التعب: feelingsDatabase.get("التعب"),
});
