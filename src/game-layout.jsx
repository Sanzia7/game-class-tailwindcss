import { Component } from 'react'
import PropTypes from 'prop-types'
import { FieldContainer, InformationContainer } from './components'
// import style from './game.module.css'

export class GameLayout extends Component {
	render() {
		return (
			<div className="my-7">
				<div className="flex flex-col items-center justify-start">
					<InformationContainer />
					<FieldContainer />
					<button
						className="my-5 bg-amber-700 h-30 w-50 border border-orange-900 rounded-2xl px-4 hover:bg-sky-700 text-slate-100"
						onClick={this.props.handleReset}
					>
						Начать игру
					</button>
				</div>
			</div>
		)
	}

}

GameLayout.propTypes = {
	handleReset: PropTypes.func,
}

//
// export const GameLayout = ({ props }) => {
// 	const { field, currentPlayer, win, draw, handleReset, handleClick } = props
//
// 	return (
// 		<div className={style.container}>
// 			<div className={style.game}>
// 				<InformationContainer
// 					currentPlayer={currentPlayer}
// 					draw={draw}
// 					win={win}
// 				/>
// 				<FieldContainer
// 					field={field}
// 					onClick={handleClick}
// 				/>
// 				<button
// 					className={style.reset}
// 					onClick={handleReset}
// 				>
// 					Начать заново
// 				</button>
// 			</div>
// 		</div>
// 	)
//}
//
// GameLayout.propTypes = {
// 	field: PropTypes.array,
// 	currentPlayer: PropTypes.string,
// 	win: PropTypes.string,
// 	draw: PropTypes.string,
// 	handleReset: PropTypes.func,
// 	handleClick: PropTypes.func,
// }
