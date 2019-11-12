
import GameHistorySvc from "../../../../database/gameHistory/gameHistorySvc";
import AuthSvc from "../../../../businessLogic/AuthSvc";
import _ from 'lodash'

export default class StatsViewModel {


    constructor(onDataChanged, props) {
        this.onDataChanged = onDataChanged;
        this.props = props;
        this.isMounted = false;
        //this.isLoading = true;

        this._loadData();
    }

    async _loadData() {
        this.isLoading = true;
        //this.onDataChanged();

        var userId = await AuthSvc.getCurrentUserId();
        this.gameHistories = await GameHistorySvc.getGameHistoriesByUserId(userId);

        this.isLoading = false;
        this.onDataChanged();
    }

    getTotalGames(){
        return this.gameHistories.length;
    }

    getTotalPlayer1Wins(){
        return _.filter(this.gameHistories, (gameHistory) => gameHistory.winner == 1).length;
    }

    getTotalPlayer2Wins(){
        return _.filter(this.gameHistories, (gameHistory) => gameHistory.winner == 2).length;
    }

    getTotalDraws(){
        return _.filter(this.gameHistories, (gameHistory) => gameHistory.winner == 0).length;
    }



}