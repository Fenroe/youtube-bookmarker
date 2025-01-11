(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";

  chrome.runetime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;

    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
    }
  });
})();
