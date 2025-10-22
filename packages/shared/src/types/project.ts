export interface Project {
  id: string;
  title: string;
  image_url: string;
  gif_url?: string;
  live_demo_url?: string;
  youtube_video_id?: string;
  /**
   * A short description of the project. Can contain Markdown.
   */
  short_description: string;
  /**
   * A case study content of the project. Can contain Markdown.
   */
  case_study_content: string;
  /**
   * A case study bullets for the project. Can contain Markdown.
   */
  case_study_bullets: string;
}
