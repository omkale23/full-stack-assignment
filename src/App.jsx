import React, { useEffect, useState } from "react";
import "./styles.css";
import { createApi } from "unsplash-js";

function App() {
	const [pics, setPics] = useState([]);
	const [id, setId] = useState("1667713");
	const [numberOfResults, setNumberOfResults] = useState(5);
	const unsplash = createApi({
		accessKey: "etGXFY0hREL6d9N2-qPwh4NjNOQdypc1GtS8TBi1nc4",
	});
	useEffect(() => {
		unsplash.collections
			.getPhotos({ collectionId: id, perPage: numberOfResults })
			.then((res) => setPics(res.response.results));
	}, [id, numberOfResults]);

	const date = new Date().getFullYear() ;
	return (
		<div>
			<header id='header'>
				<div id='Navbar'>
					<span className='navBarTxt'>
						<h3>Riddle</h3>
					</span>

					<ul className='NavbarElements'>
						<li className='elementsUL'>
							{" "}
							<a href='url'>Home</a>{" "}
						</li>
						<li className='elementsUL'>
							<a href='url'>About</a>
						</li>
						<li className='elementsUL'>
							<a href='url'>Work</a>
						</li>
						<li className='elementsUL'>
							<a href='url'>Contact</a>
						</li>
					</ul>

					<button id='gitButton'>Get in touch</button>
				</div>
			</header>
			<h1 className='info'>
				I'm a freelance <span className='highlightTxt'>digital designer </span>{" "}
				,<br /> with +10 years of experience
			</h1>
			<br />
			<button
				onClick={() => {
					setId("1667713");
					setNumberOfResults(5);
				}}
				className='footerButton'>
				Skateboard
			</button>
			<button
				onClick={() => {
					setId("4474589");
					setNumberOfResults(5);
				}}
				className='footerButton'>
				Mockups
			</button>
			<button
				onClick={() => {
					setId("44204348");
					setNumberOfResults(5);
				}}
				className='footerButton'>
				Interior
			</button>
			<button
				onClick={() => {
					setId("8240068");
					setNumberOfResults(5);
				}}
				className='footerButton'>
				Pastel
			</button>
			<br />
			<div className='container'>
				{pics.map((pic) => (
					<img
						style={{ width: "500px", height: "400px", padding: "10px" }}
						src={pic.urls.small}
						alt='pic'
					/>
				))}
			</div>

			<button
				onClick={() => setNumberOfResults(numberOfResults + 4)}
				className='load-more footerButton'>
				load more
			</button>
			<footer className='footerElement'>
				<h1>Let's work together</h1>
				<button className='footerButton'>Get in touch</button>

				<ul className='footerList'>
					<li className='flex-items'>
						<a href='url'>
							<i className='fa-brands fa-instagram'></i>
						</a>
					</li>
					<li className='flex-items'>
						<a href='url'>
							<i className='fa-brands fa-linkedin'></i>{" "}
						</a>
					</li>
					<li className='flex-items'>
						<a href='url'>
							<i className='fa-brands fa-twitter'></i>
						</a>
					</li>
					<li className='flex-items'>
						<a href='url'>
							<i className='fa-brands fa-pinterest'></i>
						</a>
					</li>
					<li className='flex-items'>
						<a href='url'>
							<i className='fa-brands fa-facebook'></i>
						</a>
					</li>
				</ul>
				<p>Copyright ©{date} All rights reserved | This template is made with  by <i className="fa-solid fa-heart"></i> Colorlib</p>
			</footer>
		</div>
	);
}

export default App;
