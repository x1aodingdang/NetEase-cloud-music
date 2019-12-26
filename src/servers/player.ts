import { Howl, Howler } from "howler";

const playerlist = [];

export default class Player {
  player: Howl;
  duration!: number;
  constructor(src: string) {
    console.log(src);
    this.player = new Howl({
      src: src,
      autoplay: true,
      onload: () => {
        this.duration = this.player.duration();
        console.log("onload success", this.duration);
      },
      onend: () => {
        console.log("Finished!");
      }
    });
    playerlist.push(this.player);
    this.play();
  }

  init() {}

  play() {
    this.player.play();
  }
}
