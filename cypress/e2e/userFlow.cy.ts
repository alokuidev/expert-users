describe('User Directory E2E Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Loads the homepage and displays users', () => {
      // Check header
      cy.contains('User Directory').should('exist');
  
      // Check that user cards exist
      cy.get('[data-testid="user-card"]').should('have.length.at.least', 1);
    });
  
    it('Opens album modal on user click', () => {
      cy.get('[data-testid="user-card"]').first().click();
      cy.get('[data-testid="album-modal"]').should('exist');
    });
  
    it('Loads album items inside modal', () => {
      cy.get('[data-testid="user-card"]').first().click();
      cy.get('[data-testid="album-item"]', { timeout: 5000 }).should('have.length.at.least', 1);
    });
  
    it('Displays large image when photo thumbnail is clicked', () => {
      cy.get('[data-testid="user-card"]').first().click();
      cy.get('[data-testid="album-item"]').first().click();
      cy.get('[data-testid="photo-thumb"]').first().click();
      cy.get('[data-testid="photo-large"]').should('exist');
    });
  });
  