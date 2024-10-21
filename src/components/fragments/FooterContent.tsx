import { copyrightTime } from "@/utils/copyrightTime";
import { Description } from "@/components/elements/Description";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  DiscordLogoIcon
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/utils/socialLinks";

export const FooterContent = ({ author }: { author: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="grid grid-cols-2 -p-2">
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
        <div>
          <a href="">
            <Button variant={"ghost"}>
              <DiscordLogoIcon />
            </Button>
          </a>
        </div>
      </div>
      <div>
        <Description>
          &copy; {copyrightTime.toString()} by {author}
        </Description>
        <Description className="ml-4">All rights reserved.</Description>
      </div>
    </div>
  );
};
