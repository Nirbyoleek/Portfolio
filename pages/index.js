import styles from "../styles/Home.module.css";
import Nav from "./Nav";
import HomePage from "./HomePage";

import About from "./AboutMe";
import Tech from "./tech";
export default function Home() {
	return (
		<div className="text-black w-[100vw] flex flex-col overflow-hidden items-center">
			<Nav />
			<HomePage />
			<About />
			<Tech />
		</div>
	);
}
