export class LoginPage {
    constructor(page){
        this.emailTextbox = page.getByRole('textbox', { name: 'Email' });
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async activateEmail(){
        await this.emailTextbox.click();
    };
    async fillEmail(){
        await this.emailTextbox.fill();
    };
    async activatePassword(){
        await this.passwordTextbox.click();
    };
    async fillPassword(){
        await this.passwordTextbox.fill();
    };
    async pushLoginButton(){
        await this.loginButton.click()
    };
}