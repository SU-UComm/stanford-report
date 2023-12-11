import CardDataAdapter from "./CardDataAdapter";

describe("Card Data Adaptor", () => {
  it("should initialize with getCards as null", () => {
    const adapter = new CardDataAdapter();

    expect(adapter.getCards).toBe(null);
  });

  it("should allow no cardService to be passed on initialization", () => {
    const adapter = new CardDataAdapter();

    expect(adapter.cardService).toBe(undefined);
  });

  it("should allow a card service to be set", () => {
    const adapter = new CardDataAdapter();

    expect(typeof adapter.setCardService).toBe("function");

    const mockGetCardsFn = jest.fn();
    const cardService = new (class {
      getCards() {
        mockGetCardsFn();
      }
    })();

    adapter.setCardService(cardService);

    expect(adapter.cardService).not.toBe(undefined);
  });

  it("should bind the adaptor getCards function to the card service context", () => {
    const mockContext = "service context"
    const adapter = new CardDataAdapter();
    const cardService = new (class {
      constructor() {
        this.context = mockContext;
      }
      getCards() {
        return this.context;
      }
    })();
    adapter.setCardService(cardService);

    expect(adapter.getCards()).toBe(mockContext)
  });
});
