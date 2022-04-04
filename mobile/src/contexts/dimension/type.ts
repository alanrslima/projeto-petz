export enum EOrientation {
  Landscape,
  Portrait,
}

export enum ESize {
  Small,
  Medium,
  Large,
}

export interface IDimension {
  orientation: EOrientation;
  size: ESize;
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  statusBarHeight: number;
}

export interface IDimensionContext extends IDimension {}
