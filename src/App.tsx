import { Main } from "@/components/layouts/Main";
import { ProfileLayout } from "@/components/layouts/ProfileLayout";
import { useProfileData } from "@/hooks/useProfileData";

export default function App() {
  const { data, isLoading } = useProfileData();
  return (
    <Main>
      <ProfileLayout data={data} isLoading={isLoading} />
    </Main>
  );
}
