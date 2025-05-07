import React from 'react';

import { autoScrollForElements } from './pragmatic-drag-and-drop/auto-scroll/src/entry-point/element';

import { Board } from './pragmatic-drag-and-drop/auto-scroll/examples/pieces/board';
import { BoardContext, type TBoardContext } from './pragmatic-drag-and-drop/auto-scroll/examples/pieces/board-context';

const context: TBoardContext = {
	autoScrollColumn: autoScrollForElements,
	autoScrollBoard: autoScrollForElements,
};

export default function OverElement() {
	return (
		<BoardContext.Provider value={context}>
			<Board />
		</BoardContext.Provider>
	);
}