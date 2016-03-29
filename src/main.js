require('./polyfills');
let Person = require('./person');

// var React = require('react');
// var ReactDOM = require('react-dom');


let HelloBox = React.createClass({
    getInitialState: function() {
        let self = this;
        let p = new Promise((res) => {
            let to = setTimeout(() => {
                self.setState({
                    name: 'Jhon'
                });
                clearTimeout(to);
                res();
            }, 3000);
        }).then(() => {
            self.setState({
                end: '[Promise end!:)]'
            });
        });
       return {
           name: 'Lee',
           end: ''
       };
    },
    render: function () {
        return (
            <div>{this.state.name} this is from jsx!{this.state.end}</div>
        );
    }
});

ReactDOM.render(
  //<hello />,
  <HelloBox />,
  document.getElementById('reactApp')
);




