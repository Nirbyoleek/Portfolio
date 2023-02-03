import React from "react";
import Image from "next/Image";

const Techs = ({ techs, name }) => {
	return (
		<div className="border border-black  text-center mb-4 mt-10">
			<div className="bg-black text-white">{name}</div>
			<div className="  w-[20vw] flex flex-row justify-between p-2">
				{techs.map((tech) => (
					<div key={tech.name}>
						<div>{tech.name}</div>
						<Image src={tech.source} alt="Image" width="80px" height="80px" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Techs;
