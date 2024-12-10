import { MouseEventHandler } from "react";
import { TheButton } from "@/components/TheButton";
import { TimeConverter } from "@/utils/timeConverter";

//variables
const title = "summary";
const closeBtnLabel = "close";

type SummaryProps = {
	handleClose: MouseEventHandler<HTMLButtonElement>;
	totalTime: string;
	laps: {
		numberOfLap: number;
		lapTime: string;
		counter: number;
	}[];
	fastestLap: string;
};

export const TheSummary = ({
	handleClose,
	totalTime,
	laps,
	fastestLap,
}: SummaryProps) => {
	const totalNumberOfLaps: number = laps.length;
	const average_lap_time = laps.reduce(
		(accumulator, currentValue, currentIndex, array) => {
			accumulator += currentValue.counter;
			if (currentIndex === array.length - 1) {
				return accumulator / array.length;
			}
			return accumulator;
		},
		0,
	);
	const slowestLap: string =
		totalNumberOfLaps > 0
			? TimeConverter(Math.max(...laps.map((lap) => lap.counter)))
			: TimeConverter(0);
	return (
		<div id="summary">
			<header>{title}</header>
			<main>
				<div>
					<p>Total time:</p>
					<p>Average lap time:</p>
					<p>The fastest lap:</p>
					<p>The slowest lap:</p>
					<p>Total number of laps:</p>
				</div>
				<div>
					<p>{totalTime}</p>
					<p>{TimeConverter(Math.round(average_lap_time))}</p>
					<p>{fastestLap}</p>
					<p>{slowestLap}</p>
					<p>{totalNumberOfLaps}</p>
				</div>
			</main>
			<footer>
				<TheButton onClick={handleClose} label={closeBtnLabel} />
			</footer>
		</div>
	);
};
