import CONFIG from "../globals/config";
import Notificationhelper from "./notification-helper";

const webSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);

    Notificationhelper.sendNotification({
        title: `${movie.title} is on cinema!`,
        options: {
            body: movie.overview,
            Image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
        }
    })
  },
};

export default webSocketInitiator;
