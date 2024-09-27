/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/dashboard',
          destination: '/pages/dashboard',
        },
        {
          source: '/issues',
          destination: '/pages/issueListsPage', // Issues overview page
        },
        {
          source: '/issue/:id', // Dynamic route for issue details
          destination: '/pages/issueDetailPage', // Issue detail page
        },
        {
          source: '/reports',
          destination: '/pages/reportsAndAnlyticsPage', // Reports and Analytics page
        },
        {
          source: '/signin',
          destination: '/pages/signin', // Sign in page
        },
        {
          source: '/signup',
          destination: '/pages/signup', // Sign up page
        },
        {
          source: '/team-management',
          destination: '/pages/teamManagementPage', // Team Management page
        },
        {
          source: '/profile',
          destination: '/pages/userSetting', // User Profile & Settings page
        },
        {
          source: '/:path*', // Catch-all route for any other paths
          destination: '/pages/:path*', // Adjust destination as needed
        },
      ];
    },
  };
  
  export default nextConfig;
  