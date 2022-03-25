import { createCommand } from 'commander'
import { readdir } from 'fs/promises'
import { resolve } from 'path'

async function main() {
  const opts = createCommand()
    // example: yarn generate-sdk --only sourcify
    .option('--only, --filter [substring]', 'substring to generate sdk only for some directories', '')
    .parse()
    .opts<{ filter: string }>()

  const directories = await readdir(resolve(__dirname), { withFileTypes: true }).then((dirents) =>
    dirents.filter((dirent) => dirent.isDirectory()),
  )

  for (const directory of directories.filter((x) => x.name.includes(opts.filter))) {
    await import(resolve(__dirname, directory.name, 'generate.ts'))
  }
}

void main().catch((err) => {
  console.error(err)
  process.exit(1)
})
