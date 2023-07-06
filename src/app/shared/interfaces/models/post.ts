import {Category, User} from "./index";
// import {User} from "./user";

export interface Post {
  "@id": string;
  id: number;
  title: string;
  slug: string;
  content: string;
  isActive: boolean;
  imageName: string;
  createdAt: Date;
  category: Category;
  user: User;
}
