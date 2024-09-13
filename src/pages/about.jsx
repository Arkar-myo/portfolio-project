import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							{/* <div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div> */}
							<div class="about-right-side">
								<div class="title about-title">
									Software Engineer
								</div>

								<div class="subtitle about-subtitle">
									Over two years of experience in developing and maintaining high-quality software for business applications. Proficient in both front-end and back-end technologies, with strong skills in Angular, Flask, Go, React, and database management. Highly motivated to learn new technologies and improve continuously.
								</div>

								<div class="education">
									<h2>Education</h2>
									<p>Bachelor’s Degree in Electronic and Communication Engineering</p>
									<p>Myanmar Institute of Information Technology (MIIT)</p>
									<p>Graduated: 2023</p>
								</div>

								<div class="experience">
									<h2>Work Experience</h2>
									<h3>Software Engineer | META Team Myanmar</h3>
									<p>July 2022 – April 2024</p>
									<p><strong>Key Responsibilities:</strong></p>
									<ul>
										<li>Developed and maintained full-stack applications with a focus on business-driven functionality.</li>
										<li>Collaborated with teams to build and enhance technology infrastructure, including testing and deployment environments.</li>
									</ul>

									<h4>Key Projects:</h4>
									<ul>
										<li>Rescue Web Project (Angular, Flask) – 12 months</li>
										<li>SKC (Rental and Sale of Construction Products) (Angular, Step) – 8 months</li>
										<li>Bulletin Board Project (Go Lang) – 1 month</li>
										<li>Attendance System (Go Lang, Node.js, Microsoft Team Services) – 4 months</li>
										<li>Bulletin Board Project (React) – 1 month</li>
									</ul>
								</div>

								<div class="technologies">
									<h2>Technologies:</h2>
									<ul>
										<li><strong>Front-end:</strong> Angular, React, JavaScript, HTML, CSS</li>
										<li><strong>Back-end:</strong> Flask, Go Lang, Node.js</li>
										<li><strong>Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
										<li><strong>Tools:</strong> Git, Visual Studio Code</li>
									</ul>
								</div>

								<div class="skills">
									<h2>Skills</h2>
									<ul>
										<li>Web Development: Angular, React, Flask, Go Lang, Node.js</li>
										<li>Database Management: MySQL, MongoDB, PostgreSQL</li>
										<li>Application Development: Front-end and Back-end</li>
										<li>API Development: RESTful services, integration with client-server applications</li>
										<li>Languages: JavaScript, Python, Go Lang</li>
									</ul>
								</div>

								<div class="english-proficiency">
									<h2>English Proficiency</h2>
									<ul>
										<li>5 years of academic study in an English-speaking environment with Indian professors.</li>
										<li>Completed a 4-month internship at IIIT Bangalore, India, communicating in English.</li>
										<li>Fluent in written and spoken English.</li>
									</ul>
								</div>

								<div class="additional-information">
									<h2>Additional Information</h2>
									<ul>
										<li>Always eager to learn and adapt to new technologies.</li>
										<li>Experience working with extensive collaborating across multiple regions and departments.</li>
										<li>Proven ability to deliver quality solutions under tight deadlines.</li>
										<li>Passionate player with a drive for music.</li>
										<li>Works well with different teams, maintaining teamwork and good relationships.</li>
										<li>Two-time first-place winner in university competitions, showing dedication and athletic ability.</li>
									</ul>
								</div>
							</div>


							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="my-photo.jpeg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
