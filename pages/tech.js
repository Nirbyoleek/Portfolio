import React from "react";
import Techs from "./techs";
import ReactLogo from "../assets/React.png";
import CSS from "../assets/css.png";
import Html from "../assets/html.png";

const Tech = () => {
	const frontTechs = [
		{
			name: "React",
			source: ReactLogo,
		},
		{
			name: "CSS",
			source: CSS,
		},
		{
			name: "HTML",
			source: Html,
		},
	];

	return (
		<div className="mt-[10vh]">
			<div className="text-4xl font-extrabold  ml-[25vw] mb-8">
				My Tech Stack
			</div>
			<div className="flex flex-row justify-between w-[70vw] flex-wrap">
				<Techs techs={frontTechs} name="Frontend" />
				<Techs techs={frontTechs} name="Backend" />
				<Techs techs={frontTechs} name="Languages" />
				<Techs techs={frontTechs} name="Tools" />
				<Techs techs={frontTechs} name="Devops" />
			</div>
			{/* Tech Stack Rows*/}
		</div>
	);
};

export default Tech;
