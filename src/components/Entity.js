import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		width: '100%',
	},
});

function Entity(props) {
	return (
		<div>
			<p>Entity</p>
		</div>
	);
}

export default withStyles(styles)(Entity);
