export interface CountriesInterface {
  code: string;
  name: string;
  capital: string;
  currency: string;
  emojiU: string;
  languages: {
    name: string;
  }[];
  continent: {
    name: string;
  };
  phone: string;
}

export interface Messages {
  id: string;
  text: string;
  sender: "user" | "ai";
}
