export interface Blessing {
  id: string;
  sender: string;
  relation: string;
  message: string;
  date: string;
}

export interface RsvpSubmission {
  name: string;
  phoneOrEmail: string;
  attending: 'yes' | 'no';
  guestsCount: number;
  dietary: string;
  wishes: string;
  submittedAt: string;
}

export interface TimelineEvent {
  time: string;
  timeSinhala: string;
  title: string;
  titleSinhala: string;
  description: string;
  iconName: 'ring' | 'scroll' | 'utensils' | 'music' | 'sparkles' | 'car';
}
