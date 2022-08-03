import { ColorType } from "../../constants/colors";
import { CustomButton } from "./styled";

interface Props {
  title: string;
  onClick: () => void;
  color: ColorType;
  textcolor?: ColorType;
}

export const SmallButton: React.FC<Props> = ({
  title,
  onClick,
  color = "purple_100",
  textcolor = "white",
}) => {
  return (
    <CustomButton onClick={onClick} color={color} textcolor={textcolor}>
      {title}
    </CustomButton>
  );
};
