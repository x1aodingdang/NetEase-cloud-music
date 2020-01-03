import { Howl } from "howler";

const playerlist: Player[] = [];

interface IPlayerOpt {
  src: string;
  onload?: (data: { duration: number }) => void;
  onend?: () => void;
  onProgress?: (curDuration: number) => void;
}
export default class Player {
  player: Howl;
  duration!: number;
  progressTimeId!: NodeJS.Timeout;
  constructor({ src, onload, onProgress, onend }: IPlayerOpt) {
    this.player = new Howl({
      src: src,
      autoplay: true,
      onload: () => {
        this.duration = this.player.duration();
        // this.player.seek(this.duration * 0.95);
        console.log("onload");
        typeof onload === "function" && onload({ duration: this.duration });
      },
      onstop: () => {
        clearInterval(this.progressTimeId);
      },
      onend: () => {
        console.log("Finished!");
        clearInterval(this.progressTimeId);
        typeof onend === "function" && onend();
      },
      onloaderror: () => {
        console.log("onloaderror 加载出错了？");
      },
      onplayerror: () => {
        console.log("onplayerror");
      },
      onplay: () => {
        this.progress(onProgress);
        clearInterval(this.progressTimeId);
        this.progressTimeId = setInterval(() => {
          this.progress(onProgress);
        }, 1000);
      }
    });
    // this.play();
  }

  init() {}

  pause() {
    this.player.pause();
    clearInterval(this.progressTimeId);
  }

  play() {
    this.player.play();
  }

  // 时间进度变化
  progress(onProgress?: (curDuration: number) => void) {
    try {
      const time = this.player.seek() as number;
      typeof onProgress === "function" && onProgress(time);
    } catch {}
  }

  static setplayerlist(Player: Player) {
    // 防止 出现多个 实例在同时播放
    playerlist.forEach(v => {
      v.player.unload && v.player.unload();
    });
    playerlist.pop();
    playerlist.push(Player);
  }
  static getLastInstance(): Player {
    return playerlist[playerlist.length - 1];
  }
}
