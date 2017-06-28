import { SignUp2Page } from './app.po';

describe('sign-up2 App', () => {
  let page: SignUp2Page;

  beforeEach(() => {
    page = new SignUp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
