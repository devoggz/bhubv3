export type CategoryTypes = {
  thumbnail: string;
  slug: string;
  name: string;
  [key: string]: any;
};

export interface PostTypes {
  $id: string;
  title: string;
  video: string;
  description: string;
  category: string;
}
export interface UserTypes {
  $id: string;
  username: string;
  avatar: string;
}

export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;
