import { Button } from "../ui/button";

interface SiderItemProps {
  icon: React.ReactNode;
  isOpen: boolean;
  onClick?: () => void;
}

export const SiderItem: React.FC<SiderItemProps> = (props) => {
  return (
    <Button
      className="cursor-pointer"
      onClick={props.onClick}
      variant={props.isOpen ? "secondary" : "outline"}
      size="icon"
    >
      {props.icon}
    </Button>
  );
};
