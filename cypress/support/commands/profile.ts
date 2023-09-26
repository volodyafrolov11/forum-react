export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'something' },
    body: {
        id: '4',
        firstname: 'Test',
        lastname: 'Test',
        age: 30,
        currency: 'RUB',
        country: 'Russia',
        city: 'Moscow',
        username: 'test-user',
        avatar: 'https://f.vividscreen.info/soft/32e57bb59f83e1924bc2571b882f5448/Dog-In-Funny-Costume-2048x2048.jpg',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
