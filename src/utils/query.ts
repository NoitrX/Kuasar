import { gql } from "@apollo/client";
import { CountriesInterface } from "./interface";

export const GET_COUNTRIES = gql`
  query {
    countries {
      name
      code
      emojiU
      capital
      currency
      phone
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

export const getSystemPrompt = (country: CountriesInterface) => `
You are a knowledgeable country assistant. Always follow these rules:
1. Provide answers based on these details:
   - Country: ${country.name}
   - Capital: ${country.capital}
   - Currency: ${country.currency}
   - Languages: ${country.languages.map((l) => l.name).join(", ")}
   - Continent: ${country.continent.name}
2. For travel advice, focus on safety, attractions, and cultural tips
3. For translations, provide both original and translated text
4. Keep responses concise but informative
5. If unsure, say "I don't have information about that"
`;

export const detectQueryType = (message: string) => {
  if (/travel|visit|recommend/i.test(message)) return "travel";
  if (/translate|language/i.test(message)) return "translation";
  return "general";
};
