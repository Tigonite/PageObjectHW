export class LoginPage {
    
    constructor(page){
        this.emailTextbox = page.getByRole('textbox', { name: 'Email' });
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async login(user){
        const {email, password} = user;
        await this.emailTextbox.click();
        await this.emailTextbox.fill(email);
        await this.passwordTextbox.click();
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();
    };
}