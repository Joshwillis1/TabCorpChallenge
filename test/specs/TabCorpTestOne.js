import SelectStatePage from "../pageobjects/select.state.page";
import HomePage from "../pageobjects/home.page";

describe('Enter Site', function() {
  it('should allow the user to select their state and enter the main site ', function() {
    // Open the keno.com.au web page
    browser.url('https://www.keno.com.au/');
    browser.pause(1000);

    // Click on the select state drop down and select QLD
    SelectStatePage.stateDropDown.click();
    SelectStatePage.stateDropDownQLD.click();

    // verify the user has landed on the home page
    HomePage.waitForPageToLoad();
    HomePage.navBarHeader.isClickable().should.be.equal(true);
  });
});