export interface ITest {
  (options: { msg: string; onClick(cb: any): void }): any;
  printMsg(): void;
}
