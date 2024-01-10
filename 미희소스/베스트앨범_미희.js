const solution = (genres, plays) => reducer(mapper(genres, plays));

const mapper = (genres, plays) =>
  genres.reduce((musics, genre, index) => {
    const playCount = plays[index];

    if (musics[genre]) {
      musics[genre].totalPlay += playCount;
      musics[genre].plays = [
        ...musics[genre].plays,
        { count: playCount, index },
      ]
        .sort((a, b) => b.count - a.count)
        .slice(0, 2);
    } else {
      musics[genre] = {
        totalPlay: playCount,
        plays: [{ count: playCount, index }],
      };
    }

    return musics;
  }, {});

const reducer = (albums) =>
  Object.values(albums)
    .sort((a, b) => b.totalPlay - a.totalPlay)
    .reduce(
      (res, album) => [...res, ...album.plays.map((play) => play.index)],
      []
    );
