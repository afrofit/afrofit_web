import { ColorType } from "../../constants/colors";
import { CustomButton } from "./styled";

interface Props {
  title: string;
  onClick: () => void;
  color: ColorType;
  textColor?: ColorType;
}

export const SmallButton: React.FC<Props> = ({
  title,
  onClick,
  color = "purple_100",
  textColor = "white",
}) => {
  return (
    <CustomButton onClick={onClick} color={color} textColor={textColor}>
      {title}
    </CustomButton>
  );
};
