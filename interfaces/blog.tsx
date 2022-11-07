export interface Blog {
  title: string;
  content: string;
  category: {
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
  author: {};
}
