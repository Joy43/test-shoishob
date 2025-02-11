/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*', 
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'another-allowed-domain.com',  
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'fastdeals.ecommatrix.xyz', 
          port: '',
          pathname: '/storage/app/public/product/**', 
        }
        
      ],
    },
    webp: {
      preset: "default",
      quality: 100,
    },
    
  };

export default nextConfig;
