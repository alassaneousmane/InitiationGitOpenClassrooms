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
        <h1>Vous avez {this.state.count} maison(s).</h1>
        <button onClick={this.increment}>Jai une nouvelle maison</button>
        <button onClick={this.decrement}>Jai perdu cette maison</button>
        </div>
        
        )
     }
  }
  
  
  ReactDOM.render(<Counter />, document.querySelector('#root'))