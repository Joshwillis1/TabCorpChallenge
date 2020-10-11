import SelectStatePage from "../pageobjects/select.state.page";
import HomePage from "../pageobjects/keno.home.page";
import HowToWinPage from "../pageobjects/how.to.win.page";

describe('How to Win', function() {
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

  it('should allow the user to view and navigate the "How to Win" page', function () {
    // Click on the "How to Win" tab
    HomePage.navBarHowToWinButton.click();
    HowToWinPage.waitForModal();

    // Wait for the intro to play out
    HowToWinPage.waitForIntro();

    // Click the right arrow button three times
    HowToWinPage.rightArrowButton.click();
    HowToWinPage.rightArrowButton.click();
    HowToWinPage.rightArrowButton.click();

    // Click the left arrow button four times
    HowToWinPage.leftArrowButton.click();
    HowToWinPage.leftArrowButton.click();
    HowToWinPage.leftArrowButton.click();
    HowToWinPage.leftArrowButton.click();

    // Close the modal
    HowToWinPage.closeModalButton.click();

    // Verify the user can continue to navigate the home page
    HomePage.navBarKenoHeader.isClickable().should.be.equal(true);

  });
});