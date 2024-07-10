export class MovieService {
  getMoviesData() {
    var movies = [
      {
        title: 'titanic1',
        genere: 'deram1',
        publishdate: '2010/01/01',
        pictureAddress: '/assets/pic_trulli.jpg',
        color: 'btn1',
        score: 9,
      },
      {
        title: 'titanic2',
        genere: 'deram2',
        publishdate: '2011/01/01',
        pictureAddress: '/assets/1.png',
        color: 'btn2',
        score: 13,
      },
      {
        title: 'titanic3',
        genere: 'deram3',
        publishdate: '2012/01/01',
        pictureAddress: '/assets/2.png',
        color: 'btn3',
        score: 11,
      },
      {
        title: 'titanic4',
        genere: 'deram4',
        publishdate: '2013/01/01',
        pictureAddress: '/assets/3.png',
        color: 'btn4',
        score: 5,
      },
    ];

    return movies;
  }
}
