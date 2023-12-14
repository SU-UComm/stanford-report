/**
 * Orchestrates the transformation of data from
 * various endpoints
 */
export default class CardDataAdapter {
  constructor(cardService) {
    this.cardService = cardService;
    this.getCards = cardService?.getCards;
  }

  setCardService(cardService) {
    this.cardService = cardService;
    this.getCards = cardService.getCards.bind(cardService);
  }
}
