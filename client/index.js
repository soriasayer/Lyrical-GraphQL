import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import SongList from './components/SongList'
import CreateSong from './components/CreateSong'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <HashRouter>
          <Route exact path="/" component={SongList}/>
          <Route exact path='/song/new' component={CreateSong}/>
        </HashRouter>
      </div>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);


