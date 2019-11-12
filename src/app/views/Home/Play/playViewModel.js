import GameHistoryModel from "../../../../database/gameHistory/gameHistoryModel";
import GameHistorySvc from "../../../../database/gameHistory/gameHistorySvc";
import AuthSvc from "../../../../businessLogic/AuthSvc";

//import UsersSvc from "../../database/Users/usersSvc";

export default class PlayViewModel {


  constructor(onDataChanged, text) {
    this.onDataChanged = onDataChanged;
    this._startNewGame();

  }

  //
  // Public
  //
  ticTacToeButtonPressed(x,y) {
    this.game[x][y] = this.whosTurn;
    this.whosTurn = this.whosTurn % 2 + 1;
    this.winner = this._getWinner();
    this.isStarted = true;
    this.onDataChanged();

    // Did we finish the game?
    if (this.winner != null){
      this._saveGameToDatabase();
    }
  }

  startButtonPressed(){
    this.isStarted = true;
    this.onDataChanged();
  }

  resetButtonPressed(){
    this._startNewGame();
    this.onDataChanged();
  }

  playAgainPressed(){
    this._startNewGame();
    this.onDataChanged();
  }


  //
  // Privates
  //
  _startNewGame() {
    this.game = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.whosTurn = 1;
    this.winner = null;
  }

  _getWinner() {


    var xDiagonalCountTLBR = 0
    var xDiagonalCountBLTR = 0
    var oDiagonalCountTLBR = 0
    var oDiagonalCountBLTR = 0
    var totalFilledInCount = 0;

    for (var i = 0; i < 3; i++) {

      // Check rows and columns
      var xRowCount = 0, oRowCount = 0, xColumnCount = 0, oColumnCount = 0;
      for (var j = 0; j < 3; j++) {
        xRowCount += this.game[i][j] == 1 ? 1 : 0;
        xColumnCount += this.game[j][i] == 1 ? 1 : 0;
        oRowCount += this.game[i][j] == 2 ? 1 : 0;
        oColumnCount += this.game[j][i] == 2 ? 1 : 0;

        totalFilledInCount += this.game[i][j] > 0 ? 1 : 0;
      }

      // Check diagonals
      xDiagonalCountTLBR += this.game[i][i] == 1 ? 1 : 0;
      oDiagonalCountTLBR += this.game[i][i] == 2 ? 1 : 0;
      xDiagonalCountBLTR += this.game[i][2 - i] == 1 ? 1 : 0;
      oDiagonalCountBLTR += this.game[i][2 - i] == 2 ? 1 : 0;



      if (xRowCount >= 3 || xColumnCount >= 3 || xDiagonalCountTLBR >= 3 || xDiagonalCountBLTR >= 3) {
        // Player 1 wins
        return 1;
      }
      else if (oRowCount >= 3 || oColumnCount >= 3 || oDiagonalCountTLBR >= 3 || oDiagonalCountBLTR >= 3) {
        // Player 2 wins
        return 2;
      }
    }


    if (totalFilledInCount >= 9) {
      // Draw
      return 0;
    }

    // No winner yet
    return null;


  }

  async _saveGameToDatabase(){
    var userId = await AuthSvc.getCurrentUserId();
    console.log("winner")
    console.log(this.winner)
    var gameHistory = new GameHistoryModel({
      userId: userId,
      date: Date(),
      winner: this.winner,
      
    });
    console.log(gameHistory)
    GameHistorySvc.addGameHistory(gameHistory);
  }

}