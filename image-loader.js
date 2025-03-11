export default function imageLoader({ src }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-website' : ''
  return `${basePath}${src}`
} 