window.onload = function () {
    const Cards = {
        cardsAlphabet: [
            {
                id: 1,
                img: 'img/alphabet/abc-1.png',
            },
            {
                id: 2,
                img: 'img/alphabet/abc-2.png',
            },
            {
                id: 3,
                img: 'img/alphabet/abc-3.png',
            },
            {
                id: 4,
                img: 'img/alphabet/abc-4.png',
            },
            {
                id: 5,
                img: 'img/alphabet/abc-5.png',
            },
            {
                id: 6,
                img: 'img/alphabet/abc-6.png',
            },
            {
                id: 7,
                img: 'img/alphabet/abc-7.png',
            },
            {
                id: 8,
                img: 'img/alphabet/abc-8.png',
            },
            {
                id: 9,
                img: 'img/alphabet/abc-9.png',
            },
            {
                id: 10,
                img: 'img/alphabet/abc-10.png',
            },
            {
                id: 11,
                img: 'img/alphabet/abc-11.png',
            },
            {
                id: 12,
                img: 'img/alphabet/abc-12.png',
            },
            {
                id: 13,
                img: 'img/alphabet/abc-13.png',
            },
            {
                id: 14,
                img: 'img/alphabet/abc-14.png',
            },
            {
                id: 15,
                img: 'img/alphabet/abc-15.png',
            },
            {
                id: 16,
                img: 'img/alphabet/abc-16.png',
            },
            {
                id: 17,
                img: 'img/alphabet/abc-17.png',
            },
            {
                id: 18,
                img: 'img/alphabet/abc-18.png',
            },
            {
                id: 19,
                img: 'img/alphabet/abc-19.png',
            },
            {
                id: 20,
                img: 'img/alphabet/abc-20.png',
            },
        ],
        cardsAnimal: [
            {
                id: 1,
                img: 'img/animal/animal-1.png',
            },
            {
                id: 2,
                img: 'img/animal/animal-2.png',
            },
            {
                id: 3,
                img: 'img/animal/animal-3.png',
            },
            {
                id: 4,
                img: 'img/animal/animal-4.png',
            },
            {
                id: 5,
                img: 'img/animal/animal-5.png',
            },
            {
                id: 6,
                img: 'img/animal/animal-6.png',
            },
            {
                id: 7,
                img: 'img/animal/animal-7.png',
            },
            {
                id: 8,
                img: 'img/animal/animal-8.png',
            },
            {
                id: 9,
                img: 'img/animal/animal-9.png',
            },
            {
                id: 10,
                img: 'img/animal/animal-10.png',
            },
            {
                id: 11,
                img: 'img/animal/animal-11.png',
            },
            {
                id: 12,
                img: 'img/animal/animal-12.png',
            },
            {
                id: 13,
                img: 'img/animal/animal-13.png',
            },
            {
                id: 14,
                img: 'img/animal/animal-14.png',
            },
            {
                id: 15,
                img: 'img/animal/animal-15.png',
            },
            {
                id: 16,
                img: 'img/animal/animal-16.png',
            },
            {
                id: 17,
                img: 'img/animal/animal-17.png',
            },
            {
                id: 18,
                img: 'img/animal/animal-18.png',
            },
            {
                id: 19,
                img: 'img/animal/animal-19.png',
            },
            {
                id: 20,
                img: 'img/animal/animal-20.png',
            },
        ],
        cardsArchitecture: [
            {
                id: 1,
                img: 'img/architecture/architecture-1.png',
            },
            {
                id: 2,
                img: 'img/architecture/architecture-2.png',
            },
            {
                id: 3,
                img: 'img/architecture/architecture-3.png',
            },
            {
                id: 4,
                img: 'img/architecture/architecture-4.png',
            },
            {
                id: 5,
                img: 'img/architecture/architecture-5.png',
            },
            {
                id: 6,
                img: 'img/architecture/architecture-6.png',
            },
            {
                id: 7,
                img: 'img/architecture/architecture-7.png',
            },
            {
                id: 8,
                img: 'img/architecture/architecture-8.png',
            },
            {
                id: 9,
                img: 'img/architecture/architecture-9.png',
            },
            {
                id: 10,
                img: 'img/architecture/architecture-10.png',
            },
            {
                id: 11,
                img: 'img/architecture/architecture-11.png',
            },
            {
                id: 12,
                img: 'img/architecture/architecture-12.png',
            },
            {
                id: 13,
                img: 'img/architecture/architecture-13.png',
            },
            {
                id: 14,
                img: 'img/architecture/architecture-14.png',
            },
            {
                id: 15,
                img: 'img/architecture/architecture-15.png',
            },
            {
                id: 16,
                img: 'img/architecture/architecture-16.png',
            },
            {
                id: 17,
                img: 'img/architecture/architecture-17.png',
            },
            {
                id: 18,
                img: 'img/architecture/architecture-18.png',
            },
            {
                id: 19,
                img: 'img/architecture/architecture-19.png',
            },
            {
                id: 20,
                img: 'img/architecture/architecture-20.png',
            },
        ],
    };

    const remove = (content) => {
        content.classList.add('remove');
    };

    const add = (content) => {
        content.classList.add('add');
    };

    const removeAddContent = (content) => {
        content.classList.toggle('remove');
    };

    const buttonPlay = document.getElementById('button__play');
    const buttonStart = document.getElementById('button__start');
    const buttonNewGame = document.getElementById('button__new__game');

    const rulesGame = document.getElementById('rules__game');
    const formRegistration = document.getElementById('form-registration');
    const contentStartGame = document.getElementById('start__game');
    const gameManagement = document.getElementById('game__management');
    const gameStartContent = document.getElementById('game__start__content');

    const cardsSelectHeading = document.getElementById('cards__select__heading');
    const cardsSelect = document.getElementById('cards__select');
    const difficultySelectHeading = document.getElementById('difficulty__select__heading');
    const difficultySelect = document.getElementById('difficulty__select');

    const disabledElement = document.getElementById('disabled');
    const addContent = document.getElementById('add__content');
    const container = document.getElementById('container');

    buttonPlay.addEventListener('click', (evt) => {
        remove(rulesGame);
        removeAddContent(gameManagement);
        removeAddContent(contentStartGame);
    });

    cardsSelectHeading.addEventListener('click', (evt) => {
        removeAddContent(cardsSelect);
    });

    difficultySelectHeading.addEventListener('click', (evt) => {
        removeAddContent(difficultySelect);
    });

    // Shuffle array function

    function shuffle(o) {
        for (let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    // Game constructor for cards

    class Card {
        constructor(id, img) {
            this.id = id;
            this.img = img;
        }
    }

    /*= = TIMER: create, add and remove == */

    let timer;
    let currentTime;

    const createTimer = () => {
        const startTimer = new Date().getTime();
        // Update the timer every second
        timer = setInterval(() => {
            const now = new Date().getTime();
            const passed = now - startTimer;
            const minutes = Math.floor((passed % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((passed % (1000 * 60)) / 1000);
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }
            currentTime = `${minutes}:${seconds}`;
            addContent.textContent = `Timer:  ${currentTime}`;
        }, 1000);
    };

    // remove timer
    const clearTimer = () => {
        clearInterval(timer);
    };

    /*= = PLAYER: set player in localStorage, get players and add record information  == */

    class Player {
        constructor(firstName, lastName, email, record) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.record = record || 0;
        }
    }

    const players = [];
    let oldPlayers;

    function setPlayers(o) {
        localStorage.setItem('player', JSON.stringify(o));
        return false;
    }

    function getPlayers() {
        oldPlayers = JSON.parse(localStorage.getItem('player')) || [];
        console.log(oldPlayers);
        return oldPlayers;
    }

    function addToPlayer() {
        const playerInfo = document.querySelectorAll('#firstName, #lastName, #email');
        const newPlayer = new Player(playerInfo[0].value, playerInfo[1].value, playerInfo[2].value, currentTime);
        getPlayers();
        const res = players.concat(newPlayer, ...oldPlayers);
        setPlayers(res);
        return res;
    }

    let playersGame;

    const getRatingPlayers = () => {
        playersGame = JSON.parse(localStorage.getItem('player'));
        return playersGame;
    };

    getRatingPlayers();

    const addPlayersToGame = () => {

        getRatingPlayers();
        const allPlayers = playersGame.length;

        const containerPlayers = document.createElement('div');
        containerPlayers.id = 'table__players';
        containerPlayers.className = 'table__players';
        container.appendChild(containerPlayers);

        const table = document.createElement('table');

        const nameTable = document.createElement('caption');
        nameTable.textContent = 'Highscore table';
        table.appendChild(nameTable);

        const titleTr = document.createElement('tr');
        table.appendChild(titleTr);

        for (var key in new Player()) {
            const titleTh = document.createElement('th');
            titleTh.textContent = key;
            titleTr.appendChild(titleTh);
        }
        for (let i = 0; i < allPlayers + 1; i++) {
            const tableLine = document.createElement('tr');
            for (var key in playersGame[i]) {
                const tableCell = document.createElement('td');
                tableCell.textContent = playersGame[i][key];
                tableLine.appendChild(tableCell);
            }
            table.appendChild(tableLine);
        }
        containerPlayers.appendChild(table);
    };

    /*= = Play Game == */

    let tile1 = '';
    let tile2 = '';
    let card1 = '';
    let card2 = '';
    let card1id = '';
    let card2id = '';
    let card1flipped = false;
    let card2flipped = false;
    let flippedCards = 0;

    const cardsReset = function () {
        tile1 = '';
        tile2 = '';
        card1 = '';
        card2 = '';
        card1id = '';
        card2id = '';
        card1flipped = false;
        card2flipped = false;
    };

    const cadsNoMatch = function (tile1, tile2) {
        window.setTimeout(() => {
            tile1.classList.remove('flipped');
            tile2.classList.remove('flipped');
            cardsReset();
        }, 1000);
    };

    const clearGame = function () {
        const gameCardsRemove = document.getElementById('game__play');
        if (gameCardsRemove.childNodes.length !== 0) {
            gameCardsRemove.parentNode.removeChild(gameCardsRemove);
        }
    };

    // If you win, we reset the data, the field, and add table with players.

    const winGame = function () {
        clearTimer();
        addContent.textContent = `Congratulations!!! You have opened all the cards for ${currentTime} time.`;
        choiceCards = '';
        choiceLevel = 0;
        flippedCards = 0;
        addToPlayer();
        removeAddContent(buttonNewGame);
        addPlayersToGame();
    };


    // Realization of actions when choosing a card:
    // 1) opening
    // 2) animation
    // 3) comparison
    // 4) closing
    // 5) delete

    const playGameEvents = (tile) => {
        tile.addEventListener('click', (e) => {
            if (!tile.classList.contains('flipped')) {
                if (card1flipped === false && card2flipped === false) {
                    tile1 = tile;
                    tile1.classList.add('flipped');
                    card1 = tile1.lastChild.lastChild;
                    card1id = card1.getAttribute('id');
                    card1flipped = true;
                } else if (card1flipped === true && card2flipped === false) {
                    tile2 = tile;
                    tile2.classList.add('flipped');
                    card2 = tile2.lastChild.lastChild;
                    card2id = card2.getAttribute('id');
                    card2flipped = true;
                    if (card1id === card2id) {
                        card1.classList.add('removeCard');
                        card2.classList.add('removeCard');
                        flippedCards += 2;
                        cardsReset();
                        if (flippedCards === choiceLevel) {
                            clearGame();
                            winGame();
                        }
                    } else {
                        cadsNoMatch(tile1, tile2);
                    }
                }
            }
        });
    };

    // Handling the click on the cards during the game
    // and transferring the selected cards for processing.

    const playGame = () => {
        const tiles = document.querySelectorAll('.game__play__card_inner');
        for (let i = 0, len = tiles.length; i < len; i++) {
            const tile = tiles[i];
            playGameEvents(tile);
        }
    };

    /*= = Formation of the playing field  == */

    let choiceCards = '';
    let choiceLevel = 0;
    const defaultCards = 'cardsAlphabet';
    const defaultLevel = 10;

    // Forming number cards for adding, depending on the choice of the level of cards

    const createContainersForCards = (level) => {
        const game = document.createElement('div');
        game.className = 'game__play';
        game.id = 'game__play';
        container.appendChild(game);

        const gameWrapper = document.createElement('div');
        gameWrapper.className = 'game__play__wrapper';
        game.appendChild(gameWrapper);

        const gameCards = document.createElement('div');
        gameCards.className = 'game__play__cards';
        gameCards.id = 'game__play__cards';
        gameWrapper.appendChild(gameCards);
    };

    // Forming cards for adding, depending on the choice of the type of cards

    const newCards = [];

    const formationCards = (cards) => {
        newCards.length = 0;
        const numCards = choiceLevel;
        const halfNumCards = numCards / 2;
        for (let i = 0; i < halfNumCards; i++) {
            newCards.push(Cards[cards][i], Cards[cards][i]);
        }
        newCardsAdd = shuffle(newCards);
        return newCardsAdd;
    };

    // Creating and adding cards to a container

    const addCardsToContainer = () => {
        const gameCardsAdd = document.getElementById('game__play__cards');

        for (let i = 0; i < choiceLevel; i++) {
            const gameCard = document.createElement('div');
            gameCard.className = 'game__play__card';
            gameCardsAdd.appendChild(gameCard);

            const cardInner = document.createElement('div');
            cardInner.className = 'game__play__card_inner';
            gameCard.appendChild(cardInner);

            const cardOutside = document.createElement('span');
            cardOutside.className = 'game__play__card_outside';
            cardOutside.classList.add(`level-${choiceLevel}`);
            cardInner.appendChild(cardOutside);

            const cardInside = document.createElement('span');
            cardInside.className = 'game__play__card_inside';
            cardInside.classList.add(`level-${choiceLevel}`);
            cardInner.appendChild(cardInside);

            const cardInsideImg = document.createElement('img');
            const n = i + 1;
            cardInsideImg.setAttribute('src', newCards[i]['img']);
            cardInsideImg.className = `game__play__card___img_inside${n}`;
            cardInsideImg.id = newCards[i]['id'];
            cardInside.appendChild(cardInsideImg);
        }
    };

    // Ban on the choice of maps and level
    // Defining default values no cards or level are selected
    // Formation of the playing field depending on the parameters
    // Adding a timer
    // Initializing the beginning of the game

    const startGameScreen = () => {
        removeAddContent(disabledElement);
        if (choiceLevel === 0) {
            choiceLevel = defaultLevel;
            removeAddContent(difficultySelect);
        }
        if (choiceCards === '') {
            choiceCards = defaultCards;
            removeAddContent(cardsSelect);
        }
        createContainersForCards(choiceLevel);
        formationCards(choiceCards);
        clearTimer();
        createTimer();
        addCardsToContainer();
        playGame();
    };

    /*= = Start Game == */

    // Handle the selection of the kind of cards on the playing field

    const levels = document.querySelectorAll('li.difficulty__select__level');

    for (let i = 0; i < levels.length; i++) {
        const level = levels[i];
        level.addEventListener('click', (e) => {
            choiceLevel = level.getAttribute('data-level');
            removeAddContent(difficultySelect);
		  return choiceLevel;
	  });
    }

    // Handle the selection of the number of cards on the playing field

    const cardsAll = document.querySelectorAll('li.cards__select__block');

    for (let i = 0; i < cardsAll.length; i++) {
        const cards = cardsAll[i];
        cards.addEventListener('click', (e) => {
            choiceCards = cards.getAttribute('data-select');
            removeAddContent(cardsSelect);
	  	return choiceCards;
	  });
    }


    /* when you press the start button
      delete the block with the rules, with the form
      show the button new game
        build a game field */

    buttonStart.addEventListener('click', (evt) => {
        evt.preventDefault();
        remove(formRegistration);
        remove(contentStartGame);
        startGameScreen();
        removeAddContent(buttonStart);
    });

    const removeTable = () => {
        const tablePlayers = document.getElementById('table__players');
        if (tablePlayers.childNodes.length !== 0) {
            tablePlayers.parentNode.removeChild(tablePlayers);
        }
    };

    /* when you press the new game button */

    buttonNewGame.addEventListener('click', (evt) => {
        removeAddContent(formRegistration);
        removeAddContent(contentStartGame);
        removeAddContent(buttonNewGame);
        removeAddContent(buttonStart);
        removeAddContent(cardsSelect);
        removeAddContent(difficultySelect);
        removeTable();
        addContent.textContent = '';
    });
};
