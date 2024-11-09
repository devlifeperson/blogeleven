import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "Literary Corner - Books & Beyond",
  description: "Book reviews, literary discussions, and writing resources.",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "Image Processing Tools",
    slug: "image-processing",
    tools: [
      {
        title: "Resize Images",
        desc: "Adjust image dimensions to fit various platforms.",
        href: "https://review360.info/image-resizer",
      },
      {
        title: "Compress Images",
        desc: "Reduce image size to optimize loading speeds.",
        href: "https://review360.info",
      },
      {
        title: "Image Format Conversion",
        desc: "Switch image formats like JPEG, PNG, and WebP.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Add Watermarks",
        desc: "Protect your images with custom watermarks.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Crop Images",
        desc: "Trim images to preferred dimensions.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Upload Images to Cloud",
        desc: "Store your images in the cloud for easy access.",
        href: "https://review360.info/upload-image",
      },
    ],
  },
  {
    title: "General Utility Tools",
    slug: "general-tools",
    tools: [
      {
        title: "Secure Password Generator",
        desc: "Generate complex passwords for enhanced security.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Browser Update Checker",
        desc: "Verify if your browser is current.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Public IP Finder",
        desc: "Get your device’s public IP address.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Code Formatter",
        desc: "Format code for better readability.",
        href: "https://tools360s.com/code-formatter",
      },
      {
        title: "Invoice Generator",
        desc: "Create professional invoices for transactions.",
        href: "https://tools360s.com/invoice-generator",
      },
    ],
  },
  {
    title: "Text Utilities",
    slug: "text-utilities",
    tools: [
      {
        title: "Word Counter",
        desc: "Count words and characters in your text.",
        href: "https://tools360s.com/word-counter",
      },
      {
        title: "Text Comparison",
        desc: "Highlight differences between two texts.",
        href: "https://tools360s.com/text-compare",
      },
    ],
  },
  {
    title: "SEO & Web Tools",
    slug: "seo-web-tools",
    tools: [
      {
        title: "Backlink Generator",
        desc: "Create backlinks to improve SEO ranking.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "Google Index Checker",
        desc: "Check if your site is indexed by Google.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "Redirect Checker",
        desc: "Inspect URL redirects for SEO health.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Meta Tag Analyzer",
        desc: "Optimize meta tags for search engines.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
      {
        title: "Security Check",
        desc: "Identify website security risks.",
        href: "https://tools360s.com/safe-browsing",
      },
      {
        title: "Google Cache Viewer",
        desc: "View cached versions of your pages on Google.",
        href: "https://tools360s.com/google-cache-checker/",
      },
    ],
  },
  {
    title: "Link Utilities",
    slug: "link-tools",
    tools: [
      {
        title: "Shorten URL",
        desc: "Create short, shareable links.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "QR Code Generator",
        desc: "Generate QR codes for easy sharing.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "URL Analytics",
        desc: "Monitor and analyze link performance.",
        href: "https://free-url.short360s.com/stats",
      },
    ],
  },
];
