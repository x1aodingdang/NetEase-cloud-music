//playlist
export interface IRankingDetailPlaylistInfo {
  subscribers: any[];
  subscribed: boolean;
  creator: Creator;
  tracks: IRankingDetailPlaylist[];
  trackIds: TrackID[];
  updateFrequency: null;
  backgroundCoverId: number;
  backgroundCoverUrl: null;
  titleImage: number;
  titleImageUrl: null;
  englishTitle: null;
  opRecommend: boolean;
  trackNumberUpdateTime: number;
  adType: number;
  createTime: number;
  highQuality: boolean;
  userId: number;
  coverImgId: number;
  newImported: boolean;
  updateTime: number;
  specialType: number;
  coverImgUrl: string;
  trackCount: number;
  commentThreadId: string;
  privacy: number;
  trackUpdateTime: number;
  playCount: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  tags: any[];
  description: string;
  status: number;
  name: string;
  id: number;
  shareCount: number;
  coverImgId_str: string;
  ToplistType: string;
  commentCount: number;
}

export interface Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags: null;
  experts: null;
  djStatus: number;
  vipType: number;
  remarkName: null;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
}

export interface TrackID {
  id: number;
  v: number;
  alg: null;
  ratio: number;
  lr?: number;
}

export interface IRankingDetailPlaylist {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: Ar[];
  alia: string[];
  pop: number;
  st: number;
  rt: null | string;
  fee: number;
  v: number;
  crbt: null;
  cf: string;
  al: Al;
  dt: number;
  h: L | null;
  m: L;
  l: L;
  a: null;
  cd: string;
  no: number;
  rtUrl: null;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  rtype: number;
  rurl: null;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
  tns?: string[];
}

export interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: string[];
  pic_str?: string;
  pic: number;
}

export interface Ar {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

export interface L {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

//privileges
export interface IRankingDetailPrivileges {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
}
