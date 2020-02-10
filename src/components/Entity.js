import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

const styles = theme => ({
	root: {
		width: '100px',
		margin: 0,
	},
});

function Entity(props) {
	const { classes } = props;
	return (
		<Fade in={true}>
			<div className={classes.root}>
				<p>Entity</p>
			</div>
		</Fade>
	);
}

export default withStyles(styles)(Entity);
