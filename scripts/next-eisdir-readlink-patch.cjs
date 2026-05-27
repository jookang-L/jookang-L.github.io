const fs = require('fs')

const isWindowsNonCDrive = process.platform === 'win32' && !/^c:\\/i.test(process.cwd())

if (isWindowsNonCDrive) {
  const readlink = fs.readlink
  const readlinkSync = fs.readlinkSync
  const readlinkPromise = fs.promises.readlink.bind(fs.promises)
  const ignoredReadlinkCodes = new Set(['EINVAL', 'ENOENT', 'UNKNOWN', 'EISDIR'])

  function isIgnoredReadlinkError(error) {
    return error && ignoredReadlinkCodes.has(error.code)
  }

  // On Windows non-C drives, Node can report EISDIR for readlink() on normal files.
  // Next/webpack tracing expects non-symlink paths to behave like EINVAL/ENOENT.
  fs.readlink = function patchedReadlink(path, options, callback) {
    if (typeof options === 'function') {
      callback = options
      options = undefined
    }

    return readlink.call(fs, path, options, (error, linkString) => {
      if (isIgnoredReadlinkError(error)) {
        callback(null, null)
        return
      }

      callback(error, linkString)
    })
  }

  fs.readlinkSync = function patchedReadlinkSync(path, options) {
    try {
      return readlinkSync.call(fs, path, options)
    } catch (error) {
      if (isIgnoredReadlinkError(error)) {
        return null
      }

      throw error
    }
  }

  fs.promises.readlink = async function patchedReadlinkPromise(path, options) {
    try {
      return await readlinkPromise(path, options)
    } catch (error) {
      if (isIgnoredReadlinkError(error)) {
        return null
      }

      throw error
    }
  }
}
