type Post = {
  id: number;
  title: string;
  lead: string;
  publishedAt: string;
  estimatedReadingTime: number;
  label: string;
  body: string;
  photo: {
    url: string;
  };
};

export default Post;
