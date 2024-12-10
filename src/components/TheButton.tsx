import { MouseEventHandler } from "react";

type ButtonProps = {
	label: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const TheButton = ({ label, onClick }: ButtonProps) => {
	return (
		<button className={label} onClick={onClick}>
			{label}
		</button>
	);
};
