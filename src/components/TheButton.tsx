import { MouseEventHandler } from "react";

type Props = {
	label: string;
	btnColor: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const TheButton = ({ btnColor, label, onClick }: Props) => {
	return (
		<button onClick={onClick} style={{ backgroundColor: `${btnColor}` }}>
			{label}
		</button>
	);
};
