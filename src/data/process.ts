export interface ProcessStepConfig {
  id: number;
  num: string;
  key: string;
}

export const PROCESS_STEPS: ProcessStepConfig[] = [
  { id: 1, num: '1', key: 'step1' },
  { id: 2, num: '2', key: 'step2' },
  { id: 3, num: '3', key: 'step3' },
  { id: 4, num: '4', key: 'step4' },
];
