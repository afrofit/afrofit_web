import { SmallButton, SmallButtonText } from "./styled";

interface Props {
	onClick: () => void;
	outlined?: boolean;
	title: string;
}

export const StyledSmallButton: React.FC<Props> = ({
	onClick,
	outlined,
	title,
}) => {
	return (
		<SmallButton onClick={onClick} outlined={outlined}>
			<SmallButtonText outlined={outlined}>{title}</SmallButtonText>
		</SmallButton>
	);
};
