import Peer, { SfuRoom } from "skyway-js";

export const initPeer = (forceTurn: boolean): Promise<Peer> => {
  return new Promise((resolve, reject) => {
    const peer = new Peer({
      key: "30f4c4cf-61b8-471e-a7dc-0d4c604bcc99",
      debug: 2,
      config: {
        iceTransportPolicy: forceTurn ? "relay" : "all",
      },
    });

    peer.once("open", () => {
      peer.removeListener("error", reject);
      resolve(peer);
    });
    // for onOpen error
    peer.once("error", reject);
  });
};

export const getPeerConnectionFromSfuRoom = (
  room: SfuRoom
): RTCPeerConnection => {
  // @ts-ignore: to get private refs
  return room._negotiator._pc;
};
