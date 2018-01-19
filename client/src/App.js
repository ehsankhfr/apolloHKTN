import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
	ApolloClient,
	gql,
	graphql,
	ApolloProvider,
} from 'react-apollo';

const client = new ApolloClient();

const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;
const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

const ChannelsList = ({ data: {loading, error, channels }}) => {
	if (loading) {
		return <p>Loading ...</p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}
	return <ul>
		{ channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
	</ul>;
};


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Appolo</h1>
				</header>

				<ChannelsList />

			</div>
		);
	}
}

export default App;
