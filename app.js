var GroceryList = (props) => (
  <div> DANIEL's GROCERY LIST
    <ul>
      {props.groceryArray.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      hover: false
    };
  }

  onClick() {
    this.setState({
      completed: !this.state.completed
    });
  }

  onMouseEnter() {
    this.setState({
      hover: true
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      textDecoration: this.state.completed ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onClick.bind(this)} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
      {this.props.item}
      </li>
    );
  }
}

ReactDOM.render(<GroceryList groceryArray={['Cucumbers', 'Kale', 'Potatoes', 'Ramen', 'Tomatoes']}/>, document.getElementById('app'));