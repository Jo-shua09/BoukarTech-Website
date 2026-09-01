export interface AppEvent {
  id: string;
  title: string;
  description: string;
  image_url: string;
  start_date: string;
  end_date: string;
  registration_link?: string;
  additional_info?: string;
  is_completed: boolean;
  created_at?: string;
}
