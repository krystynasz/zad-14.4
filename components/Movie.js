var Movie = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('div', { className: 'movieItem' },
                React.createElement(MovieTitle, { title: this.props.item.title }),
                React.createElement(MovieDescription, { desc: this.props.item.desc }),
                React.createElement('img', {
                    className: 'poster',
                    src: this.props.item.poster,
                }),

            )
        )
    },
});