/**
 * Response of https://connpass.com/api/v1/event/
 */
export interface ConnpassEventsResponse {
  results_returned: number;
  events: EventsItem[];
  results_start: number;
  results_available: number;
}

/** An event */
export interface EventsItem {
  event_url: string;
  event_type: string;
  owner_nickname: string;
  series: Series;
  updated_at: string;
  lat: string;
  started_at: string;
  hash_tag: string;
  title: string;
  event_id: number;
  lon: string;
  waiting: number;
  limit: number;
  owner_id: number;
  owner_display_name: string;
  description: string;
  address: string;
  'catch': string;
  accepted: number;
  ended_at: string;
  place: string;
}

/** A series */
export interface Series {
  url: string;
  id: number;
  title: string;
}
  