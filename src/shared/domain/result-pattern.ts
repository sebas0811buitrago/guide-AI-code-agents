export type ResultPattern<TData, TError = string> =
  | { success: true; data: TData; error?: never }
  | { success: false; error: TError; data?: never };
