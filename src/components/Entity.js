import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { CardMedia, Card, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const styles = theme => ({
	root: {
		//width: '100%',
		display: 'flex',
		//margin: 0,
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	media: {
		//height: 140,
		width: 150,
	},
});

function Entity(props) {
	console.log(props);
	const { classes, entity } = props;
	const { name, image } = entity;
	console.log(image);
	return (
		<Fade in={true}>
			<Card className={classes.root}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5">
							{name}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							Health
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							Armor
						</Typography>
					</CardContent>
				</div>
				{!!image && (
					<CardMedia image={image} className={classes.media} title={name} />
				)}
			</Card>
		</Fade>
	);
}

export default withStyles(styles)(Entity);
