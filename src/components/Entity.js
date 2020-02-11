import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { CardMedia, Card, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import heroImage from '../images/hero.jpg';

const styles = theme => ({
	root: {
		display: 'flex',
		border: '1px solid rgba(0, 0, 0, 0.3)',
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
	nameOf: {
		textShadow: '0 2px 4px rgba(0,0,0,.5)',
	},
});

function Entity(props) {
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
			<Card elevation={5} className={classes.root}>
				<CardMedia image={image} className={classes.media} title={name} />
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5" className={classes.nameOf}>
							{name.charAt(0).toUpperCase() + name.slice(1)}
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
