import { FaRegEye } from "react-icons/fa6";
import { CountriesInterface } from "../../utils/interface";
import { Button, Flex, PrimaryText, TextParagraph } from "../StyledComponents";

interface ListCountryProps {
  countries: CountriesInterface[];
  onShowDetails: (country: CountriesInterface) => void;
}
const ListCountry = ({ countries, onShowDetails }: ListCountryProps) => {
  return (
    <>
      {countries.map((country) => (
        <div className="content" key={country.code}>
          <Flex direction="row">
            <Flex direction="column">
              <Flex gap="3px">
                <span>
                  {String.fromCodePoint(
                    ...country.emojiU
                      .split(" ")
                      .map((u) => parseInt(u.replace("U+", ""), 16))
                  )}
                </span>
                <PrimaryText weight="600">{country.name}</PrimaryText>
              </Flex>

              <Flex padding="4px 36px" gap="10px">
                <TextParagraph>{country.currency}</TextParagraph>
                <TextParagraph>{country.capital}</TextParagraph>
              </Flex>
            </Flex>

            <Button onClick={() => onShowDetails(country)}>
              <FaRegEye size={18} />
            </Button>
          </Flex>
        </div>
      ))}
    </>
  );
};

export default ListCountry;
