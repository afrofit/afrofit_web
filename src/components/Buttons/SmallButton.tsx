import { CustomButton } from "./styled";

interface Props {
  title: string;
  onClick: () => void;
}

export const SmallButton: React.FC<Props> = ({ title, onClick }) => {
  return <CustomButton onClick={onClick}>{title}</CustomButton>;
};
