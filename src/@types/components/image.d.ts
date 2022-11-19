interface ApiResponse {
  hits: Image[];
}

interface Image {
  tags: string;
  views: number;
  likes: number;
  webformatURL: string;
  imageSize: number;
}