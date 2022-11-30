const mapState = (array, payload) => {
  return array.map((gif) => {
    const gifId = gif.postID ? gif.postID : gif.id;
    if (payload.postID === gifId) {
      return {
        ...payload
      };
    };

    return gif;
  });
};

const filterState = (array, payload) => {
  return array.filter((gif) => {
    const gifId = gif.postID ? gif.postID : gif.id;
    if (payload.postID === gifId) {
      return false;
    };

    return true;
  });
};


module.exports = {
  mapState,
  filterState,

};
