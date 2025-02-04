import { useQuery } from "@tanstack/react-query";

type Ability = {
  id: number;
  name: string;
  effect_entries: Array<{
    effect: string;
    short_effect: string;
    language: { name: string };
  }>;
};

const fetchAbility = async (abilityName: string): Promise<string> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/ability/${abilityName}`
  );
  if (!response.ok) throw new Error("Error fetching ability");

  const data: Ability = await response.json();
  const englishEntry = data.effect_entries.find(
    (entry) => entry.language.name === "en"
  );

  return englishEntry?.short_effect || "No effect description available.";
};

export const useAbility = (abilityName: string) => {
  return useQuery({
    queryKey: ["ability", abilityName],
    queryFn: () => fetchAbility(abilityName),
    staleTime: 1000 * 60 * 5,
  });
};
