import SelectStatePage from "../pageobjects/select.state.page";
import HomePage from "../pageobjects/keno.home.page";
import FindVenuePage from "../pageobjects/find.venue.page"

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
    HomePage.navBarKenoHeader.isClickable().should.be.equal(true);
    browser.pause(500);
  });

  it('should allow the user to view the "Find a venue" page', function () {
    // Click on the "Find a venue" tab
    HomePage.navBarFindVenueButton.click();
    FindVenuePage.waitForPageToLoad();

    // Verify the page is displayed
    FindVenuePage.venueMap.isDisplayed().should.be.equal(true);
  });

  it('should allow the user to search for a club', function () {
    // Search for a suburb
    FindVenuePage.searchInput.setValue("Newstead");

    // Select the "Pub" search filter
    FindVenuePage.searchFilterPub.click();

    // Verify the venue list appears and the Oxford 152 is displayed
    FindVenuePage.venueList.waitForDisplayed({timeout: 5000})
    FindVenuePage.venueListItemOxford.isDisplayed().should.be.equal(true);
  });

  it('should allow the user to filter the search results for "Club"', function () {
    // Click on the "Club" search filter
    FindVenuePage.searchFilterClub.click();

    // Verify the Bulimba Memorial Bowls & Community Club is displayed
    FindVenuePage.venueListItemBMBCC.waitForDisplayed({timeout: 5000});
    FindVenuePage.venueListItemBMBCC.isDisplayed().should.be.equal(true);
  });

  it('should allow the user to view details of a selected club', function () {
    // Click on the Bulimba Memorial Bowls & Community Club list item
    FindVenuePage.venueListItemBMBCC.click();

    // Verify the venue details are displayed
    FindVenuePage.venueBMBCCDetails.isDisplayed().should.be.equal(true);
  });
});