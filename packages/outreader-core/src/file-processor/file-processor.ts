import * as fs from "fs";
import * as path from "path";
import * as readline from "readline";
import * as iconv from "iconv-lite";

/**
 * @description read a text file line by line
 * @param path: string;
 * @param processFunc: function;
 */
export async function readLineByLine(
  pathName: string,
  processFunc: (line: string) => any,
  options: IOptions = {}
) {
  if (!fs.existsSync(pathName)) {
    throw new Error(`Can not find ${pathName}!`);
  }

  const rl = readline.createInterface({
    input: ensureUtf8Stream(pathName, options.encoding),
  });

  for await (const line of rl) {
    processFunc(line);
  }
}

function ensureUtf8Stream(pathName: string, encoding?: string) {
  const extname = path.extname(pathName);
  let stream;

  if (encoding) {
    stream = fs
      .createReadStream(pathName)
      .pipe(iconv.decodeStream(encoding))
      .pipe(iconv.encodeStream("utf8"));
  } else if (extname === ".out" || extname === ".OUT") {
    stream = fs
      .createReadStream(pathName)
      .pipe(iconv.decodeStream("gb2312"))
      .pipe(iconv.encodeStream("utf8"));
  } else {
    stream = fs.createReadStream(pathName);
  }

  return stream;
}

export interface IOptions {
  encoding?: string;
}