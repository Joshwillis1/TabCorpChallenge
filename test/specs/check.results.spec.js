import SelectStatePage from "../pageobjects/select.state.page";
import HomePage from "../pageobjects/keno.home.page";
import CheckResultsPage from "../pageobjects/check.results.page"

describe('Check Game Results', function() {
  it('should allow the user to select their state and enter the main site ', function() {
    // Open the keno.com.au web page
    browser.url('https://www.keno.com.au/');
    browser.pause(1000);

    // Click on the select state drop down and select QLD
    SelectStatePage.stateDropDown.click();
    SelectStatePage.stateDropDownQLD.click();

    // Verify the user has landed on the home page
    HomePage.waitForPageToLoad();
    HomePage.navBarKenoHeader.isClickable().should.be.equal(true);
    browser.pause(500);
  });

  it('should allow the user to check their results ', function () {
    // Click on the 'Check Results" tab
    HomePage.navBarCheckResultsButton.click();
    browser.pause(1000);

    // Enter details to check results
    CheckResultsPage.checkResultsDatePicker.setValue('08-10-2020');
    CheckResultsPage.checkResultsStartGame.setValue('1');
    CheckResultsPage.checkResultsNumOfGames.setValue('5');

    // Click the 'Check Results' button
    CheckResultsPage.checkResultsButton.click();
    browser.pause(500);

    // Verify the game results are displayed
    CheckResultsPage.checkResultsGameList.isDisplayedInViewport().should.be.equal(true);

  })
});