/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            }
        ]
    }
    // reactStrictMode: true,
    // images: {
    //     domains: ["egov.eletsonline.com", "cdn.friendsoftheearth.uk", "media.istockphoto.com", "www.forbesindia.com", "factly.in", "i0.wp.com", "example.com", "www.figo.org", "www.gsb.or.th", "assets.isu.pub", "www.lifepathgroup.co.za", "www.anocolympic.org", "www.devdiscourse.com", "goodneighbors.ph", "peachyessay.com", "news.artnet.com"]
    // },
};

export default nextConfig;
