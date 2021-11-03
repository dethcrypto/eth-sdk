import { Mock, mockFn } from 'earljs'
import * as minimatch from 'minimatch'

import { Fs } from '../src/peripherals/fs'
import { unsafeEntries } from '../src/utils/unsafeKeys'

type FilePath = string
type FileContents = string
const DirectoryMarker = Symbol('Directory')
// eslint-disable-next-line @typescript-eslint/no-redeclare
type DirectoryMarker = typeof DirectoryMarker

type MockOf<F extends (...args: any[]) => any> = Mock<Parameters<F>, ReturnType<F>>

type FsMocks = {
  [P in keyof Fs]: MockOf<Fs[P]>
}

export function mockFilesystem(files: Record<FilePath, FileContents | DirectoryMarker>) {
  files = { ...files }

  const fs: Fs = {
    async write(path, contents) {
      files[path] = contents
    },
    async copy(src, dest) {
      files[dest] = files[src]
    },
    async ensureDir(path) {
      files[path] = DirectoryMarker
    },
    exists(path) {
      return path in files
    },
    async readDir(path) {
      return Object.keys(files).filter((file) => file.startsWith(path))
    },
    async tmpDir(prefix) {
      const dir = `${prefix}-${Math.random()}`
      files[dir] = DirectoryMarker
      return dir
    },
    async glob(pattern, options) {
      return Object.keys(files).filter(minimatch.filter(pattern, options))
    },
  }

  return Object.fromEntries(unsafeEntries(fs).map(([key, fn]) => [key, mockFn(fn)] as const)) as FsMocks
}
