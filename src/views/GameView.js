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

const baseUrl = 'http://game.bons.me/api/';

//function playerReducer(state, action){
//	switch(action.type){
//		case 'addPlayerHealth':
//	}
//}

function GameView(props) {
	const { classes } = props;
	const [gameState, setGameState] = useState({});
	const [player, setPlayer] = useState({});
	const [monster, setMonster] = useState({});
	const [cards, setCards] = useState({});

	useEffect(() => {
		const gameName = localStorage.getItem('user');
		axios.post(baseUrl + 'games/', { name: gameName }).then(res => {
			if (!res.data) return;
			setGameState(res.data);
			getPlayerFromGame(res.data.id);
			getMonsterFromGame(res.data.id);
		});
		return () => localStorage.removeItem('user');
	}, []);

	useEffect(() => {
		getCards(player.id);
	}, [gameState.currentTurn]);

	useEffect(() => {
		if (!!cards) {
			getCards(player.id);
		}
		console.log(player);
	}, [player]);

	useEffect(() => {
		console.log(monster);
	}, [monster]);

	useEffect(() => {
		console.log(cards);
	}, [cards]);

	const playNextTurn = cardId => {
		axios
			.post(baseUrl + 'games/' + gameState.id, { card: cardId })
			.then(res => {
				if (!res.data) return;
				console.log(res.data);
			});
	};

	const getGame = gameId => {
		if (!gameId) return;
		console.log('getGame func');
		axios.get(baseUrl + 'games/' + gameId).then(res => setGameState(res.data));
	};

	const getPlayerFromGame = gameId => {
		console.log('getPlayerFromGame func');
		if (!gameId) return;
		axios.get(baseUrl + 'games/' + gameId + '/player').then(res => {
			if (!res.data) return;
			setPlayer(res.data);
		});
	};

	const getPlayerById = entityId => {
		if (!entityId) return;
		console.log('getPlayerById func');
		axios.get(baseUrl + 'players/' + entityId).then(res => {
			if (!res.data) return;
			setPlayer(res.data);
		});
	};

	const getMonsterFromGame = gameId => {
		if (!gameId) return;
		axios.get(baseUrl + 'games/' + gameId + '/monster').then(res => {
			if (!res.data) return;
			setMonster(res.data);
		});
	};

	const getMonsterById = entityId => {
		if (!entityId) return;
		console.log('getMonsterById func');
		axios.get(baseUrl + 'monsters/' + entityId).then(res => {
			if (!res.data) return;
			setMonster(res.data);
		});
	};

	const getCards = entityId => {
		if (!entityId) return;
		console.log('getCards func');
		axios.get(baseUrl + 'players/' + entityId + '/cards').then(res => {
			if (!res.data) return;
			setCards(res.data);
		});
	};

	return (
		<>
			<Entity entity={monster} />
			<Entity entity={player} />
			{cards.length > 0 &&
				cards.map(card => <GameCard key={card.id} card={card} />)}
			<GameInfo />
		</>
	);
}

export default withStyles(styles)(GameView);
