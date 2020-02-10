import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
	root: {
		width: '100%',
		height: '100%',
	},
});

function GameInfo(props) {
	const { classes } = props;
	return (
		<Fade in={true}>
			<div className={classes.root}>
				<p>GameInfo</p>
			</div>
		</Fade>
	);
}

export default withStyles(styles)(GameInfo);
