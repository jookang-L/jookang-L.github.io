/** @type {import('next').NextConfig} */
const isWindowsNonCDrive = process.platform === 'win32' && !/^c:\\/i.test(process.cwd())

const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    if (isWindowsNonCDrive) {
      config.cache = false
    }

    return config
  },
}

export default nextConfig
