describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('shouldpass', () => {
    expect(true).to.be.true;
  });
});
