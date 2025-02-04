import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const Box = styled.div`
  width: 90%;
  max-width: 500px;
  border-width: 0.5px;
  border-style: solid;
  border-color: aqua;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
    padding: 28px 16px;
  }
`;

export const PrimaryText = styled.h1<{ weight?: string }>`
  font-size: 24px;
  color: #333;
  font-weight: ${(props) => props.weight || "300"};
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-width: 0.2px;
  border-style: solid;
  border-color: aqua;
  border-radius: 10px;
  background-color: rgb(242, 242, 242);

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const PlainText = styled.p`
  font-size: 16px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  padding: 4px 16px;

  @media (min-width: 768px) {
    padding: 4px 32px;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  color: #333;
  align-self: flex-start;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Button = styled.button<{ bgcolor?: string; color?: string }>`
  width: auto;
  padding: 12px;
  color: ${(props) => props.color || "#f7f7f7"};
  font-weight: 600;
  background-color: ${(props) => props.bgcolor || "#1c1e3d"};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2d2f5a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 12px;
  }
`;

export const Imaged = styled.img<{ widthimage: string | null | undefined }>`
  width: ${(props) =>
    props.widthimage ?? "150px"}; 
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: 120px;
  }
`;

export const Flex = styled.div<{
  gap?: string;
  direction?: string;
  padding?: string;
  wrap?: string;
  justify?: string;
}>`
  display: flex;
  width: 100%;
  padding: ${(props) => props.padding || "0px"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-items: ${(props) => props.justify || "stretch"};
  @media (max-width: 768px) {
    flex-direction: ${(props) =>
      props.direction === "row" ? "column" : props.direction};
    gap: 16px;
    padding: 8px;
  }
`;

export const Navbar = styled.div`
  width: 90%;
  background-color: #f7f7f7;
  padding: 20px 30px;
  align-items: center;
  box-shadow: 0 0 20px rgba(128, 128, 128, 0.4);
  border-radius: 30px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 15px;
    width: 95%;
  }
`;
export const Wrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 1000;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &.open:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    &.open:nth-child(2) {
      opacity: 0;
    }

    &.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  gap: 16px;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 80px;
  right: 20px;
  box-shadow: 0 0 20px rgba(128, 128, 128, 0.4);
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-20px)"};
  pointer-events: ${(props) => (props.isOpen ? "all" : "none")};

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const TextParagraph = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: rgb(76, 76, 76);
`;

export const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  top: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: right 0.8s ease-in;
  z-index: 1001;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #666;
`;

export const AlertError = styled.div`
  width: 100%;
  background-color: #e33829;
  color: #ffff;
  font-size: 14px;
  font-weight: 600;
  padding: 12px;
`;

export const quickButtonStyle = {
  padding: "6px 12px",
  borderRadius: "20px",
  border: "1px solid #007bff",
  background: "transparent",
  color: "#007bff",
  cursor: "pointer",
  fontSize: "0.9rem",
};
