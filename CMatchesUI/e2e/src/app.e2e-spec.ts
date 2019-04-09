import { AppPage } from './app.po';
import { browser, logging, element, protractor, by } from 'protractor';
describe('Cricket-Match App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  
  it('should be redirected to login page on loading application', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('login');
  });
  it('should be redirected to register', () => {
    browser.element(by.css('#gotoRegister')).click();
    expect(browser.getCurrentUrl()).toContain('register');
  });
  it('should register user', () => {    
    browser.element(by.id('firstName')).sendKeys('Sudip');
    browser.element(by.id('lastName')).sendKeys('Pain');
    browser.element(by.id('userId')).sendKeys('Sudip123');
    browser.element(by.id('password')).sendKeys('Sudip1234@');
    browser.element(by.className('register-user')).click();
    expect(browser.getCurrentUrl()).toContain('login');
  });
   it('should be able to login user and navigate to current matches', () => {
    browser.element(by.id('userId')).sendKeys('Sudip123');
    browser.element(by.id('password')).sendKeys('Sudip1234@');
    browser.element(by.css('.login-user')).click();
    expect(browser.getCurrentUrl()).toContain('current-matches');
  });
  it('should be able to login user and navigate to future matches', () => {
    browser.element(by.css('#upcoming')).click();
    expect(browser.getCurrentUrl()).toContain('calendar-matches');
  });
  it('should be able to add match to watchlist', async() => {
   
    const searchItems = element.all(by.css('.card-container'));
    expect(searchItems.isPresent()).toBeTruthy();
    searchItems.get(0).click();
    browser.element(by.css('.addFav')).click();
    browser.driver.sleep(1000);
    browser.element(by.css('.favourite')).click();
    expect(browser.getCurrentUrl()).toContain('favourite-list');
    const searchItems2 = element.all(by.css('.card-container'));
    expect(searchItems2.isPresent()).toBeTruthy();
  });
   it('should be able to  navigate to past matches', () => {
   
    browser.element(by.css('.past')).click();
    expect(browser.getCurrentUrl()).toContain('past-matches');
  });
  it('should be able to logout', () => {
   
    browser.element(by.css('.LogoutButton')).click();
    expect(browser.getCurrentUrl()).toContain('login');
  });
   
});
