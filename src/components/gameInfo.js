import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Fade, Button, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const styles = theme => ({
	root: {
		padding: theme.spacing(1),
		border: '2px solid rgba(0, 0, 0, 0.1)',
		borderRadius: '5px',
		width: '100%',
		height: '100%',
	},
	endTurnButton: {
		backgroundColor: green[600],
		'&$hover': {
			backgroundColor: green[300],
		},
	},
	text: {
		textShadow: '0 2px 4px rgba(0,0,0,.5)',
		color: 'black',
	},
});

function GameInfo(props) {
	const { classes, playNextTurn, gameState, disabled } = props;
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
				<Typography className={classes.text}>Turn</Typography>
				<Typography variant="h4" className={classes.text}>
					{currentTurn}
				</Typography>
				<Typography className={classes.text}>of</Typography>
				<Typography variant="h4" className={classes.text}>
					{maxTurns}
				</Typography>
				<br />
				<Button
					disabled={disabled}
					elevation={8}
					variant="contained"
					className={classes.endTurnButton}
					onClick={endRound}
				>
					End Turn
				</Button>
			</div>
		</Fade>
	);
}

export default withStyles(styles)(GameInfo);
