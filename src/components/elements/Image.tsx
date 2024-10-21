import { AspectRatio } from "../ui/aspect-ratio";

type ImageComponentProps = {
  src: string | undefined;
  alt?: string;
  className?: string;
}

export const Image = ({ src, alt, className }: ImageComponentProps) => {
  return (
    <AspectRatio ratio={1 / 1}>
      <img aria-label="image" src={src} alt={alt} className={`w-48 lg:w-64 opacity-90 rounded-full ml-3 shadow-xl drop-shadow-xl ring-1 ring-slate-900 animate-spin-slow transition-all ease-in-out hover:opacity-100 ${className}`} />
    </AspectRatio>
  )
}
