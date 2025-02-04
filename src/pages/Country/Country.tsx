import { AlertDanger, showAlert } from "../../components/Alert/Alert";
import { useAuth } from "../../components/Auth/AuthContext";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import {
  CloseButton,
  Flex,
  Overlay,
  PrimaryText,
  Sidebar,
  TextParagraph,
  Wrapper,
} from "../../components/StyledComponents";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../../utils/query";
import client from "../../utils/apollo";
import { CountriesInterface } from "../../utils/interface";
import { useState } from "react";
import ListCountry from "../../components/Countries/ListCountries";
import Profile from "../../components/Profile";
import ChatBox from "../../components/Chatbox";

const Country = () => {
  const { user, logout } = useAuth();
  console.log(user);
  const [selectedCountry, setSelectedCountry] =
    useState<CountriesInterface | null>(null);

  const { error, data } = useQuery<{
    countries: CountriesInterface[];
  }>(GET_COUNTRIES, { client });

  const handleShowDetails = (country: CountriesInterface) => {
    setSelectedCountry(country);
  };

  const handleCloseSidebar = () => {
    setSelectedCountry(null);
  };

  const handleLogout = async () => {
    try {
      const result = await showAlert({
        title: "Are you sure?",
        text: "You will be logged out of your account.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, log out",
        cancelButtonText: "Cancel",
      });
      if (result.isConfirmed) {
        await logout();
        showAlert({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error logging out:", error);
      showAlert({
        title: "Error",
        text: "An error occurred while logging out. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Wrapper>
        {/* Navbar */}
        <NavbarComponent handleLogout={handleLogout} />
        <Profile />

        {/* Content */}
        <div className="content">
          {error && <AlertDanger>{error.message}</AlertDanger>}
          <PrimaryText weight="600">Countries</PrimaryText>
          <TextParagraph>
            Provide Information About Country in the World
          </TextParagraph>

          {/* List Countries */}
          <ListCountry
            countries={data?.countries || []}
            onShowDetails={handleShowDetails}
          />
        </div>

        {/* Sidebar */}
        <Overlay $isOpen={!!selectedCountry} onClick={handleCloseSidebar} />
        <Sidebar $isOpen={!!selectedCountry}>
          {selectedCountry && (
            <>
              <CloseButton onClick={handleCloseSidebar}>&times;</CloseButton>
              <PrimaryText weight="600">{selectedCountry.name}</PrimaryText>

              <Flex direction="column" gap="16px" padding="16px 0">
                <Flex gap="8px">
                  <TextParagraph>{selectedCountry.code}</TextParagraph>
                </Flex>

                <Flex direction="column" gap="8px">
                  <PrimaryText weight="500">Details</PrimaryText>
                  <TextParagraph>
                    Capital: {selectedCountry.capital}
                  </TextParagraph>
                  <TextParagraph>
                    Currency: {selectedCountry.currency}
                  </TextParagraph>
                  <TextParagraph>
                    Phone Code: +{selectedCountry.phone}
                  </TextParagraph>
                  <TextParagraph>
                    Continent: {selectedCountry.continent.name}
                  </TextParagraph>
                </Flex>

                <Flex direction="column" gap="8px">
                  <PrimaryText weight="500">Languages</PrimaryText>
                  <Flex wrap="wrap" gap="8px">
                    {selectedCountry.languages.map((lang) => (
                      <TextParagraph key={lang.name}>{lang.name}</TextParagraph>
                    ))}
                  </Flex>
                </Flex>

                {/* Chat Interface */}
                <ChatBox selectedCountry={selectedCountry} />
              </Flex>
            </>
          )}
        </Sidebar>
      </Wrapper>
    </div>
  );
};

export default Country;
