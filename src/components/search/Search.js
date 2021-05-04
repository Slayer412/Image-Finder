import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import { SelectField } from 'material-ui';
import axios from 'axios';
import ImageResult from '../image-result/ImageResult';

class Search extends Component {
	state = {
		searchText: '',
		amount: 15,
		apiurl: 'https://pixabay.com/api/',
		apikey: '21457368-56eaa7eca6b62ce5aa5522916',
		images: []
	};

	onAmountChange = (e, index, value) => {
		this.setState({ amount: value });
	};

	onTextChange = (e) => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			axios
				.get(
					`${this.state.apiurl}/?key=${this.state.apikey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
				)
				.then((res) => this.setState({ images: res.data.hits }))
				.catch((err) => console.log(err));
		});
	};

	render() {
		console.log(this.state.images);
		return (
			<div>
				<TextField
					name="searchText"
					value={this.state.searchText}
					onChange={this.onTextChange}
					floatingLabelText="Search For Images"
					fullWidth={true}
				/>
				<br />
				<SelectField
					name="amount"
					floatingLabelText="Amount"
					value={this.state.amount}
					onChange={this.onAmountChange}
				>
					<MenuItem value={5} primaryText="05"></MenuItem>
					<MenuItem value={10} primaryText="10"></MenuItem>
					<MenuItem value={15} primaryText="15"></MenuItem>
					<MenuItem value={30} primaryText="30"></MenuItem>
					<MenuItem value={50} primaryText="50"></MenuItem>
				</SelectField>
				<br />
				{this.state.images.length > 0 ? <ImageResult images={this.state.images} /> : null}
			</div>
		);
	}
}

export default Search;
