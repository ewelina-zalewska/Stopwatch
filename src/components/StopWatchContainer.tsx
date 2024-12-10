import { useEffect, useRef, useState } from "react";
import { TheCounter } from "@/components/TheCounter";
import { TimeConverter } from "@/utils/timeConverter";
import { TheButton } from "@/components/TheButton";
import { LapBoard } from "@/components/LapBoard";
import { TheSummary } from "@/components/TheSummary";

//variables
const intervalTime: number = 1;
const mainStopwatchName: string = "total time";
const lapStopwatchName: string = "lap time";

const stopBtnLabel: string = "stop";
const startBtnLabel: string = "start";
const resetBtnLabel: string = "reset";
const lapBtnLabel: string = "lap";

interface Lap {
	numberOfLap: number;
	lapTime: string;
	counter: number;
}
[];

export const StopWatchContainer = () => {
	const interval = useRef<ReturnType<typeof setInterval> | null>(null);

	const [totalCounter, setTotalCounter] = useState<number>(0);
	const [lapCounter, setLapCounter] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [lapsBoard, setLapsBoard] = useState<Lap[]>([]);
	const [showSummary, setShowSummary] = useState<boolean>(false);

	const totalNumberOfLaps: number = lapsBoard.length;
	const currentLap: number | "---" = totalNumberOfLaps
		? totalNumberOfLaps
		: "---";
	const fastestLap: string = totalNumberOfLaps
		? TimeConverter(Math.min(...lapsBoard.map((lap) => lap.counter)))
		: TimeConverter(0);

	useEffect(() => {
		isRunning ? START_COUNTER() : STOP_COUNTER();
		return () => {
			if (interval.current) {
				clearInterval(interval.current);
				interval.current = null;
			}
		};
	}, [isRunning]);

	//handle click events
	const CHANGE_COUNTER_CONDITION = () =>
		setIsRunning((prevIsRunning: boolean) => !prevIsRunning);

	const START_COUNTER = () => {
		if (interval.current) return;
		interval.current = setInterval(() => {
			setTotalCounter((prevTotalCounter) => prevTotalCounter + intervalTime);
			setLapCounter((prevLapCounter) => prevLapCounter + intervalTime);
		}, intervalTime);
	};

	const STOP_COUNTER = () => {
		if (interval.current) {
			clearInterval(interval.current);
			interval.current = null;
		}
		totalCounter && setShowSummary(true);
	};

	const RESET_COUNTER = () => {
		setTotalCounter(0);
		setLapCounter(0);
		setLapsBoard((prevLapsBoard) => ([...prevLapsBoard] = []));
	};

	const ADD_NEW_LAP = () => {
		const newLap: Lap = {
			numberOfLap: totalNumberOfLaps + 1,
			lapTime: TimeConverter(lapCounter),
			counter: lapCounter,
		};
		if (isRunning) {
			setLapsBoard((prevLapsBoard) => [...prevLapsBoard, newLap]);
			setLapCounter(0);
		}
	};
	const CLOSE_SUMMARY = () => setShowSummary(false);
	return (
		<>
			<div id="stopwatchcontainer">
				<div id="counters">
					<TheCounter
						stopwatch={TimeConverter(totalCounter)}
						name={mainStopwatchName}
						lapInformation={`Fastest lap: ${fastestLap}`}
					/>
					<TheCounter
						stopwatch={TimeConverter(lapCounter)}
						name={lapStopwatchName}
						lapInformation={`Current lap: ${currentLap}`}
					/>
				</div>
				<div id="buttons">
					<TheButton
						label={isRunning ? stopBtnLabel : startBtnLabel}
						onClick={CHANGE_COUNTER_CONDITION}
					/>
					<TheButton label={resetBtnLabel} onClick={RESET_COUNTER} />
					<TheButton label={lapBtnLabel} onClick={ADD_NEW_LAP} />
				</div>
				<LapBoard laps={lapsBoard} />
			</div>
			{showSummary && (
				<TheSummary
					handleClose={CLOSE_SUMMARY}
					totalTime={TimeConverter(totalCounter)}
					laps={lapsBoard}
					fastestLap={fastestLap}
				/>
			)}
		</>
	);
};
