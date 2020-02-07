import chalk = require('chalk');
import { WriteStream } from 'fs';

class PluginLogger {
  private name: string;

  private stream: WriteStream;

  // INF: log(), inf(), info(), l(), i(), m(), msg(), message(), blue(), b()
  public log(message: string): void {
    this.stream.write(
      `[${new Date().toLocaleString()}][INF][${this.name}]${message}\n`
    );
    console.log(
      chalk.bgCyan(`INF|${new Date().toLocaleTimeString()}|${this.name}`) +
        ' ' +
        chalk.cyan(message)
    );
  }

  // ERR: err(), error(), e(), fatal(), stop(), red(), r()
  public err(message: string): void {
    this.stream.write(
      `[${new Date().toLocaleString()}][ERR][${this.name}]${message}\n`
    );
    console.log(
      chalk.bgRed(`ERR|${new Date().toLocaleTimeString()}|${this.name}`) +
        ' ' +
        chalk.red(message)
    );
  }

  // OK: ok(), o(), s(), success(), ready(), green(), g()
  public ok(message: string): void {
    this.stream.write(
      `[${new Date().toLocaleString()}][OK ][${this.name}]${message}\n`
    );
    console.log(
      chalk.bgGreen(`OK |${new Date().toLocaleTimeString()}|${this.name}`) +
        ' ' +
        chalk.green(message)
    );
  }

  // Alias
  // INF
  public i(message: string): void {
    this.log(message);
  }
  public l(message: string): void {
    this.log(message);
  }
  public inf(message: string): void {
    this.log(message);
  }
  public info(message: string): void {
    this.log(message);
  }
  public m(message: string): void {
    this.log(message);
  }
  public msg(message: string): void {
    this.log(message);
  }
  public message(message: string): void {
    this.log(message);
  }
  public blue(message: string): void {
    this.log(message);
  }
  public b(message: string): void {
    this.log(message);
  }
  // ERR
  public error(message: string): void {
    this.err(message);
  }
  public e(message: string): void {
    this.err(message);
  }
  public fatal(message: string): void {
    this.err(message);
  }
  public stop(message: string): void {
    this.err(message);
  }
  public red(message: string): void {
    this.err(message);
  }
  public r(message: string): void {
    this.err(message);
  }
  // OK
  public o(message: string): void {
    this.ok(message);
  }
  public s(message: string): void {
    this.ok(message);
  }
  public success(message: string): void {
    this.ok(message);
  }
  public ready(message: string): void {
    this.ok(message);
  }
  public green(message: string): void {
    this.ok(message);
  }
  public g(message: string): void {
    this.ok(message);
  }

  constructor(name: string, stream: WriteStream) {
    this.name = name;
    this.stream = stream;
  }
}

class Plugog {
  public plugins: Map<string, PluginLogger>;

  private stream: WriteStream;

  constructor(stream: WriteStream) {
    this.plugins = new Map();
    if (stream !== null) this.stream = stream;
    else this.stream = new WriteStream();
  }

  public addPlugin(name: string): PluginLogger {
    return this.plugins
      .set(name, new PluginLogger(name, this.stream))
      .get(name);
  }

  public getPlugin(name: string): PluginLogger {
    return this.plugins.get(name);
  }

  public deletePlugin(name: string): void {
    this.plugins.delete(name);
  }
}

export default Plugog;
