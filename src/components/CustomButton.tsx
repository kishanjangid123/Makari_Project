import { Button } from "antd";

interface CustomButtonProps {
  text: string;
  type?: "primary" | "default" | "dashed";
  onClick?: () => void;
}

const CustomButton = ({
  text,
  type = "default",
  onClick,
}: CustomButtonProps) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;