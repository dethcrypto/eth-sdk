import * as minimatch from 'minimatch'

import { Fs } from '../src/peripherals/fs'

type FilePath = string
type FileContents = string
const DirectoryMarker = Symbol('Directory')
type DirectoryMarker = typeof DirectoryMarker

export function mockFilesystem(files: Record<FilePath, FileContents | DirectoryMarker>): Fs {
  return {
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
      return Object.keys(files).filter(file => file.startsWith(path))
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
}
