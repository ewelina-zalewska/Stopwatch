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
			<div className="counterBox">
				<p>{name}</p>
				<div className="counter">
					<p className="stopwatch">{stopwatch}</p>
				</div>
				<p>{lapInformation}</p>
			</div>
		</>
	);
};
