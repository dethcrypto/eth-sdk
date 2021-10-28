import fs from 'fs'
import fsExtra from 'fs-extra'
import mkdirp from 'mkdirp'
import { dirSync } from 'tmp'

export interface Fs {
  exists(path: string): boolean
  write(path: string, contents: any): void
  ensureDir(path: string): void
  copy(src: string, dest: string): void
  tmpDir(prefix: string): string
}

export const realFs: Fs = {
  exists: fs.existsSync,
  write: (p, c) => fs.writeFileSync(p, c),
  ensureDir: (p) => mkdirp.sync(p),
  copy: (src, dest) => fsExtra.copySync(src, dest),
  tmpDir: (prefix) => dirSync({ prefix }).name,
}
