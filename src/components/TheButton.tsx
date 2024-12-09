import { MouseEventHandler } from "react";

type ButtonProps = {
	label: string;
	btnColor: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const TheButton = ({ btnColor, label, onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} style={{ backgroundColor: `${btnColor}` }}>
			{label}
		</button>
	);
};
