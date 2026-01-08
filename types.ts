
export interface ProjectCharterData {
  projectName: string;
  businessCase: string;
  stakeholders: string;
}

export interface PerformanceData {
  ev: number;
  ac: number;
  pv: number;
}

export interface ChangeRequestData {
  description: string;
  impact: string;
}

export enum Tab {
  INITIATE = '1.1 Initiate',
  MONITOR = '1.7 Monitor',
  CHANGE = '1.8 Change'
}
