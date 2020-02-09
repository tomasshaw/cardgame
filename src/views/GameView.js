import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Entity from '../components/Entity';
import GameCard from '../components/gameCard';
import GameInfo from '../components/gameInfo';
import axios from 'axios';

const styles = theme => ({
	root: {
		width: '100%',
	},
});

function GameView(props) {
	console.log(props);
	useEffect(() => {
		axios
			.post('http://game.bons.me/api/games', { name: 'testeoHardcodeado' })
			//.post('http://game.bons.me/api/game', { name: props.gameState.name })
			.then(res => console.log(res.data));
	}, []);
	return (
		<>
			<Entity />
			<GameCard />
			<GameInfo />
		</>
	);
}

export default withStyles(styles)(GameView);
