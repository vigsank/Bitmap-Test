/**
 * Bitmap Description Interface
 */
export interface BitmapDescription {
  rowLength: number;
  columnHeight: number;
}

/**
 * Error Information Interface
 */
export interface ErrorInfo {
  type: number;
  message: string;
}
