import PropTypes from 'prop-types'
import { GetPath } from '../../utils/get-path'
// import style from './field.module.css'
import { Component } from 'react'

export class FieldLayout extends Component {
	render() {
		const { field, onClick } = this.props
		return (
				<div className="grid grid-cols-3 gap-2.5 p-4 border border-green-950 bg-teal-700 rounded-md">
					{field.map((cell, idxCell) => (
						<button
							key={idxCell}
							className="bg-cyan-400 h-40 w-40 border border-violet-950 rounded-md text-7xl flex items-center justify-center"
							onClick={() => onClick(idxCell)}
						>
							{cell && GetPath(cell)}
						</button>
					))}
				</div>
		)
	}
}

//w-24 h-24 border border-blue-900 text-5xl flex items-center justify-center
FieldLayout.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
}
