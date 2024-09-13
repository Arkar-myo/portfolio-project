import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./m-solid.svg"
								alt="METATEAM MYANMAR"
								className="work-image"
							/>
							{/* <i class="fa-solid fa-m"></i> */}
							<div className="work-title">METATEAM MYANMAR</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./framer.svg"
								alt="framer"
								className="work-image"
							/>
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
