import styles from "../styles/Home.module.css";
import Nav from "./Nav";
import HomePage from "./HomePage";

import About from "./AboutMe";
export default function Home() {
	return (
		<div className="text-black w-[95vw] flex flex-col overflow-hidden">
			<Nav />
			<HomePage />
			<About />
		</div>
	);
}
