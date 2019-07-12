export default (state, action) => {
  let { revealed, currentCard } = state

  switch (action) {
    case 'new-game':
      return { currenCard: [], revealed: [] }
    case 'no-match':
      revealed = revealed.filter(c => !currentCard.includes(c))
      return { currentCard: [], revealed }
    default:
  }
  if (revealed.includes(action) || currentCard.length === 2) return state
  return {
    currentCard: [...currentCard, action],
    revealed: [...revealed, action]
  }
}
