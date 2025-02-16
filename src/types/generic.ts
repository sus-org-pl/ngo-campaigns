export interface ResponseHooks<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: unknown) => void;
}
