var MovieTitle = React.createClass({
  
   propTypes: {
     title: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('p', { className: 'movieTitle' }, this.props.title)
            )
    },
  });