import React from 'react';

/* 
const App = props => {
  return(
		<h1>Hello {props.name}!</h1>
  );    
}; 
*/

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			placeholder: 'Type Here...',
			isLoaded: false
		};
	}

	handleChange = e => {
		this.setState({
			text: e.target.value
		});
	}

	handleIsLoaded = () => {
		this.setState({
			isLoaded: true
		});
	}

	handleButtonClick = e => {
		e.preventDefault();
		console.log(this.state.text);
		this.setState({
			text: ''
		});
	}

	// componentDidMount = e => {
	// 	this.setState({
	// 		isLoaded: true
	// 	});
	// }
	
	render() {
		if (this.state.isLoaded) {
			return (
				<>
					<main className="container">
						<section className="row flex-column align-items-center my-5">
							<form className="p-3 shadow col-xs-6 rounded-sm">
								<div className="form-row justify-content-around">
									<input
										value={this.state.text}
										onChange={this.handleChange}
										type="text"
										className="form-control col-8 shadow-sm"
										placeholder={this.state.placeholder}
									/>
									<button type="submit" onClick={this.handleButtonClick} className="btn btn-primary shadow-sm">Submit</button>
								</div>
							</form>
							<h1 className="text-center my-3">Hello, {this.props.name}! {this.state.text}</h1>
						</section>
					</main>
				</>
			);
		} else {
			return (
				<>
					<main className="container">
						<section className="row flex-column align-items-center my-5">
							<button type="submit" onClick={this.handleIsLoaded} className="btn btn-primary shadow-sm">Click Me!</button>
							<h1 className="text-center my-3">Loading...</h1>
						</section>
					</main>
				</>
			);
		}
	}	
}

export default App;