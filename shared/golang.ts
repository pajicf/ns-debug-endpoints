export interface IGarbageCollectionStats {
  lastGC: ITime;
  NumGC: number;
  PauseTotal: Duration;
  Pause: Duration[];
  PauseEnd: ITime[];
  PauseQuantiles: Duration[];
}

interface ITime {
  wall: number;
  ext: number;
  loc: ILocation;
}

type Duration = number;

interface ILocation {
  name: string;
  zone: IZone[];
  tx: IZoneTransition[];
  extend: string;
  cacheStart: number;
  cacheEnd: number;
  cacheZone: IZone;
}

interface IZone {
  name: string;
  offset: number;
  isDST: boolean;
}

interface IZoneTransition {
  when: number;
  index: number;
  isstd: boolean;
  isutc: boolean;
}