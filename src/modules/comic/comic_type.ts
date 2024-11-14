export type comicType = {
  comicTitle: string;
  comicDiscription: string;
  comicCoverPhoto: string;
  comicCoverPhoto2: string;
  comicUrl: string;
  comicStatus: "Ongoing" | "Completed" | "Stoped";
  comicTags: string[];
  comicChapters: string[];
  comicReleaseDate: string;
  comicRating: string[];
  like: number;
  views: number;
};
