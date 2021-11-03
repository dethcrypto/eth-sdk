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

  const normalize = (path: string) => path.replace(/\\/g, '/')

  const fs: Fs = {
    async write(path, contents) {
      files[normalize(path)] = contents
    },
    async copy(src, dest) {
      files[normalize(dest)] = files[normalize(src)]
    },
    async ensureDir(path) {
      files[normalize(path)] = DirectoryMarker
    },
    exists(path) {
      return normalize(path) in files
    },
    async readDir(path) {
      return Object.keys(files).filter((file) => file.startsWith(normalize(path)))
    },
    async tmpDir(prefix) {
      const dir = `${normalize(prefix)}-${Math.random()}`
      files[dir] = DirectoryMarker
      return dir
    },
    async glob(pattern, options) {
      return Object.keys(files).filter(minimatch.filter(pattern, options))
    },
  }

  const fsMocks = Object.fromEntries(unsafeEntries(fs).map(([key, fn]) => [key, mockFn(fn)] as const)) as FsMocks

  return {
    ...fsMocks,
    test: {
      toString() {
        return (
          'mocked filesystem:\n\n' +
          Object.entries(files)
            .map(([path, contents]) => `${path}: ${contents.toString()}`)
            .join('\n\n')
        )
      },
      isDirectory(path: string) {
        return files[normalize(path)] === DirectoryMarker
      },
      readJson(path: string) {
        return JSON.parse(files[normalize(path)])
      },
    },
  }
}
