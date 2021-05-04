export default (album, index) => ({
  id: album.id.attributes['im:id'],
  image: album['im:image'][2].label,
  name: album['im:name'].label,
  tracksCount: album['im:itemCount'].label,
  artist: album['im:artist'].label,
  category: album.category.attributes.term,
  position: index + 1,
});
