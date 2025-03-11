export default function imageLoader({ src }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/portfolio-website' : ''
  return `${baseUrl}${src}`
} 