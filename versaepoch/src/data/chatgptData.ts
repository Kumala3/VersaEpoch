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

export interface TimelineCard {
  id: string;
  chatbot: string;
  title: string;
  short_description: string;
  full_description: string;
  type: NonEmptyCardTypeArray;
  date: string;
  year: '2022' | '2023' | '2024' | '2025';
  sources: Source[];
}

{
  /* TODO: Figure out a way to use markdown to use bullet points, headings, etc. for full_description param*/
  /* TODO: Use Cases Section for model card, should be optional */
  /* TODO: Reference to other cards like "GPT-4.1 in ChatGPT" can have a reference to "GPT-4.1" model card release */
}

{
  /* IMPORTANT: If there is no title in ChatGPT release note use this: "ChatGPT Release Notes" as a source title */
  /* IMPORTANT: Some info like BrowseComp, HealthBench don't really relate to ChatGPT but more for AI Research from OpenAI, so 
  since I want to tell the evolution of ChatGPT, I need to move that data to another page called "Research" with options: "OpenAI", "Anthropic", "Google" */
  /* IMPORTANT: impact property isn't really measurable, so I consider it's best removing it  */
}

export const faqElements = [
  {
    title: 'What is ChatGPT?',
    content:
      "ChatGPT is chatbot developed by OpenAI that can understand, collaborate and help you be more productive. Whether you're a business analytic, artist, programmer or cooker, you will definitely find a use case for your job or daily live.",
  },
  {
    title: 'How does ChatGPT work?',
    content:
      'ChatGPT uses different LLMs (Large Language Models) that analyze, think and respond pretty much like humans.  It predicts the next sequences of words to generate coherent and contextually relevant answers even to complex queries from STEM, Math & Programming fields.',
  },
  {
    title: 'Is ChatGPT free to use?',
    content:
      'OpenAI offers quite generous free tier with certain limits on specific models but you can send up to 80 messages every 4hours using the default model. To learn more about ChatGPT Limitations, CLICK HERE',
  },
  {
    title: 'What can I ask ChatGPT?',
    content:
      'You can ask ChatGPT about general knowledge, coding help, writing assistance, brainstorming ideas, language translation, and more. It responds best to clear, specific prompts.',
  },
  {
    title: 'Is my data private?',
    content:
      'OpenAI takes data privacy seriously. Conversations are encrypted in transit, and you can opt out of data usage for model training in settings if offered by your plan. Learn more [here](https://help.openai.com/en/articles/8554402-gpts-data-privacy-faqs)',
  },
  {
    title: 'How accurate is ChatGPT?',
    content:
      'ChatGPT"s accuracy often depends on the model you choose. Reasoning models (e.g. o1, o4-mini) think more before respond to deeply understand the problem, come up with a solution and provide answer, which enhances quality and accuracy but takes more time. ChatGPT still responds with hallucinations, which are facts or information that don"t exist or were made up by it. Always verify critical information from reliable sources before acting on it.',
  },
  {
    title: 'Can ChatGPT write code?',
    content:
      'Yes. ChatGPT can generate, explain, and debug code snippets in many popular programming languages. It’s a helpful assistant for software development tasks.',
  },
  {
    title: 'What languages does ChatGPT support?',
    content:
      'ChatGPT supports over 95 language officially with English being the most used. ChatGPT can engage with 4.5 billion native speakers in 58 languages by automatically recognizing the language of communication. This eliminates the need for manual setup, allowing for effortless multilingual interactions across its vast language range.',
  },
  {
    title: 'Can I integrate ChatGPT into my application?',
    content:
      'Yes. OpenAI provides a powerful API that lets you integrate its models into your applications with a vibrant community of over 500K developers.',
  },
  {
    title: 'What are ChatGPT’s limitations?',
    content:
      'ChatGPT’s limitations is a broad topic, however, generally speaking there are 2 main types of ChatGPT’s limitations: "bias", "knowledge cutoff". "hallucinations".',
  },
];
