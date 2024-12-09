type CounterProps = {
	stopwatch: string;
	name: string;
	lapInformation: string;
};

export const TheCounter = ({
	stopwatch,
	name,
	lapInformation,
}: CounterProps) => {
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
