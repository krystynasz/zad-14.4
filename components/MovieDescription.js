var MovieDescription = React.createClass({
  
    propTypes: {
       desc: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('p', { className: 'movieDescription' }, this.props.desc)
            )
    },
  });