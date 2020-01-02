export interface IMusicUrl {
  id: number;
  url: string;
  br: number;
  size: number;
  md5: string;
  code: number;
  expi: number;
  type: string;
  gain: number;
  fee: number;
  uf: null;
  payed: number;
  flag: number;
  canExtend: boolean;
  freeTrialInfo: null;
  level: string;
  encodeType: string;
}

export interface IMusicDetail {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: IMusicDetailAr[];
  alia: any[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt: null;
  cf: string;
  al: IMusicDetailAl;
  dt: number;
  h: IMusicDetailH;
  m: IMusicDetailH;
  l: IMusicDetailH;
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
  mv: number;
  mst: number;
  cp: number;
  rtype: number;
  rurl: null;
  publishTime: number;
}

export interface IMusicDetailAl {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}

export interface IMusicDetailAr {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

export interface IMusicDetailH {
  br: number;
  fid: number;
  size: number;
  vd: number;
}
