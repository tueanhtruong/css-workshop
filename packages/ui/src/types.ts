export interface ControlOption {
  label: string;
  color?: string;
  id: string | number;
  children?: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Callback = (...args: any[]) => void;
