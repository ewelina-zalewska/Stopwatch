type LapBoardProps = {
	laps: {
		numberOfLap: number;
		lapTime: string;
	}[];
};

export const LapBoard = ({ laps }: LapBoardProps) => {
	return (
		<>
			<div
				id="lapsHeadline"
				style={{ display: !laps.length ? "block" : "none" }}
			>
				<p>laps</p>
			</div>
			<div id="lapBoard">
				<ul style={{ display: laps.length ? "block" : "none" }}>
					{laps.map((lap, i) => (
						<li key={i}>
							{lap.numberOfLap} lap: time: {lap.lapTime}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
