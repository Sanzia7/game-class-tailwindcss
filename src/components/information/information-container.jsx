import PropTypes from 'prop-types'
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectCurrentPlayer, selectDraw, selectWin } from '../../selectors';
import { InformationLayout } from './information-layout'



export class Information extends Component {
	render() {
		const {draw, win, currentPlayer } = this.props
		const info = win
			? `Победил: ${currentPlayer} !!!`
			: draw
				? `= Ничья =`
				: `Ходит: ${currentPlayer}`;

		return <InformationLayout info={info} />;
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: selectCurrentPlayer(state),
	draw: selectDraw(state),
	win: selectWin(state),
})

export const InformationContainer = connect(mapStateToProps)(Information)

Information.propTypes = {
	drw: PropTypes.string,
	win: PropTypes.string,
	currentPlayer: PropTypes.string,
};


//..................................................

// import PropTypes from 'prop-types'
// // import { useReduxState } from '../../redux-manager'
// import { useSelector } from 'react-redux';
// import { selectCurrentPlayer, selectDraw, selectWin } from '../../selectors';
// import { InformationLayout } from './information-layout'

// export const InformationContainer = () => {
//
// 	// const {draw, win, currentPlayer } = useReduxState()
//
// 	const currentPlayer = useSelector(selectCurrentPlayer)
// 	const draw = useSelector(selectDraw)
// 	const win = useSelector(selectWin)
//
//
// 	const info = win
// 		? `Победил: ${currentPlayer} !!!`
// 		: draw
// 			? `= Ничья =`
// 			: `Ходит: ${currentPlayer}`;
//
// 	return <InformationLayout info={info} />;
// };
//
// InformationContainer.propTypes = {
// 	drw: PropTypes.string,
// 	win: PropTypes.string,
// 	currentPlayer: PropTypes.string,
// };
