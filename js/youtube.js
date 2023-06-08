// https://developers.google.com/youtube/iframe_api_reference?hl=ko#Getting_Started

// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player("player", {
    // https://www.youtube.com/watch?v=u9plP-MeKhM
    videoId: "u9plP-MeKhM", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "u9plP-MeKhM", // 반복재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        // event.target으로 플레이어 객체 제어 가능
        event.target.mute(); // 음소거 처리
      },
    },
  });
}
