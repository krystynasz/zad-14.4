/*ar element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmow'),
    React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król Lew'),
                React.createElement('p', {}, 'Film o lwie')
            )
        )
    );*/


    var movies = [
        {
          id: 1,
          title: 'Before Sunrise',
          desc: 'A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.',
          poster: 'https://nypdecider.files.wordpress.com/2018/05/before-sunrise.jpg?quality=90&strip=all&w=646&h=431&crop=1'
        },
        {
          id: 2,
          title: 'Moonrise Kingdom',
          desc: 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
          poster: 'https://a.ltrbxd.com/resized/sm/upload/bh/nn/ou/1o/moonrise-kingdom-1200-1200-675-675-crop-000000.jpg?k=504e153f61'
        },
        {
          id: 3,
          title: 'Nie lubie poniedzialku',
          desc: 'An acute case of Mondayitis in Warsaw. Interwoven stories of a few inhabitants of Warsaw, including one very unlucky Italian on a governmental mission and a charitable Polish American.',
          poster: 'https://ocdn.eu/pulscms-transforms/1/plYktkpTURBXy8xNjkzZDdmMWM5OTBlMDQ1MzM1NDBhMTA5ZWU2MGQwZC5qcGeSlQMAAM0DIM0BwpMFzQMgzQHC'
        },
        {
          id: 4,
          title: 'Mis',
          desc: 'Rysiek, the shrewd manager of a state-sponsored sports club, has to get to London before his ex-wife Irena does to collect an enormous sum of money from a savings account the two used to share in happier days.',
          poster: 'http://zoomtv.pl/dat/film/000000001/000001975/000001975_20170825154742_.jpg?_=1503668862'
        },
        {
          id: 5,
          title: 'The Grand Budapest Hotel',
          desc: 'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.',
          poster: 'https://1.fwcdn.pl/wv/27/18/32718/grand_gif.32718.4.jpg'
        },
      ];

 var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img',{src: movie.poster}),
    );
});

  var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite movies'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));