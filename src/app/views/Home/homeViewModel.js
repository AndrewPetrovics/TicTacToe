

export default class HomeViewModel {


  constructor(setState, props){
    this.setState = setState;
    this.props = props;
  }

  async playPressed(){
    this.props.navigation.navigate('Play');
  }

  async historyPressed(){
    this.props.navigation.navigate('History');
  }

  async statsPressed(){
    this.props.navigation.navigate('Stats');
  }
 
}