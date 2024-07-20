import { UniversitySearchOptions } from "./types";

export async function searchUniversities(options: UniversitySearchOptions) {
  try {
    if (!options.country) options.country = "indonesia";
    const query = new URLSearchParams(options);
    const response = await fetch(
      `http://universities.hipolabs.com/search?${query.toString()}`
    );

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
