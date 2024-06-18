import PropTypes from 'prop-types'
import { Component } from 'react';
import { connect } from 'react-redux'
import { selectCurrentPlayer, selectDraw, selectField, selectWin } from '../../selectors';
import { setCurrentPlayer, setDraw, setField, setWin } from '../../actions'
import * as check from '../../utils/check'
import { FieldLayout } from './field-layout'

export class Field extends Component {
	constructor (props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(idxCell) {
		const { field, currentPlayer, draw, win, dispatch } = this.props

		if (field[idxCell] || win || draw) return;

		const newField = field.map((cell, idx) => (idx === idxCell ? currentPlayer : cell))
		dispatch(setField(newField))

		if (check.isWin(newField, currentPlayer)) {
			dispatch(setWin(true))
			return
		}
		if (check.isDraw(newField)) {
			dispatch(setDraw(true))
			return
		}

		const newCurrentPlayer = currentPlayer === 'X' ? 'O' : 'X'
		dispatch(setCurrentPlayer(newCurrentPlayer))
	}

	render() {

		return <FieldLayout
			field={this.props.field}
			onClick={this.handleClick} />
	}
}

const mapStateProps = (state) => ({
	field: selectField(state),
	currentPlayer: selectCurrentPlayer(state),
	draw: selectDraw(state),
	win: selectWin(state),
})

export const FieldContainer = connect(mapStateProps)(Field)

FieldContainer.propTypes = {
	field: PropTypes.array,
	drw: PropTypes.string,
	win: PropTypes.string,
	currentPlayer: PropTypes.string,
	dispatch: PropTypes.func.isRequired,
}


//.....................................................

// export const FieldContainer = () => {
// 	//const { field, currentPlayer, win, draw } = useReduxState()
//
// 	const field = useSelector(selectField)
// 	const currentPlayer = useSelector(selectCurrentPlayer)
// 	const draw = useSelector(selectDraw)
// 	const win = useSelector(selectWin)
//
// 	const dispatch = useDispatch()
//
//
// 	const handleClick = (idxCell) => {
// 		if (field[idxCell] || win || draw) return;
//
// 		const newField = field.map((cell, idx) => (idx === idxCell ? currentPlayer : cell))
// 		dispatch(setField(newField))
//
// 		if (check.isWin(newField, currentPlayer)) {
// 			dispatch(setWin(true))
// 			return
// 		}
// 		if (check.isDraw(newField)) {
// 			dispatch(setDraw(true))
// 			return
// 		}
//
// 		const newCurrentPlayer = currentPlayer === 'X' ? 'O' : 'X'
// 		dispatch(setCurrentPlayer(newCurrentPlayer))
// 	}
//
// 	return <FieldLayout field={field} onClick={handleClick} />
//
// }

//.......................................................

	//export const Game = () => {
	//const [field, setField] = useState(initilalField);
	// const [currentPlayer, setCurrentPlayer] = useState('X');
	// const [win, setWin] = useState(false);
	// const [draw, setDraw] = useState(false);

// 	const handleClick = (idxCell) => {
// 		if (field[idxCell] || win || draw) return;
//
// 		const newField = field.map((cell, idx) => (idx === idxCell ? currentPlayer : cell));
//
// 		setField(newField);
//
// 		if (check.isWin(newField, currentPlayer)) {
// 			setWin(true);
// 			return;
// 		}
// 		if (check.isDraw(newField)) {
// 			setDraw(true);
// 			return;
// 		}
//
// 		setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
// 	};

	// const handleReset = () => {
	// 	setField(initilalField);
	// 	setWin(false);
	// 	setDraw(false);
	// 	setCurrentPlayer('X');
	// };

// 	return (
// 		<GameLayout
// 			props={{ handleReset, handleClick }}
// 		/>
// 	);
// };
