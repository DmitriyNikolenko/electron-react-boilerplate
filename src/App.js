import React from 'react'
import ReactDOM from 'react-dom'
import logo from './images/logo.svg'
import './App.css'


/**	Main application component.
 * 	@return {React.Component} React application.
 */
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="App-intro">
				To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'))