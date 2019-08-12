import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
	width: '100%',
	height: '100%'
}

class MapContainer extends Component {
	render(){
		return(
			<div>
			<Map
				google={this.props.google}
				zoom={10}
				style={mapStyles}
				initialCenter={{
					lat: 39.738449, 
					lng: -104.984848
				}}>

			</Map>
			</div>
			);
	}
}


export default GoogleApiWrapper({
	apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(MapContainer);




// class EmployeeShow extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			name: '',
// 			id: '',
// 			twitter: {
// 				name: '',
// 				tweet: '',
// 				date: ''
// 			}
// 		}
// 	}

// 	getTweets = async () => {
// 		try {
// 			const tweets = await fetch('https://api.twitter.com/1.1/search/tweets.json');
// 			const tweetsJson = await tweets.json();
// 			return tweetsJson;
// 		} catch(err) {
// 			console.log(err, 'getTweets err');
// 			return err;
// 		}
// 	}

// 	componentDidMount() {
// 		this.getTweets()
// 			.then((data) => {
// 				console.log(data, "data");
// 				this.setState({
// 					twitter: data
// 				})
// 			})
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<TweetList getTweets={this.getTweets} />
// 				<button>Get Tweets</button>
// 			</div>
// 			)
// 	}
// }

// export default EmployeeShow;