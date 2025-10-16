export class LoginPage {
    constructor(page){
        this.emailTextbox = page.getByRole('textbox', { name: 'Email' });
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }
}