export const createProjectTitle = (input) => {
  const words = input.split(" ");
  const abbreviation = words.slice(0, 2).map((word) => word.charAt(0));
  const result = abbreviation.join("");
  return result.toUpperCase();
};

export const createUrlQuery = (string) => {
  return string.toLowerCase().replace(/\s+/g, "_");
};

export const createQueryFromTitle = (string) => {
  return string
    .split("_") // Split the string by underscores
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" ");
};
