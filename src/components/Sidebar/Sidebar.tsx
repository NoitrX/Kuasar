import {
  Overlay,
  Sidebar as StyledSidebar,
} from "../../components/StyledComponents";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Sidebar = ({ isOpen, onClose, children }: SidebarProps) => {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <StyledSidebar $isOpen={isOpen}>{children}</StyledSidebar>
    </>
  );
};

export default Sidebar;
