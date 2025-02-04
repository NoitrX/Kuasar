import React from "react";
import { Flex, Imaged, PrimaryText, TextParagraph } from "../StyledComponents";
import { useAuth } from "../Auth/AuthContext";

const Profile:React.FC = () => {
    const { user } = useAuth();
    return (
        <>
         <div className="content">
          <PrimaryText weight="600">Profile</PrimaryText>
          <TextParagraph>Your Profile</TextParagraph>

          <Flex
            direction="row"
            gap="24px"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Imaged widthimage={"150px"} src={`${user?.photoURL}`} alt="" />
            <div>
              <TextParagraph>Name :{user?.displayName}</TextParagraph>
              <TextParagraph>Email :{user?.email}</TextParagraph>
            </div>
          </Flex>
        </div></>
    )
}

export default Profile