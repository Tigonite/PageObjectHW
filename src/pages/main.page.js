export class MainPage{
    constructor(page){
        this.loginLink = page.getByRole('link', { name: 'Login' });

    }
}