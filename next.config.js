/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["res.cloudinary.com","img.freepik.com"],
 
   },
 
}

const withBundleAnalyzer=require('@next/bundle-analyzer')({
  enabled:process.env.ANALYZE==='true'
})
module.exports = withBundleAnalyzer(nextConfig)
