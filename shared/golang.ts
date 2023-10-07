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

export interface IMemStats {
  alloc: number;
  totalAlloc: number;
  sys: number;
  lookups: number;
  mallocs: number;
  frees: number;
  heapAlloc: number;
  heapSys: number;
  heapIdle: number;
  heapInuse: number;
  heapReleased: number;
  heapObjects: number;
  stackInUse: number;
  stackSys: number;
  mSpanInuse: number;
  mSpanSys: number;
  mCacheInUse: number;
  mCacheSys: number;
  buckHashSys: number;
  GCSys: number;
  otherSys: number;
  nextGC: number;
  lastGC: number;
  pauseTotalNS: number;
  pauseNS: number[];
  pauseEnd: number[];
  numGC: number;
  numForcedGC: number;
  GCCPUFraction: number;
  enableGC: boolean;
  debugGC: boolean;
  bySize: {
    size: number;
    mallocs: number;
    frees: number;
  }[]
}