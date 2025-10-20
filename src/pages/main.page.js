export class MainPage{
    constructor(page){
        this.loginLink = page.getByRole('link', { name: 'Login' });
    }

    async gotoLogin() {
        await this.loginLink.click();
    }
}