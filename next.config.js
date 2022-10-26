/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images:{
//     domains: ["links.papareact.com"],
//   },
// };

// module.exports = {nextConfig}

// You should only put public keys inside this file. PR IVATE KEYS SHOULD NOT BE HERE.


module.exports = {
  images: {
    domains: ["links.papareact.com",
    "images.squarespace-cdn.com",
    "images.contentstack.io",
    "a0.muscache.com"],
  },
  env:{
    mapbox_key: 'pk.eyJ1Ijoic2hpdDE2MDkiLCJhIjoiY2w5bnZvb3N1MDJrbjNucWM3djlpMnppaiJ9.WmBjDawr6J_EDBt8jDMGjA'
  }
};
