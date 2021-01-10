import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

const SimpleCounter = props => {
	return (
		<React.Fragment>
			<div className="bigCounter">
				<div className="clock">
					<i className="far fa-clock" />
				</div>
				<div className="six">{props.NumberSix % 10}</div>
				<div className="five">{props.NumberFive % 10}</div>
				<div className="four">{props.NumberFour % 10}</div>
				<div className="three">{props.NumberThree % 10}</div>
				<div className="two">{props.NumberTwo % 10}</div>
				<div className="one">{props.NumberOne % 10}</div>
			</div>
		</React.Fragment>
	);
};
SimpleCounter.propTypes = {
	NumberOne: PropTypes.number,
	NumberTwo: PropTypes.number,
	NumberThree: PropTypes.number,
	NumberFour: PropTypes.number,
	NumberFive: PropTypes.number,
	NumberSix: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	ReactDOM.render(
		<SimpleCounter
			NumberOne={one}
			NumberTwo={two}
			NumberThree={three}
			NumberFour={four}
			NumberFive={five}
			NumberSix={six}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
