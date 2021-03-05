import React from 'react';
import styles from './Board.module.css';
import Card from '../Card/Card';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      isAddingCard: false
    };
    this.newCardContent = '';
    this.draggingCardColor = '';

    this.createCard = this.createCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.sortCards = this.sortCards.bind(this);
    this.updateCounterValue = this.updateCounterValue.bind(this);
    this.toggleCardAddingMode = this.toggleCardAddingMode.bind(this);
    this.handleCardSubmit = this.handleCardSubmit.bind(this);
    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleCardChange(e) {
    this.newCardContent = e.target.value;
  }

  handleCardSubmit(e) {
    e.preventDefault();
    const { newCardContent } = this;
    if (newCardContent === '') return;

    this.createCard(newCardContent);
    this.toggleCardAddingMode();
  }

  static handleDragover(e) {
    e.preventDefault();
  }

  handleDrop(e) {
    const dataTransfer = e.dataTransfer.getData('card').split(',');
    this.draggingCardColor = e.dataTransfer.getData('boardColor');

    const card = {};

    for (let i = 0; i < dataTransfer.length; i += 2) {
      const key = dataTransfer[i];
      const value = dataTransfer[i + 1];
      card[key] = Number.isNaN(+value) ? value : +value;
    }

    this.setState((previousState) => {
      const { cards } = previousState;
      const isCurrentBoard = !!cards.find(
        (el) => el.createdDate === card.createdDate
      );

      return isCurrentBoard ? {} : { cards: [...cards, card] };
    });

    this.sortCards();
  }

  deleteCard(createdDate, userClicked) {
    const { boardColor } = this.props;

    if (userClicked || this.draggingCardColor !== boardColor) {
      this.setState((previousState) => {
        const { cards } = previousState;
        const filtered = cards.filter((el) => el.createdDate !== createdDate);

        return {
          cards: filtered
        };
      });
    }

    this.draggingCardColor = '';
  }

  toggleCardAddingMode() {
    this.setState((previousState) => {
      const { isAddingCard } = previousState;

      return { isAddingCard: !isAddingCard };
    });
  }

  createCard(cardContent) {
    const card = {
      createdDate: Date.now(),
      cardContent,
      counterValue: 0
    };

    this.setState((previousState) => {
      const { cards } = previousState;

      return { cards: [...cards, card] };
    });

    this.sortCards();
  }

  sortCards() {
    this.setState((previousState) => {
      const { cards } = previousState;

      return { cards: cards.sort((a, b) => b.counterValue - a.counterValue) };
    });
  }

  updateCounterValue(createdDate, value) {
    this.setState((previousState) => {
      const { cards } = previousState;

      return {
        cards: cards.map((card) =>
          card.createdDate === createdDate
            ? { ...card, counterValue: card.counterValue + value }
            : card
        )
      };
    });

    const { cards } = this.state;
    if (cards.length > 1) this.sortCards();
  }

  render() {
    const { boardTitle, boardColor } = this.props;
    const { cards, isAddingCard, isDragover } = this.state;

    return (
      <div className={styles.board}>
        <div className={styles.top}>
          <div
            className={styles.icon}
            style={{ backgroundColor: boardColor }}
          />
          <h3 className={styles.heading}>{boardTitle}</h3>
          <div className={styles.counter}>{cards.length}</div>
        </div>
        {isAddingCard ? (
          <form onSubmit={this.handleCardSubmit}>
            <textarea
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              required
              className={styles.textarea}
              onChange={this.handleCardChange}
            />
            <button type="submit" className={styles['submit-btn']}>
              Add Card
            </button>
          </form>
        ) : (
          <button
            type="button"
            className={styles['add-btn']}
            onClick={this.toggleCardAddingMode}
          >
            + Create new note
          </button>
        )}
        {isDragover ? <div className={styles['shadow-card']} /> : null}
        <ul
          className={styles['cards-container']}
          onDrop={this.handleDrop}
          onDragOver={Board.handleDragover}
        >
          {cards.map((card) => (
            <Card
              key={card.createdDate}
              boardColor={boardColor}
              card={card}
              updateCounterValue={this.updateCounterValue}
              deleteCard={this.deleteCard}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Board;
