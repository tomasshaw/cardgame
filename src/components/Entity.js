import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { CardMedia, Card, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import heroImage from '../images/hero.jpg';

const styles = theme => ({
	root: {
		//width: '100%',
		display: 'flex',
		//margin: 0,
	},
	details: {
		width: '100%',
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
	const {
		id = 0,
		name = '',
		image = heroImage,
		hp = 0,
		maxHp = 0,
		shield = 0,
	} = entity;
	return (
		<Fade in={true}>
			<Card className={classes.root}>
				<CardMedia image={image} className={classes.media} title={name} />
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5">
							{name}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							Health: {hp} / {maxHp}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							Armor: {shield}
						</Typography>
					</CardContent>
				</div>
			</Card>
		</Fade>
	);
}

export default withStyles(styles)(Entity);
