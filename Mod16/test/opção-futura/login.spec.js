const homeScreen = require("../screens/home.screen");

describe('Access admin panel', () => {
    it('Should be a login', async () => {
        await homeScreen.goToNextPage()
    });
});