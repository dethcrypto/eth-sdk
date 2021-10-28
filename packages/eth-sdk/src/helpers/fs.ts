import fs from 'fs'
import fsExtra from 'fs-extra'
import mkdirp from 'mkdirp'
import { dirSync } from 'tmp'

export interface Fs {
  exists(path: string): boolean
  write(path: string, contents: string): void
  ensureDir(path: string): void
  copy(src: string, dest: string): void
  readDir(path: string): string[]
  tmpDir(prefix: string): string
}

export const realFs: Fs = {
  exists: fs.existsSync,
  write: (p, c) => fs.writeFileSync(p, c),
  ensureDir: (p) => mkdirp.sync(p),
  copy: (src, dest) => fsExtra.copySync(src, dest),
  readDir: (path) => fsExtra.readdirSync(path),
  tmpDir: (prefix) => dirSync({ prefix }).name,
}
