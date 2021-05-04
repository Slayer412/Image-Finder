import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function App() {
	return (
		<MuiThemeProvider>
			<div>
				<Navbar />
				<Search />
			</div>
		</MuiThemeProvider>
	);
}

export default App;
