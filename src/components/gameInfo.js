import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		width: '100%',
	},
});

function GameInfo(props) {
	return (
		<div>
			<p>GameInfo</p>
		</div>
	);
}

export default withStyles(styles)(GameInfo);
