import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Fade, Button } from '@material-ui/core';
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
	const { classes, playNextTurn } = props;
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
					//color="primary"
				>
					End Turn
				</Button>
			</div>
		</Fade>
	);
}

export default withStyles(styles)(GameInfo);
