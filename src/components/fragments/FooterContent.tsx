import { copyrightTime } from "@/utils/copyrightTime";
import { Description } from "@/components/elements/Description";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/utils/socialLinks";

export const FooterContent = ({ author }: { author: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-2">
        <div>
          <a href={socialLinks[0].href} target="_blank">
            <Button variant={"ghost"}>
              <GitHubLogoIcon />
            </Button>
          </a>
        </div>
        <div>
          <a href={socialLinks[1].href} target="_blank">
            <Button variant={"ghost"}>
              <InstagramLogoIcon />
            </Button>
          </a>
        </div>
        <div>
          <a href={socialLinks[2].href} target="_blank">
            <Button variant={"ghost"}>
              <TwitterLogoIcon />
            </Button>
          </a>
        </div>
      </div>
      <div>
        <Description>
          &copy; {copyrightTime.toString()} by {author}
        </Description>
        <Description>All right them reserved.</Description>
      </div>
    </div>
  );
};
