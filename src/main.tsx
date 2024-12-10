import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/style/index.scss";
import { StopWatchContainer } from "@/components/StopWatchContainer";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<StopWatchContainer />
	</StrictMode>,
);
