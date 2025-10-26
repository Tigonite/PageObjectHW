export class MainPage{
  constructor(page){
    this.signUp = page.getByRole('link', { name: 'Sign up' });
    this.loginLink = page.getByRole('link', { name: 'Login' });
    this.heading = page.getByRole('heading', { name: 'conduit' });  
  };

    async gotoSignUp() {
      await this.signUp.click();
    };
     
    async gotoLogin() {
      await this.loginLink.click();
    };

    async gotoProfileName() {
      await this.profileName.click();
    };
}