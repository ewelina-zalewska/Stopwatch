import { LapBoard } from "@/components/LapBoard";

type Props = {
	stopwatch: string;
	name: string;
	lapInformation: string;
};

export const TheCounter = ({ stopwatch, name, lapInformation }: Props) => {
	return (
		<>
			<div>
				<h2>{name}</h2>
				<h1>{stopwatch}</h1>
				<h2>{lapInformation}</h2>
			</div>
		</>
	);
};
