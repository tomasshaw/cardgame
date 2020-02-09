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
	const { setGameState, classes } = props;
	console.log(props);
	useEffect(() => {
		const gameName = localStorage.getItem('user');
		console.log(gameName);
		axios
			.post('http://game.bons.me/api/games', { name: gameName })
			//.post('http://game.bons.me/api/game', { name: props.gameState.name })
			.then(res => {
				//Agregar validaciones
				setGameState(res.data);
				console.log(res.data);
			});
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
