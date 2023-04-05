type Post = {
  id: number;
  attributes: {
    title: string;
    description: string;
    publishedAt: string;
    photo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

export default Post;
