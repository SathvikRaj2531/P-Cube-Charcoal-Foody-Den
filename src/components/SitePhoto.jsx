import { useEffect, useRef, useState } from 'react';
import ApperIcon from '@/components/ApperIcon';

export default function SitePhoto({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);
  // An <img> that errored before hydration never delivers onError, so re-check once mounted.
  useEffect(() => { const el = ref.current; if (el?.complete && el.naturalWidth === 0) setFailed(true); }, []);
  const url = src.startsWith('https://images.unsplash.com') ? `${src}?auto=format&fit=crop&w=900&q=80` : src;
  return failed ? <div role="img" aria-label={`${alt} — image unavailable`} className={`flex items-center justify-center bg-muted text-muted-foreground ${className}`}><ApperIcon name="ImageOff" className="h-8 w-8" /></div> :
    <img ref={ref} src={url} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} className={className} />;
}
