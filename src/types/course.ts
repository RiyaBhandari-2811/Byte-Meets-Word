export interface ICourse {
  _id: string;
  title: string;
  featureImage: string;
  description: string;
  duration: string;
  youtubeLink: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface IGetCoursesResponse {
  name: string;
  courses: ICourse[];
  total: number;
  page: number | string;
  totalPages: number;
}
