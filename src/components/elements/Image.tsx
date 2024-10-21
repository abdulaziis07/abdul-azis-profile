import { AspectRatio } from "../ui/aspect-ratio";

type ImageComponentProps = {
  src: string | undefined;
  alt?: string;
  className?: string;
}

export const Image = ({ src, alt, className }: ImageComponentProps) => {
  return (
    <AspectRatio ratio={1 / 1}>
      <img aria-label="image" src={src} alt={alt} className={`w-48 md:w-64 lg:w-96 opacity-90 ml-4 rounded-full shadow-xl drop-shadow-xl ring-1 ring-slate-900 animate-spin-slow transition-all ease-in-out hover:opacity-100 ${className}`} />
    </AspectRatio>
  )
}
