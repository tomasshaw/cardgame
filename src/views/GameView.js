import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Entity from '../components/Entity';
import GameCard from '../components/gameCard';
import GameInfo from '../components/gameInfo';
import axios from 'axios';
import { Divider } from '@material-ui/core';
import backgroundGameImage from '../images/gameBackground.jpg';

const styles = theme => ({
	gameRoot: {
		//backgroundColor: 'rgba(242, 195, 85, 0.3)',
		backgroundImage: `url(${backgroundGameImage})`,
		backgroundPositionX: '50%',
		backgroundPositionY: 'center',
		backgroundColor: 'rgb(241, 212, 171)',

		padding: theme.spacing(4),
		width: '75%',
		maxWidth: '600px',
		margin: 'auto',
		marginTop: theme.spacing(3),
		border: '5px solid rgba(0,0,0, 0.3)',
		borderRadius: '10px',
		//border: '4px solid rgba(163, 142, 113, 0.5)',
	},
	notCardsWrapper: {},
	cardsWrapper: {
		marginTop: theme.spacing(2),
	},
	entityWrapper: {},
	gameInfoWrapper: {},
});

function Entities({ player, monster }) {
	if (Object.keys(player).length === 0 || Object.keys(monster).length === 0) {
		return null;
	}
	return (
		<>
			<Grid item>
				<Entity monster entity={monster} />
			</Grid>
			<div style={{ marginTop: '3px', marginBottom: '3px' }} />
			<Grid item>
				<Entity player entity={player} />
			</Grid>
		</>
	);
}

const baseUrl = 'http://game.bons.me/api/';

function GameView(props) {
	const { classes } = props;
	const [gameState, setGameState] = useState({});
	const [player, setPlayer] = useState({});
	const [monster, setMonster] = useState({});
	const [cards, setCards] = useState({});
	const [chosenCardId, setChosenCardId] = useState('');
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		const gameName = localStorage.getItem('user');
		axios.post(baseUrl + 'games/', { name: gameName }).then(res => {
			if (!res.data) return;
			getAllInfo(res.data);
		});
		return () => localStorage.removeItem('user');
	}, []);

	useEffect(() => {
		getCards(player.id);
	}, [gameState.currentTurn]);

	useEffect(() => {
		if (Object.keys(cards).length === 0) {
			getCards(player.id);
		}
	}, [player]);

	useEffect(() => {}, [monster]);

	useEffect(() => {}, [cards]);

	const getAllInfo = data => {
		setGameState(data);
		getPlayerFromGame(data.id);
		getMonsterFromGame(data.id);
	};

	const sendCard = cardId => {
		if (!cardId || cardId.length == 0 || !cardId.trim()) {
			console.log('cardId no valido', cardId);
			return;
		}
		console.log(cardId);
		setChosenCardId(cardId);
	};

	const checkEnemyAttack = effect => {
		console.log(effect);
	};

	const playNextTurn = () => {
		const cartaElegida = chosenCardId;
		console.log('jugaste carta', cartaElegida);
		setChosenCardId('');
		setDisabled(true);
		axios
			.post(baseUrl + 'games/' + gameState.id + '/next-turn', {
				card: cartaElegida,
			})
			.then(res => {
				if (!res.data) return;
				console.log(res.data);
				checkEnemyAttack(res.data.monsterEffect);
				getAllInfo(res.data.game);
				setDisabled(false);
			});
	};

	const getGame = gameId => {
		if (!gameId) return;
		axios.get(baseUrl + 'games/' + gameId).then(res => setGameState(res.data));
	};

	const getPlayerFromGame = gameId => {
		if (!gameId) return;
		axios.get(baseUrl + 'games/' + gameId + '/player').then(res => {
			if (!res.data) return;
			setPlayer(res.data);
		});
	};

	const getPlayerById = entityId => {
		if (!entityId) return;
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
		axios.get(baseUrl + 'monsters/' + entityId).then(res => {
			if (!res.data) return;
			setMonster(res.data);
		});
	};

	const getCards = entityId => {
		if (!entityId) return;
		axios.get(baseUrl + 'players/' + entityId + '/cards').then(res => {
			if (!res.data) return;
			console.log(res.data);
			setCards(res.data);
		});
	};

	return (
		<>
			<Grid
				container
				justify="center"
				alignItems="center"
				direction="column"
				className={classes.gameRoot}
				spacing={2}
			>
				<Grid
					container
					justify="center"
					alignItems="flex-start"
					direction="row"
					className={classes.notCardsWrapper}
				>
					<Grid
						container
						item
						direction="column"
						xs={8}
						className={classes.entityWrapper}
					>
						<Entities player={player} monster={monster} />
					</Grid>
					<Grid
						container
						item
						xs={4}
						justify="center"
						alignItems="center"
						className={classes.gameInfoWrapper}
					>
						<Grid item>
							<GameInfo playNextTurn={playNextTurn} />
						</Grid>
					</Grid>
				</Grid>
				<Grid
					container
					justify="center"
					alignItems="center"
					className={classes.cardsWrapper}
					spacing={1}
				>
					{cards.length > 0 &&
						cards.map(card => (
							<Grid item key={card.id} xs={4}>
								<GameCard
									card={card}
									sendCard={sendCard}
									chosenCardId={chosenCardId}
									disabled={disabled}
								/>
							</Grid>
						))}
				</Grid>
			</Grid>
		</>
	);
}

export default withStyles(styles)(GameView);
