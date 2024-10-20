import { ReactElement } from "react";

export type LinkTypeWithIcons = {
  id: number;
  title?: string;
  href: string;
  icons: ReactElement
}

export type LinkType = {
  id: number;
  title: string;
  href?: string;
}

export type ProfileDataType = {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string | undefined;
  gravatar_id?: string;
  url?: string;
  html_ul?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
}

export type SocialLinksType = {
  id: number;
  href: string;
}
