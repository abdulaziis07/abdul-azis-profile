import { AspectRatio } from "../ui/aspect-ratio";

type ImageComponentProps = {
  src: string | undefined;
  alt?: string;
  className?: string;
}

export const Image = ({ src, alt, className }: ImageComponentProps) => {
  return (
    <AspectRatio ratio={1 / 1}>
      <img aria-label="image" src={src} alt={alt} className={`w-48 md:w-64 lg:w-96 opacity-90 ml-2 rounded-full shadow-xl drop-shadow-xl animate-spin-slow ${className}`} />
    </AspectRatio>
  )
}
