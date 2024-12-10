import { MouseEventHandler } from "react";
import { TheButton } from "@/components/TheButton";
import { TimeConverter } from "@/utils/timeConverter";

//variables
const title = "summary";
const closeBtnLabel = "close";
const closeBtnColor = "#f0532a";
const closeBtnFont = "#04040e";

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
					<h3>Total time:{totalTime}</h3>
					<h3>
						Average lap time: {TimeConverter(Math.round(average_lap_time))}
					</h3>
					<h3>The fastest lap: {fastestLap}</h3>
					<h3>The slowest lap: {slowestLap}</h3>
					<h3>Total number of laps: {totalNumberOfLaps}</h3>
				</div>
			</main>
			<footer>
				<TheButton
					onClick={handleClose}
					label={closeBtnLabel}
					color={closeBtnFont}
					btnColor={closeBtnColor}
				/>
			</footer>
		</div>
	);
};
