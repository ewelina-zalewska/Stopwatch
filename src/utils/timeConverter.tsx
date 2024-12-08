export const TimeConverter = (time: number) => {
	const minutes = Math.floor(time / 6000)
		.toString()
		.padStart(2, "0");
	const seconds = Math.floor((time % 6000) / 100)
		.toString()
		.padStart(2, "0");
	const milliseconds = (time % 100).toString().padStart(2, "0");

	return `${minutes}:${seconds}:${milliseconds}`;
};
