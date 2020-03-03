import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = e => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<Fragment>
					<AppBar title='Enter personal details' />
					<TextField
						hintText='Enter your occupation'
						floatingLabelText='Occupation'
						onChange={handleChange('occupation')}
						defaultValue={values.occupation}
					/>
					<br />
					<TextField
						hintText='Enter your city'
						floatingLabelText='City'
						onChange={handleChange('city')}
						defaultValue={values.city}
					/>
					<br />
					<TextField
						hintText='Enter your bio'
						floatingLabelText='Bio'
						onChange={handleChange('bio')}
						defaultValue={values.bio}
					/>
					<br />
					<RaisedButton
						label='Continue'
						primary={true}
						style={StyleSheet.button}
						onClick={this.continue}
					/>
					<RaisedButton
						label='Back'
						primary={false}
						style={StyleSheet.button}
						onClick={this.back}
					/>
				</Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15
	}
};

export default FormPersonalDetails;
