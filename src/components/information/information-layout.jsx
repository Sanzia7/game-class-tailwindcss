import PropTypes from 'prop-types';
import { Component } from 'react';
// import style from './information.module.css';

export class InformationLayout extends Component {
	render() {
		return <div className="items-center my-3 text-red-500">{this.props.info}</div>
	}
}

InformationLayout.propTypes = {
	status: PropTypes.string,
};
