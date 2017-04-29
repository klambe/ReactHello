var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;
    if(name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);

    }
    if(message.length > 0){
      this.refs.message.value = '';
      this.props.onNewMessage(message);

    }
  }
  ,
  render: function() {
    return (

        <form onSubmit ={this.onFormSubmit}>
          <div>
            <input type="text" ref="name" placeholder="Enter Name"/>
          </div>
          <div>
            <textarea ref="message" placeholder="Enter message"></textarea>
          </div>
          <div>
            <button>new set Name</button>
          </div>
        </form>

    );
  }

});

module.exports = GreeterForm;
