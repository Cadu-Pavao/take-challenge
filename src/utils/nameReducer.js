export const abbreviateName = (name) => {
  return name.split(" ").map((word) => word[0]);
};
