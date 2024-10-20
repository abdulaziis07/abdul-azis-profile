import { axiosInstance } from "@/lib/axiosInstance";
import { ProfileDataType } from "@/types/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { AxiosResponse } from "axios";

export const useProfileData = (): UseQueryResult<ProfileDataType> => {
  return useQuery({
    queryKey: ['useProfileDataQuery'],
    queryFn: async () => {
      const profileDataResponse: AxiosResponse<ProfileDataType> = await axiosInstance.get('/abdulaziis07');
      return profileDataResponse.data;
    }
  });
}
