export interface EchoDemoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
