var React = require('react');

let hello = React.createClass({
    render: function () {
        return (
            <div>this is from jsx!</div>
        );
    }
});

module.exports.hello = hello;