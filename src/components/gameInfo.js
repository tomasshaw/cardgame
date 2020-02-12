import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Fade, Button, Typography } from '@material-ui/core';
import { green, lime } from '@material-ui/core/colors';

const styles = theme => ({
	root: {
		//justifyContent: 'space-around',
		padding: theme.spacing(1),
		border: '2px solid rgba(0, 0, 0, 0.1)',
		borderRadius: '5px',
		width: '100%',
		height: '100%',
	},
	endTurnButton: {
		backgroundColor: lime[600],
		'&:hover': {
			backgroundColor: lime[300],
		},
		border: '2px solid rgba(0,0,0, 0.3)',
		width: 120,
		height: 45,
		//minWidth: 110,
	},
	sendCardButton: {
		backgroundColor: green[600],
		'&:hover': {
			backgroundColor: green[300],
		},
		border: '1px solid rgba(0,0,0, 0.3)',
		width: 120,
		height: 45,
	},
	text: {
		textShadow: '0 2px 4px rgba(0,0,0,.5)',
		color: 'black',
	},
});

function GameInfo(props) {
	const { classes, playNextTurn, gameState, disabled, cardSelected } = props;
	if (Object.keys(gameState).length === 0) {
		return null;
	}
	const { currentTurn, maxTurns } = gameState;
	const cardIsSelected = cardSelected.length !== 0;
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
					className={
						cardIsSelected ? classes.sendCardButton : classes.endTurnButton
					}
					onClick={endRound}
				>
					{cardIsSelected ? 'Send Card' : 'End Turn'}
				</Button>
			</div>
		</Fade>
	);
}

export default withStyles(styles)(GameInfo);
