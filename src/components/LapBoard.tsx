type LapBoardProps = {
	laps: {
		numberOfLap: number;
		lapTime: string;
	}[];
};

export const LapBoard = ({ laps }: LapBoardProps) => {
	return (
		<>
			<ul>
				{laps.map((lap, i) => (
					<li key={i}>
						lap: {lap.numberOfLap}, time: {lap.lapTime}
					</li>
				))}
			</ul>
		</>
	);
};
