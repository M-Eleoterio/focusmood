import { Button } from "../ui/button";

interface SiderItemProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

export const SiderItem: React.FC<SiderItemProps> = (props) => {
  return (
    <Button
      className="cursor-pointer"
      onClick={props.onClick}
      variant="outline"
      size="icon"
    >
      {props.icon}
    </Button>
  );
};
