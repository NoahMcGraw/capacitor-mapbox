export interface MapboxPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
