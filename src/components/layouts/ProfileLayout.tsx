import { Card } from "@/components/ui/card";
import { ProfileHeader } from "@/components/fragments/ProfileHeader";
import { ProfileContent } from "@/components/fragments/ProfileContent";
import { ProfileFooter } from "@/components/fragments/ProfileFooter";
import { ProfileDataType } from "@/types/types";
import { Footer } from "@/components/layouts/Footer";
import { Image } from "@/components/elements/Image";
import { Title } from "@/components/elements/Title";
import { Badge } from "@/components/elements/Badge";
import { Description } from "@/components/elements/Description";
import { Separator } from "@/components/ui/separator";
import { ButtonLoading } from "@/components/elements/ButtonLoading";
import { PronounAddon } from "@/components/elements/PronounAddon";

type ProfileLayoutComponentProps = {
  data: ProfileDataType | undefined;
  isLoading: boolean;
};

export const ProfileLayout = ({
  data,
  isLoading
}: ProfileLayoutComponentProps) => {
  return (
    <section>
      {isLoading ? (
        <ButtonLoading />
      ) : (
        <>
          <Card>
            <ProfileHeader>
              <Image src={data?.avatar_url} alt={data?.login} />
              <Title>
                Abdul Azis <PronounAddon />
              </Title>
              <div className="flex">
                <Badge variant="secondary">Student</Badge>
                <Badge variant="default">Software Engineering</Badge>
              </div>
              <Separator orientation="horizontal" />
            </ProfileHeader>
            <ProfileContent>
              <Description>
                As a student who majoring in Software Engineering, i have been
                learned about programming when i was entered High School.
              </Description>
            </ProfileContent>
            <ProfileFooter>
              <Description className="text-lg animate-bounce">This site is under development...</Description>
            </ProfileFooter>
            <Footer />
          </Card>
        </>
      )}
    </section>
  );
};
