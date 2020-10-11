import page from "../pageobjects/page";

class CheckResultsPage extends page {
  /**
   * Defining page elements
   */
  get searchInput()                 { return $('//input[@id="venue-search"]'); }
  get searchFilterPub()             { return $('//div[contains(@class, "btn-group btn-group-justified ng-scope")]/div[2]'); }
  get searchFilterClub()            { return $('//div[contains(@class, "btn-group btn-group-justified ng-scope")]/div[3]'); }
  get venueMap()                    { return $('//div[contains(@class, "venue-map venues-map-canvas venue-map ng-scope ng-isolate-scope")]'); }
  get venueList()                   { return $('//ul[contains(@class, "venue-listing ng-scope")]'); }
  get venueListItemOxford()         { return $('//a[contains(@data-venue, "Oxford 152")]'); }
  get venueListItemBMBCC()          { return $('//a[contains(@data-venue, "Bulimba Memorial Bowls & Community Club")]'); }
  get venueBMBCCDetails()           { return $('//table[@class="venue-details"]'); }

  /**
   *  Page specific methods
   */

  waitForPageToLoad () {
    if (!this.venueMap.isDisplayed()) {
      this.venueMap.waitForDisplayed({timeout: 10000});
    }
  }

}


export default new CheckResultsPage()