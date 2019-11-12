import GameHistorySvc from "../../../../database/gameHistory/gameHistorySvc";
import AuthSvc from "../../../../businessLogic/AuthSvc";


export default class HistoryViewModel {


    constructor(onDataChanged, props){
      this.onDataChanged = onDataChanged;
      this.props = props;
      
      this._loadData();
    }

    async _loadData(){
        this.isLoading = true;
        this.onDataChanged();

        var userId = await AuthSvc.getCurrentUserId();
        this.gameHistories = await GameHistorySvc.getGameHistoriesByUserId(userId);
        
        this.isLoading = false;
        this.onDataChanged();
    }

    getTitleFromGameHistory(gameHistory){
        return gameHistory.winner == 0 ? "Draw" : "Player " + gameHistory.winner + " wins";
    }


  
    
   
  }