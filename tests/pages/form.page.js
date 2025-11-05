export class FormPage{

    constructor(page) {
        this.page = page;
        this.nameInput = page.getByRole('textBox', {name: 'Name *'});
        this.emailInput = page.getByRole('textBox', {name: 'Email *'});
        this.passwordInput = page.getByRole('textBox', {name: 'Password *'});
        this.countrySelect = page.getByRole('combobox', {name: 'Country *'});
        this.genderRadio = (value) => page.getByRole('radio', {name: value, exact: true});
        this.hobbyChecckbox = (value) => page.getByRole('checkbox', {name: value});
        this.buttonSend = page.getByRole('button', {name: 'Send'});
        this.successTitle = page.getByText('Success!');
        this.successBody = page.getByText('The form has been submitted');
    }

    async navigateToForm() {
        await this.page.goto('/form');
    }

    async fillName(userName) {
        await this.nameInput.fill(userName);
    }

    async fillEmail(userEmail) {
        await this.emailInput.fill(userEmail);
    }

    async fillPassword(password) {
        await this.passwordInput.fill(password);
    }

    async selectCountry(country) {
        await this.countrySelect.selectOption(country);
    }

    async selectGender(gender) {
        await this.genderRadio(gender).check();
    }

    async selectHobbies(hobbies) {
        for (const hobby of hobbies){
                await this.hobbyChecckbox(hobby).check();
        }
    }

    async clickSendButton() {
        await this.buttonSend.click();
    }

    async validateSuccessMessage() {
        await expect(this.successTitle).toBeVisible();
        await expect(this.successBody).toBeVisible();
    }
}