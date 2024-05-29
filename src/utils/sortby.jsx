export const sortbyhandler = (projectdata,sortBy) => {
    return [...projectdata].sort((a, b) => {
        if (sortBy === "Alphabetical") {
          return a["project name"].localeCompare(b["project name"]);
        } else if (sortBy === "Date created") {
          return new Date(a.created) - new Date(b.created);
        } else {
          // Default to sort by "Last modified"
          return new Date(b.updated) - new Date(a.updated);
        }
      });
}