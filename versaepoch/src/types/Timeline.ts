export interface Source {
  title: string;
  url: string;
}

type CardType =
  | 'milestone'
  | 'update'
  | 'feature'
  | 'model'
  | 'announcement'
  | 'product'
  | 'research'
  | 'company';

export type NonEmptyCardTypeArray = [CardType, ...CardType[]];

export interface TimelineCardType {
  id: string;
  chatbot: string;
  title: string;
  short_description: string;
  full_description: string;
  type: NonEmptyCardTypeArray;
  date: string;
  banner_image?: string;
  year: '2022' | '2023' | '2024' | '2025';
  sources: Source[];
}

export type FAQChatbotType = {
  title: string;
  answer: string;
};

{
  /* TODO: Figure out a way to use markdown to use bullet points, headings, etc. for full_description param*/
  /* TODO: Use Cases Section for model card, should be optional */
  /* TODO: Reference to other cards like "GPT-4.1 in ChatGPT" can have a reference to "GPT-4.1" model card release */
}

{
  /* IMPORTANT: If there is no title in ChatGPT release note use this: "ChatGPT Release Notes" as a source title */
  /* IMPORTANT: Some info like BrowseComp, HealthBench don't really relate to ChatGPT but more for AI Research from OpenAI, so 
    since I want to tell the evolution of ChatGPT, 
    I need to move that data to another page called "Research" with options: "OpenAI", "Anthropic", "Google" */
}
