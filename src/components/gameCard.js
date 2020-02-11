import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, SvgIcon, Slide } from '@material-ui/core';
import { Security, Favorite } from '@material-ui/icons';

const styles = theme => ({
	'@-webkit-keyframes action': {
		'0%': { transform: 'translateY(0)' },
		'100%': { transform: 'translateY(-10px)' },
	},
	'@keyframes action': {
		'0%': { transform: 'translateY(0)' },
		'100%': { transform: 'translateY(-10px)' },
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: 'auto',
			marginTop: theme.spacing(5),
			width: theme.spacing(16),
			height: theme.spacing(20),
		},
		animationName: '$action',
		animationDuration: '0.75s',
		animationTimingFunction: 'ease-out',
		animationIterationCount: 'infinite',
		animationDirection: 'alternate-reverse',
	},
	cardDiv: {},
	paperDiv: {
		border: '2px solid rgba(0, 0, 0, 0.5)',
	},
});

function CardIcon({ effect }) {
	switch (effect) {
		case 'SHIELD':
			return <Security />;
		case 'HEAL':
			return <Favorite />;
		case 'DAMAGE':
			return (
				<SvgIcon viewBox="0 0 1024 1024">
					<path d="M 295.253 213.333 L 213.333 213.333 L 597.333 597.333 L 640 557.227 M 851.627 815.787 L 815.787 851.627 C 799.147 868.267 772.267 868.267 755.627 851.627 L 622.507 718.507 L 508.16 832 L 448 771.84 L 508.587 711.253 L 128 330.667 L 128 128 L 330.667 128 L 711.253 508.587 L 771.84 448 L 832 508.16 L 718.08 622.08 L 851.2 755.2 C 868.267 772.267 868.267 799.147 851.627 815.787 Z" />
				</SvgIcon>
			);
		default:
			console.warn('Atento entro carta falopa');
			return null;
	}
}

function GameCard(props) {
	const { classes, card } = props;
	const { value, effect, id } = card;

	const onPlayCard = () => {
		alert(`jugaste carta de ${effect}, haciendo ${value}`);
	};

	return (
		<Slide direction="up" in={true} mountOnEnter unmountOnExit>
			<div className={classes.root}>
				<Paper elevation={8} onClick={onPlayCard} className={classes.paperDiv}>
					<div className={classes.cardDiv}>
						<Typography variant="h3">{value}</Typography>
						<br />
						<CardIcon effect={effect} />
					</div>
				</Paper>
			</div>
		</Slide>
	);
}

export default withStyles(styles)(GameCard);
