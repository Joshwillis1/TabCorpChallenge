import page from "../pageobjects/page";

class CheckResultsPage extends page {
  /**
   * Defining page elements
   */
  get checkResultsDatePicker()      { return $('//input[@id="checkResultsDate"]'); }
  get checkResultsStartGame()       { return $('//input[@id="checkResultsGameNumber"]'); }
  get checkResultsNumOfGames()      { return $('//input[@id="checkResultsNumOfGames"]'); }
  get checkResultsButton()          { return $('//button[@id="checkResults"]'); }
  get checkResultsGameList()        { return $('//ul[@class="game-board-listing"]'); }

  /**
   *  Page specific methods
   */

}


export default new CheckResultsPage()