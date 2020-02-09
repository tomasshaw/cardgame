import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		width: '100%',
	},
});

function GameCard(props) {
	console.log(props);
	return (
		<div>
			<p>GameCard</p>
		</div>
	);
}

export default withStyles(styles)(GameCard);
