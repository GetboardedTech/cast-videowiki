const constants = {
  apiUrl: 'https://api.video.wiki',
  url: 'https://videowiki.pt',
  backImageUrl: "https://api.cast.video.wiki/api/photos/?category=",
  apiCastUrl: 'https://dev.api.cast.video.wiki',
  streamUrl: "https://play.stream.video.wiki/live/",
  eventDetailsUrl: "https://dev.api.cast.video.wiki/api/event/meeting/info/?public_meeting_id="
};
if (process.env.NODE_ENV === 'production') {
  constants.apiUrl = 'https://api.video.wiki',
  constants.url = 'https://videowiki.pt',
  constants.backImageUrl = "https://api.cast.video.wiki/api/photos/?category=",
  constants.apiCastUrl = 'https://api.cast.video.wiki',
  constants.streamUrl = "https://play.stream.video.wiki/live/";
  constants.eventDetailsUrl = "https://api.cast.video.wiki/api/event/meeting/info/?public_meeting_id="
}
export default constants;
