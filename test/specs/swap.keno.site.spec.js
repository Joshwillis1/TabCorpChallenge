import SelectStatePage from "../pageobjects/select.state.page";
import HomePage from "../pageobjects/keno.home.page";

describe('Swap Keno Site', function() {
  it('should allow the user to select their state and enter the main site ', function() {
    // Open the keno.com.au web page
    browser.url('https://www.keno.com.au/');
    browser.pause(1000);

    // Click on the select state drop down and select QLD
    SelectStatePage.stateDropDown.click();
    SelectStatePage.stateDropDownQLD.click();

    // verify the user has landed on the home page
    HomePage.waitForPageToLoad();
    HomePage.navBarKenoHeader.isClickable().should.be.equal(true);
    browser.pause(500);
  });

  it('should allow the user to view the Keno Racing home page', function () {
    // Click on the Keno Racing button
    HomePage.swapKenoButton.click();

    // Verify the user is navigated to the Keno Racing site
    HomePage.navBarRacingHeader.waitForClickable({timeout: 5000});
    HomePage.navBarRacingHeader.isDisplayed().should.be.equal(true);
  });

  it('should allow the user to switch back to the regular Keno page', function () {
    // Click on the Keno button
    HomePage.swapKenoButton.click();

    // Verify the user is navigated back to the regular Keno site
    HomePage.navBarKenoHeader.waitForClickable({timeout: 5000});
    HomePage.navBarKenoHeader.isDisplayed().should.be.equal(true);
  });
});