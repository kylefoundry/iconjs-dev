import "./App.css";
import Icon, { Plus, IconjsProvider, setGlobalIconJs } from "iconjs";

function App() {
	return (
		<div className="App">
			<Icon icon={Plus} fill="#b3b3b3" stroke="6" />
			{/* <Icon
				icon={CreditCard}
				color="#000"
				fill="#8800ff"
				accent="#000"
				accent2="#00ff00"
				stroke="2"
			/> */}
			<Icon icon={Plus} />
			{/* <Icon icon={CreditCard} /> */}
		</div>
	);
}

function AppProvider() {
	// Acts as our global config
	setGlobalIconJs({
		color: "#000",
		fill: "#ccc",
		accent: "#777",
		accent2: "#333",
		stroke: "2",
		end: undefined,
	});

	return (
		<IconjsProvider>
			<App></App>
		</IconjsProvider>
	);
}

export default AppProvider;
