export class RegisterPage {
  constructor(page){
    this.nameTextbox = page.getByRole('textbox', { name: 'Your Name' });
    this.emailTextbox = page.getByRole('textbox', { name: 'Email' });
    this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    };

  async register (user){
    const {name, email, password} = user;
    await this.nameTextbox.click();
    await this.nameTextbox.fill(name);
    await this.emailTextbox.click();
    await this.emailTextbox.fill(email);
    await this.passwordTextbox.click();
    await this.passwordTextbox.fill(password);
    await this.signUpButton.click();
    };
}