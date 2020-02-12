import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Fade, Button, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const styles = theme => ({
	root: {
		width: '100%',
		height: '100%',
	},
	endTurnButton: {
		backgroundColor: green[600],
		'&$hover': {
			backgroundColor: green[300],
		},
	},
});

function GameInfo(props) {
	const { classes, playNextTurn, gameState } = props;
	if (Object.keys(gameState).length === 0) {
		return null;
	}
	const { currentTurn, maxTurns } = gameState;
	const endRound = e => {
		e.preventDefault();
		playNextTurn();
	};
	return (
		<Fade in={true}>
			<div className={classes.root}>
				<Button
					elevation={8}
					variant="contained"
					className={classes.endTurnButton}
					onClick={endRound}
				>
					End Turn
				</Button>
				<Typography>
					Turn {currentTurn} of {maxTurns}
				</Typography>
				<Typography>WIP</Typography>
				<Typography>
					TODO: CHECKEAR SI GAME END TURN == GAME CURRENT TURN checkear si
					hpPlayer=0 estas 2 disparan loss checkear si hpMonster=0 triggerea win
					modal da opcion a boton newgame
				</Typography>
			</div>
		</Fade>
	);
}

export default withStyles(styles)(GameInfo);
