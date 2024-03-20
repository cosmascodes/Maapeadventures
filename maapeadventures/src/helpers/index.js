import AdventuresData from "@/app/api/data";

export const getSingleAdventure = (name) => {
  const singleItem = AdventuresData.find(
    (adventure) => adventure.title === name
  );
  return singleItem;
};
