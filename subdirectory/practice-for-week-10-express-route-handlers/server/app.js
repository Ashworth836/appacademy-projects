// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

app.get('/artists', (req, res) => {
  res.statusCode = 200;
  res.send(getAllArtists());
});

app.post('/artists', (req, res) => {
  res.statusCode = 201;
  res.send(addArtist(req.body));
});

app.get('/artists/latest', (req, res) => {
  res.statusCode = 200;
  res.send(getLatestArtist());
});

app.get('/artists/latest/albums', (req, res) => {
  res.statusCode  = 200;
  res.send(getAlbumsForLatestArtist())
});

// Edit a specified artist by artistId
app.put('/artists/:artistId', (req, res) => {
  data = req.body;
  artistId = req.params.artistId;

  res.send(editArtistByArtistId(artistId, data));
});

// Delete a specified artist by artistId
app.delete('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;
  deleteArtistByArtistId(artistId);

  res.send(message);
});

// Get all albums of a specific artist based on artistId
app.get('/artists/:artistId/albums', (req, res) => {
  const artistId = req.params.artistId;
  
  res.send(getAlbumsByArtistId(artistId));
});

// Get a specific album's details based on albumId
app.get('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;

  res.send(getAlbumByAlbumId(albumId));
});

// Add an album to a specific artist based on artistId
app.post('/artists/:artistId/albums', (req, res) => {
  const data = req.body;
  const artistId = req.params.artistId;

  res.send(addAlbumByArtistId(artistId, data));
});

// Edit a specified album by albumId
app.put('/albums/:albumId', (req, res) => {
  const data = req.body;
  const albumId = req.params.albumId;

  res.send(editAlbumByAlbumId(albumId, data));

});

// Delete a specified album by albumId
app.delete('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  deleteAlbumByAlbumId(albumId);

  res.send(message);
});

// Get all albums with names filtered by first letter
app.get('/albums', (req, res) => {
  const query = req.query.startsWith;
  res.send(getFilteredAlbums(query));
});

// Get all songs of a specific artist based on artistId
app.get('artists/:artistId/songs', (req, res) => {
  const artistId = req.params.artistId;

  res.send(getSongsByArtistId(artistId));
});

// Get all songs of a specific album based on albumId
app.get('/albums/:albumId/songs', (req, res) => {
  const albumId = req.params.albumId;

  res.send(getSongsByAlbumId(albumId));
});

// Get a specific song's details based on songId
app.get('/songs/:songId', (req, res) => {
  const songId = req.params.songId;

  res.send(getSongBySongId(songId));
});

// Add a song to a specific album based on albumId
app.post('/albums/:albumId/songs', (req, res) => {
  const data = req.body;
  const albumId = req.params.albumId;

  res.send(addSongByAlbumId(albumId, data));
});

// Edit a specified song by songId
app.put('/songs/:songId', (req, res) => {
  const songId = req.params.songId;
  const data = req.data;

  res.send(editSongBySongId(songId, data));
});

// Delete a specified song by songId
app.delete('/songs/:songId', (req, res) => {
  const songId = req.params.songId;
  deleteSongBySongId(songId);

  res.send(message);
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));