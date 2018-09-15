class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 4};
  
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }
  
    increment() {
      this.setState({count: this.state.count + 1});
    }
  
    decrement() {
       this.state.count > 0 && this.setState({count: this.state.count -  1});
    }
  
    render() {
      return (
        <div>
        <h1>Vous avez {this.state.count} maison.</h1>
        <button onClick={this.increment}>J'ai une nouvelle maison</button>
        <button onClick={this.decrement}>J'ai perdu une maison</button>
        </div>
        
        )
     }
  }
  
  
  ReactDOM.render(<Counter />, document.querySelector('#root'))