<div align="center">
  <h1><a href="https://github.com/allquire/plugog" target="_blank">Plugog</a></h1>

  <p style="font-size: 20px;">Module Separated Logger.</p>

[![npm](https://nodei.co/npm/plugog.png)](https://npmjs.com/package/plugog)

![Language](https://img.shields.io/badge/language-typescript-orange?style=flat-square)
![Supports](https://img.shields.io/badge/support-javascript%7Ctypescript-brightgreen?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)
[![License](https://img.shields.io/github/license/allquire/plugog?style=flat-square)](https://github.com/allquire/plugog/blob/master/LICENSE)

</div>

Module Separated Logger.

## 👏 Screenshots

![Screenshot1](https://user-images.githubusercontent.com/20179549/74126481-fe6e8680-4c12-11ea-80a8-23dbcb8492eb.png)

![Screenshot2](https://user-images.githubusercontent.com/20179549/74126500-0b8b7580-4c13-11ea-80ac-33a09d89f609.png)

Please view [test.js](https://github.com/allquire/plugog/blob/master/test.ts).

## 🌟 Features

- Module separated.

- Log to the file and the console at the same time. (Or log to one only.)

- Printing with [chalk](https://www.npmjs.com/package/chalk).

- Log with different timestamp in different destinations.

- TypeScript friendly.

## 💨 Install

Install with yarn:

```sh
yarn add plugog
```

Install with npm:

```sh
npm i -S plugog
```

## 👉 Usage

Import and create Plugog instance:

```js
const Plugog = require('plugog')
const plugog = new Plugog()
```

```ts
import Plugog from 'plugog'
const plugog = new Plugog()
```

Optionally, specify a file to log in:

```js
const fs = require('fs')
const stream = fs.createWriteStream('./temp.log')
const plugog = new Plugog(stream)
```

```ts
import * as fs from 'fs'
const stream = fs.createWriteStream('./temp.log')
const plugog = new Plugog(stream)
```

Add a plugin:

```js
const log = plugog.addPlugin('core')
```

Plugog is now ready! Use the logging methods below like:

```js
log.i('Info Test.')
```

### INF

log(), inf(), info(), l(), i(), m(), msg(), message(), blue(), b()

Color: Cyan

Console Format: `INF|22:18:05|core Info Test.`

Log File Format: `[2020/2/7 22:18:05][INF][core]Info Test.`

### ERR

err(), error(), e(), fatal(), stop(), red(), r()

Color: Red

Console Format: `ERR|22:18:05|core Error Test.`

Log File Format: `[2020/2/7 22:18:05][ERR][core]Error Test.`

### OK

ok(), o(), s(), success(), ready(), green(), g()

Color: Green

Console Format: `OK |22:18:05|core Success Test.`

Log File Format: `[2020/2/7 22:18:05][OK ][core]Success Test.`

### WRN

warn(), wrn(), w(), warning(), orange(), yellow()

Color: Yellow

Console Format: `WRN|14:43:00|core Warn Test.`

Log File Format: `[2020/2/10 14:43:00][WRN][core]Warn Test.`

## 💬 BUGs & Issues

Feel free to [open issues](https://github.com/allquire/plugog/issues/new).

## 💻 Contributions

PRs are welcome! Feel free to contribute on this project.

## ⚠ LICENSE

MIT
