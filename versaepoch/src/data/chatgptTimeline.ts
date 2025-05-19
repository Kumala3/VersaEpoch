interface Source {
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
  | 'company'
  ;

export type NonEmptyCardTypeArray = [CardType, ...CardType[]];

export interface TimelineCardData {
  title: string;
  short_description: string;
  full_description: string;
  type: NonEmptyCardTypeArray;
  impact: 'tiny' | 'small' | 'medium' | 'big';
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

export const timelineCards: TimelineCardData[] = [
  {
    title: 'ChatGPT Release',
    short_description:
      'OpenAI released ChatGPT to the public. Built on GPT-3.5, it quickly gained popularity for its ability to answer questions and generate content conversationally.',
    full_description:
      "On November 30, 2022, OpenAI released ChatGPT to the public as a free research preview. This marked a significant milestone in the development of conversational AI systems.\n\nBuilt on OpenAI's GPT-3.5 architecture, ChatGPT quickly gained unprecedented popularity, reaching over a million users within just five days of its release.\n\nThe system demonstrated remarkable capabilities in natural language understanding and generation, setting it apart from previous chatbots and AI assistants.\n\nUsers were impressed by ChatGPT's ability to maintain context throughout conversations, answer complex questions, assist with writing and coding tasks, explain difficult concepts, and even engage in creative writing.\n\nThe public release served multiple purposes for OpenAI: gathering user feedback to improve the system, understanding its limitations in real-world use cases, and addressing potential safety concerns.\n\nChatGPT immediately sparked discussions about the future of AI, its impact on various industries, and the ethical considerations surrounding increasingly capable language models.\n\nEducators raised concerns about students using the tool for completing assignments, leading to debates about AI detection tools and changes to educational practices.\n\nBusiness leaders quickly recognized the potential of the technology to transform customer service, content creation, and knowledge management functions.\n\nThe release also initiated a race among tech companies to develop and release competing AI systems, accelerating the pace of innovation in the field.\n\nDespite its impressive capabilities, early versions of ChatGPT had notable limitations, including a knowledge cutoff date, occasional factual errors, and sensitivity to input phrasing.\n\nChatGPT represented a new paradigm in human-AI interaction, moving from keyword-based search to natural conversation, fundamentally changing how people interact with AI systems.\n\nThe system's ability to generate human-like text raised questions about AI attribution, copyright, and the potential for misuse in creating misleading content.\n\nOpenAI implemented various safety measures and content policies to prevent harmful outputs, though these systems continued to evolve based on user feedback.\n\nThe release demonstrated the commercial potential of large language models, setting the stage for OpenAI's subsequent business model developments.\n\nChatGPT's popularity led to frequent capacity issues in its early days, with users often encountering \"at capacity\" messages during peak usage times.\n\nThe technology caught the attention of investors, with Microsoft deepening its partnership with OpenAI shortly after ChatGPT's release.\n\nMany users reported using ChatGPT as a personal tutor, creative partner, or programming assistant, showcasing the versatility of the technology.\n\nThe release also highlighted the computational requirements of running advanced AI systems, sparking discussions about the environmental impact of AI.\n\nChatGPT's debut represented the culmination of years of research in natural language processing, reinforcement learning, and human feedback mechanisms.\n\nIn retrospect, the release of ChatGPT is considered a defining moment in the history of artificial intelligence, bringing sophisticated AI capabilities to the general public for the first time.",
    type: ['milestone'],
    impact: 'big',
    date: 'November 30, 2022',
    year: '2022',
    sources: [
      {
        title: 'Introducing ChatGPT - OpenAI',
        url: 'https://openai.com/index/chatgpt/',
      },
      {
        title: 'ChatGPT - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/ChatGPT',
      },
    ],
  },
  {
    title: 'ChatGPT Plus Subscription',
    short_description:
      'OpenAI launched ChatGPT Plus, a $20/month subscription service offering priority access during peak times, faster response times, and early access to new features.',
    full_description:
      'On February 1, 2023, OpenAI introduced ChatGPT Plus, the company\'s first subscription service for ChatGPT, priced at $20 per month.\n\nThe subscription model was developed in response to the overwhelming demand for ChatGPT, which frequently led to service disruptions and capacity issues for free users.\n\nChatGPT Plus subscribers received multiple benefits, including guaranteed access during peak usage periods when free users might encounter "at capacity" messages.\n\nSubscribers also enjoyed faster response times, which was particularly valuable for complex tasks or extended conversations that required multiple interactions.\n\nPerhaps most significantly, Plus subscribers were promised early access to new features and improvements before they were made available to free users.\n\nThis tiered approach represented OpenAI\'s first attempt to monetize ChatGPT directly, creating a sustainable business model while maintaining free access for the general public.\n\nThe pricing strategy was carefully calibrated to be accessible to individual professionals while generating sufficient revenue to support the considerable computational costs of running the service.\n\nOpenAI also announced plans to explore lower-cost plans, business plans, and data packages for higher-volume users in the future.\n\nThe subscription service helped OpenAI manage server load and capacity, ensuring more reliable service for both paying and non-paying users.\n\nChatGPT Plus demonstrated strong market demand, with many users willingly paying for improved reliability and performance despite the continued availability of the free tier.\n\nThe launch coincided with increased enterprise interest in the technology, as businesses began exploring how conversational AI could enhance their operations.\n\nOpenAI emphasized that revenue from ChatGPT Plus would help support free access to ChatGPT, positioning the premium tier as beneficial to all users.\n\nThe subscription service created a direct relationship between OpenAI and end users, complementing the company\'s API business serving developers and organizations.\n\nChatGPT Plus subscribers were the first to gain access to GPT-4 when it was released in March 2023, validating the "early access to new features" promise.\n\nThe introduction of a premium tier also helped segment the market, allowing OpenAI to gather insights about different user needs and willingness to pay.\n\nThe subscription launch occurred at a time of increased competition in the AI space, with several companies announcing plans to release rival chatbot technologies.\n\nThe service initially launched in the United States before gradually expanding to additional countries and regions.\n\nThis business model innovation demonstrated that consumer AI applications could generate direct revenue, not just value for the larger ecosystems of tech giants.\n\nOpenAI implemented a waitlist system for ChatGPT Plus initially, gradually inviting users to subscribe as capacity allowed.\n\nThe subscription service helped establish the precedent that advanced AI capabilities could command premium pricing in the consumer market.\n\nChatGPT Plus represented an important step in OpenAI\'s evolution from a research-focused organization to a product company with sustainable revenue streams.',
    type: ['feature'],
    impact: 'medium',
    date: 'February 1, 2023',
    year: '2023',
    sources: [
      {
        title: 'OpenAI Launches ChatGPT Plus for $20/Month, but Only in the US',
        url: 'https://www.linkedin.com/pulse/openai-launches-chatgpt-plus-20month-only-us-itegrators',
      },
    ],
  },
  {
    title: 'GPT-4 Arrival',
    short_description:
      'OpenAI released GPT-4 to ChatGPT Plus subscribers, significantly improving reasoning, creativity, and handling of nuanced instructions compared to GPT-3.5.',
    full_description:
      "On March 14, 2023, OpenAI integrated GPT-4, its most advanced language model at the time, into ChatGPT for Plus subscribers, marking a significant leap in AI capabilities.\n\nGPT-4 demonstrated substantially improved reasoning abilities compared to GPT-3.5, enabling it to solve complex problems with greater accuracy and logical coherence.\n\nThe model showed enhanced performance on standardized tests, scoring in the 90th percentile on the Uniform Bar Exam and achieving a 5 on several AP exams, demonstrating its breadth of knowledge.\n\nGPT-4's creative capabilities were noticeably improved, allowing it to generate more nuanced, original, and contextually appropriate content across various domains and styles.\n\nThe model exhibited significantly better ability to follow complex, multi-part instructions, understanding the nuances of user requests and addressing all aspects of complicated prompts.\n\nGPT-4 showed marked improvement in \"steerability,\" allowing users to prescribe a specific tone, style, or persona that the system would consistently maintain throughout a conversation.\n\nThe integration brought improved factual accuracy and reduced hallucinations, though OpenAI acknowledged that the model still wasn't completely reliable for factual queries.\n\nGPT-4 introduced a larger context window, initially 8K tokens and later 32K tokens, allowing for much longer conversations and the processing of more extensive documents.\n\nThe model demonstrated enhanced capabilities in specialized domains like coding, mathematics, and creative writing, making it more useful for professional applications.\n\nGPT-4 showed improved understanding of nuance and implicit meaning in text, catching subtleties that GPT-3.5 might miss in complex conversations.\n\nThe integration preserved user conversations and settings, ensuring a seamless upgrade experience for existing ChatGPT Plus subscribers.\n\nGPT-4 featured more robust safety mechanisms, with improved ability to decline inappropriate requests without generating harmful content.\n\nThe model exhibited better multilingual capabilities, providing more accurate and nuanced responses across many languages beyond English.\n\nThe initial release limited GPT-4 usage per user to prevent system overload, with usage caps gradually increasing as OpenAI scaled its infrastructure.\n\nThe integration reinforced the value proposition of ChatGPT Plus, as it became the only way for individual users to access GPT-4 outside of developing with the API.\n\nGPT-4's improvements were achieved through an iterative alignment process using reinforcement learning from human feedback, further refining the model's outputs.\n\nThe model still maintained knowledge limitations with a training cutoff date, though it demonstrated more sophisticated reasoning with the information it did have.\n\nThe GPT-4 integration in ChatGPT highlighted the rapid pace of advancement in AI capabilities, arriving just months after the initial release of ChatGPT.\n\nOpenAI described GPT-4 as a \"multimodal\" model, though the initial ChatGPT integration only utilized its text capabilities, with image input coming later.\n\nThe improvement from GPT-3.5 to GPT-4 represented one of the most significant single generational improvements in the history of large language models at that time.\n\nThe integration solidified ChatGPT's position as the leading consumer-facing AI assistant, setting a new standard that competitors would strive to match.",
    type: ['model'],
    impact: 'big',
    date: 'March 14, 2023',
    year: '2023',
    sources: [
      {
        title: 'GPT-4 - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/GPT-4',
      },
      {
        title: 'OpenAI - GPT 4 Research',
        url: 'https://openai.com/index/gpt-4-research/',
      },
      {
        title:
          'OpenAI releases GPT-4, a multimodal AI that it claims is state-of-the-art',
        url: 'https://techcrunch.com/2023/03/14/openai-releases-gpt-4-ai-that-it-claims-is-state-of-the-art/',
      },
    ],
  },
  {
    title: 'Web Browsing & Plugins Rollout',
    short_description:
      'ChatGPT gained the ability to browse the web, allowing it to access and process current information beyond its training cutoff date.',
    full_description:
      "On May 24, 2023, OpenAI introduced web browsing capabilities to ChatGPT, fundamentally addressing one of the system's most significant limitations: its inability to access current information.\n\nPrior to this feature, ChatGPT was limited to information available in its training data, which had a specific cutoff date, making it unable to answer questions about recent events or access up-to-date information.\n\nThe web browsing feature enabled ChatGPT to search the internet in real-time when users asked questions about current events, recent developments, or sought information that might have changed since the model's training data cutoff.\n\nThis functionality was first rolled out to ChatGPT Plus subscribers and later expanded to free users, continuing OpenAI's pattern of premium-first feature releases.\n\nThe implementation used Bing as the underlying search engine, leveraging Microsoft's technology as part of the ongoing partnership between the two companies.\n\nUsers could explicitly activate browsing by clicking a \"Browse with Bing\" option, or ChatGPT would suggest using web browsing when a query likely required current information.\n\nThe feature was designed to maintain attribution, with ChatGPT citing sources and providing links to the websites it used to gather information for its responses.\n\nWeb browsing significantly enhanced ChatGPT's utility as a research assistant, allowing it to gather information from multiple sources and synthesize answers based on current data.\n\nThe feature included the ability to quote directly from websites, summarize content from multiple sources, and compare information across different websites to provide more comprehensive answers.\n\nWeb browsing addressed a key competitive disadvantage compared to newer AI systems like Google's Bard (later Gemini), which had integrated search capabilities from launch.\n\nThe implementation included safety measures to prevent browsing of harmful content or generation of responses based on inappropriate or dangerous websites.\n\nOpenAI designed the feature to respect robots.txt files and website terms of service, aiming to be a good citizen of the web ecosystem rather than overwhelming sites with requests.\n\nThe feature transformed ChatGPT from a static knowledge system to a dynamic tool capable of accessing the vast, constantly updating information resources of the internet.\n\nWeb browsing capability significantly reduced instances of ChatGPT providing outdated information or refusing to answer questions about events after its training cutoff date.\n\nThe feature worked alongside other knowledge enhancements like plugins, creating a more comprehensive solution for expanding ChatGPT's knowledge beyond its training data.\n\nUsers could now perform tasks like checking current prices, reading recent news articles, finding updated statistics, or researching evolving topics with confidence in the recency of information.\n\nThe browsing capability included limitations on certain types of personal information searches to maintain privacy and prevent potential misuse of the system.\n\nThe feature represented an important step in OpenAI's vision of creating an AI assistant that could perform real-world tasks requiring current information and context.\n\nWeb browsing helped position ChatGPT as a potential alternative to traditional search engines for certain types of information-seeking behaviors, particularly those requiring synthesis across sources.\n\nThe implementation included visual indicators showing when ChatGPT was actively browsing the web, creating transparency about when the system was using internal knowledge versus external information.\n\nThis feature significantly expanded ChatGPT's practical utility for day-to-day questions and research tasks, making it more valuable as both a personal and professional tool.",
    type: ['feature'],
    impact: 'medium',
    date: 'May 24, 2023',
    year: '2023',
    sources: [
      {
        title: 'OpenAI upgrades ChatGPT with web browsing capabilities',
        url: 'https://dig.watch/updates/openai-upgrades-chatgpt-with-web-browsing-capabilities',
      },
      {
        title: 'Web browsing and Plugins are now rolling out in beta',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_9894d7b0a4',
      },
    ],
  },
  {
    title: 'iOS Mobile App Launch',
    short_description:
      'OpenAI released the ChatGPT mobile app for iOS, bringing the AI assistant to mobile devices with voice input capabilities.',
    full_description:
      "On May 18, 2023, OpenAI launched the official ChatGPT mobile application for iOS devices, marking the company's first native mobile offering for its conversational AI technology.\n\nThe mobile app provided a streamlined, touch-optimized interface designed specifically for smartphone users, making ChatGPT more accessible for on-the-go use cases.\n\nA key feature of the mobile app was the integration of voice input capabilities, allowing users to speak to ChatGPT rather than type, creating a more natural interaction pattern similar to other voice assistants.\n\nThe app synchronized chat history across devices, enabling seamless transitions between desktop and mobile usage of the service.\n\nOpenAI made the app free to download and use, with ChatGPT Plus subscribers receiving additional benefits like access to GPT-4 and higher usage limits within the mobile experience.\n\nThe iOS app initially launched in the United States before gradually rolling out to additional countries and regions in the following weeks.\n\nThe mobile app maintained feature parity with the web version, including access to browsing capabilities, allowing mobile users to leverage ChatGPT's ability to search for current information.\n\nThe app included optimizations for mobile networks and variable connectivity, making ChatGPT more resilient when used on cellular data or inconsistent Wi-Fi connections.\n\nOpenAI implemented native iOS notifications, allowing users to receive alerts about responses to ongoing conversations even when the app wasn't actively open.\n\nThe mobile interface was designed to make complex conversations more manageable on smaller screens, with thoughtful user experience considerations for the constraints of mobile devices.\n\nThe app quickly rose to the top of the App Store charts, demonstrating strong demand for AI assistant technology in mobile form factors.\n\nOpenAI simultaneously announced plans to develop an Android version, acknowledging the importance of reaching users across both major mobile platforms.\n\nThe mobile app helped position ChatGPT as a competitor to established mobile assistants like Siri, Google Assistant, and Alexa, though with different interaction patterns and capabilities.\n\nThe iOS app brought ChatGPT to a segment of users who primarily use mobile devices rather than desktop computers, expanding the technology's reach to new demographics.\n\nThe mobile release enabled new use cases for ChatGPT, such as real-time assistance during meetings, help while shopping, or support during travel when a laptop might not be available.\n\nVoice input capabilities made the service more accessible for users with disabilities that might make typing difficult, as well as situations where hands-free operation was necessary.\n\nThe app implemented share extensions that allowed users to quickly send content from other apps to ChatGPT for analysis, summarization, or context.\n\nOpenAI optimized the app for energy efficiency, addressing concerns about the potential battery impact of running AI-intensive applications on mobile devices.\n\nThe mobile app offered a widget for iOS users, providing quick access to ChatGPT from the home screen without opening the full application.\n\nThe release of a dedicated mobile app represented OpenAI's evolution from a research organization to a consumer product company creating polished experiences across multiple platforms.\n\nThe mobile app helped establish ChatGPT as an everyday utility rather than a novelty, integrating AI assistance more deeply into users' daily digital routines.",
    type: 'milestone',
    impact: 'medium',
    date: 'May 18, 2023',
    year: '2023',
    sources: [
      {
        title: 'Introducing the ChatGPT app for iOS - OpenAI',
        url: 'https://openai.com/index/introducing-the-chatgpt-app-for-ios/',
      },
      {
        title: 'OpenAI launches ChatGPT app for iOS - CNBC',
        url: 'https://www.cnbc.com/2023/05/18/chatgpt-launches-ios-app-says-android-is-coming.html',
      },
      {
        title:
          'OpenAI Unveils iOS ChatGPT App with New Features, Exclusive Subscriber Perks',
        url: 'https://www.techtimes.com/articles/291695/20230518/openai-unveils-ios-chatgpt-app-new-features-exclusive-subscriber-perks.htm',
      },
    ],
  },
  {
    title: 'Code Interpreter Rollout',
    short_description:
      "OpenAI rolled out Code Interpreter, which lets ChatGPT run code, optionally with access to files you've uploaded. You can ask ChatGPT to analyze data, create charts, edit files, perform math",
    full_description: '',
    type: ['feature'],
    impact: 'medium',
    date: 'July 6, 2023',
    year: '2023',
    sources: [
      {
        title: 'Code interpreter is now rolling out in beta on web',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_398fb5df55',
      },
    ],
  },
  {
    title: 'Custom Instructions',
    short_description:
      'Custom instructions give you more control over how ChatGPT responds. Set your preferences, and ChatGPT will keep them in mind for all future conversations.',
    full_description:
      'Custom instructions so that you can tailor ChatGPT to better meet your needs. This feature will be available in beta starting with the Plus plan today, expanding to all users in the coming weeks. Custom instructions allow you to add preferences or requirements that you’d like ChatGPT to consider when generating its responses.',
    type: ['feature'],
    impact: 'big',
    date: 'July 20, 2023',
    year: '2023',
    sources: [
      {
        title: 'Custom instructions for ChatGPT',
        url: 'https://openai.com/index/custom-instructions-for-chatgpt/',
      },
    ],
  },
  {
    title: 'Android App Release',
    short_description:
      'OpenAI expanded mobile access by launching ChatGPT for Android devices, making the AI assistant available to a broader audience.',
    full_description:
      "On July 25, 2023, OpenAI released the official ChatGPT application for Android devices, completing its rollout to the two dominant mobile platforms and significantly expanding the accessibility of the AI assistant.\n\nThe Android release came approximately two months after the iOS version, addressing a major gap in platform coverage that had left a substantial portion of global smartphone users without native access to ChatGPT.\n\nThe Android app maintained feature parity with its iOS counterpart, offering the same core functionality including conversational AI capabilities, voice input, and synchronization with the web version.\n\nThe application was optimized for the diverse ecosystem of Android devices, functioning across various screen sizes, hardware capabilities, and Android OS versions to maximize compatibility.\n\nLike the iOS version, the Android app was free to download and use, with premium features available to ChatGPT Plus subscribers who could log into their existing accounts.\n\nThe app initially launched in select countries before expanding globally, with a phased rollout strategy similar to the iOS release.\n\nOpenAI implemented Android-specific optimizations for performance and battery usage, addressing the platform's particular challenges around device fragmentation and varied hardware profiles.\n\nThe Android release incorporated Material Design principles while maintaining consistency with ChatGPT's established visual identity and interaction patterns.\n\nThe app quickly rose to prominence in the Google Play Store, achieving high download numbers and strong ratings from Android users eager to access the technology natively.\n\nOpenAI incorporated Android-specific features such as system-level sharing intents, allowing users to easily send content from other apps to ChatGPT for analysis or processing.\n\nThe release significantly expanded ChatGPT's global reach, as Android holds dominant market share in many regions, particularly in developing economies where iOS devices are less common.\n\nThe Android app included support for Google account authentication, streamlining the sign-up and login process for users already in the Google ecosystem.\n\nOpenAI implemented adaptive layouts that worked across phones, foldables, and tablets, taking advantage of larger screens where available in the Android ecosystem.\n\nThe app included Android widgets for quick access to ChatGPT from the home screen or lock screen, depending on user preference and device capabilities.\n\nThe release addressed a competitive disadvantage, as several third-party unofficial ChatGPT clients had emerged on the Play Store during the period when no official Android app was available.\n\nThe Android version maintained the same privacy and security standards as other platforms, with conversations encrypted in transit and OpenAI's existing data retention policies applied consistently.\n\nOpening up access to Android users provided OpenAI with valuable insights into how different user demographics and regions utilized ChatGPT, informing future development priorities.\n\nThe app included optimization for Android's background processing limitations, ensuring that ongoing conversations remained accessible without excessive battery drain.\n\nThe Android release completed OpenAI's platform strategy of making ChatGPT available wherever users preferred to access it: web, iOS, or Android, with consistent functionality across all three.\n\nThe timing of the release coincided with growing competition in the AI assistant space, as Google had begun rolling out its own Bard (later Gemini) AI to Android devices.\n\nThe availability on Android represented an important milestone in democratizing access to advanced AI technology, bringing state-of-the-art language models to billions of potential users worldwide.",
    type: ['update'],
    impact: 'medium',
    date: 'July 25, 2023',
    year: '2023',
    sources: [
      {
        title: 'ChatGPT will soon have an official Android version available',
        url: 'https://www.androidheadlines.com/2023/07/chatgpt-android-app-coming-from-openai-soon.html',
      },
      {
        title: 'OpenAI launches ChatGPT app for iOS - CNBC',
        url: 'https://www.cnbc.com/2023/05/18/chatgpt-launches-ios-app-says-android-is-coming.html',
      },
      {
        title: 'ChatGPT - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/ChatGPT',
      },
    ],
  },
  {
    title: 'ChatGPT Enterprise',
    short_description:
      'A launch of ChatGPT Enterprise offers enterprise-grade security and privacy, unlimited higher-speed GPT-4 access, longer context windows for processing longer inputs, advanced data analysis capabilities, customization options, and much more.',
    full_description:
      'Today we’re launching ChatGPT Enterprise, which offers enterprise-grade security and privacy, unlimited higher-speed GPT-4 access, longer context windows for processing longer inputs, advanced data analysis capabilities, customization options, and much more. ChatGPT Enterprise also provides unlimited access to Advanced Data Analysis, previously known as Code Interpreter. Learn more on our website and connect with our sales team to get started.',
    type: ['company'],
    impact: 'medium',
    date: 'August 28, 2023',
    year: '2023',
    sources: [
      {
        title: 'Introducing ChatGPT Enterprise',
        url: 'https://openai.com/index/introducing-chatgpt-enterprise/',
      },
    ],
  },
  {
    title: 'Voice and Vision Capabilities',
    short_description:
      'ChatGPT gained multimodal capabilities, allowing it to see images and engage in voice conversations with users for a more natural interaction.',
    full_description:
      "On September 25, 2023, OpenAI announced the addition of voice and vision capabilities to ChatGPT, transforming it from a text-only system to a multimodal AI assistant that could see, hear, and speak.\n\nThe voice feature enabled users to have natural, back-and-forth conversations with ChatGPT, creating a more intuitive and accessible way to interact with the AI without typing.\n\nOpenAI developed five distinct voice options for ChatGPT, allowing users to choose the voice that felt most comfortable or appropriate for their needs and preferences.\n\nThe voice system was designed to respond with natural-sounding speech, including appropriate pauses, inflections, and reactions to conversational cues, moving beyond robotic text-to-speech.\n\nVoice capabilities were built using a new text-to-speech model that could generate human-like audio from just text and a few seconds of sample speech, representing a technical breakthrough in natural voice synthesis.\n\nThe vision capability allowed users to show images to ChatGPT through their camera or from their photo library, enabling the AI to analyze, describe, and answer questions about visual content.\n\nWith vision features, ChatGPT could perform tasks like identifying objects in photos, analyzing charts and graphs, assessing fashion choices, interpreting diagrams, or helping identify plants and animals.\n\nThe system could provide step-by-step guidance for physical tasks when shown images, such as cooking preparation, home repairs, or craft projects, expanding its utility beyond digital assistance.\n\nVoice and vision together enabled new use cases, such as pointing a camera at something while asking questions about it by voice, receiving spoken explanations about what the AI was seeing.\n\nOpenAI implemented specific safety measures for vision features, including techniques to decline requests to analyze or identify images of real people to protect privacy.\n\nThe voice interface was designed with latency optimization to create conversational experiences that felt responsive and natural rather than delayed or disjointed.\n\nThese multimodal capabilities were initially rolled out to ChatGPT Plus and Enterprise customers, following OpenAI's pattern of premium-first feature releases.\n\nThe voice feature in particular positioned ChatGPT as a competitor to voice assistants like Siri, Alexa, and Google Assistant, but with significantly more advanced conversational capabilities.\n\nFor visually impaired users, the combination of vision and voice created powerful accessibility benefits, allowing the AI to describe visual content and provide information through audio.\n\nOpenAI emphasized responsible development of voice technology, acknowledging concerns about voice cloning and implementing safeguards against creating voices that could impersonate specific individuals.\n\nThe vision system was trained to recognize when it might not have enough information to accurately analyze an image, expressing appropriate uncertainty rather than making confident mistakes.\n\nThe introduction of these features represented a shift toward more embodied AI that could perceive and interact with the physical world, bridging digital and physical reality.\n\nVoice capabilities were initially released as an opt-in feature, requiring users to explicitly enable voice conversations rather than automatically activating the microphone.\n\nThe vision system demonstrated remarkable capabilities in understanding complex visual information, from interpreting memes and visual jokes to analyzing technical diagrams.\n\nThese multimodal features represented a significant technical achievement, requiring the integration of advanced models across different domains (language, vision, speech recognition, and speech synthesis) into a cohesive system.\n\nThe combined capabilities moved ChatGPT closer to science fiction depictions of AI assistants, creating more natural human-AI interaction patterns that resembled human-to-human communication.",
    type: ['feature'],
    impact: 'big',
    date: 'September 25, 2023',
    year: '2023',
    sources: [
      {
        title: 'ChatGPT can now see, hear, and speak - OpenAI',
        url: 'https://openai.com/index/chatgpt-can-now-see-hear-and-speak/',
      },
      {
        title: 'OpenAI Says ChatGPT Can Now See, Hear, And Speak',
        url: 'https://www.mediapost.com/publications/article/389566/openai-says-chatgpt-can-now-see-hear-and-speak.html',
      },
      {
        title: "ChatGPT's Evolution: Seeing, Hearing, and Speaking",
        url: 'https://www.linkedin.com/pulse/chatgpts-evolution-seeing-hearing-speaking-ahmed-albadri',
      },
    ],
  },
  {
    title: 'DALLE-3 Rollout in Beta',
    short_description:
      'DALL·E 3 has been integrated into ChatGPT, allowing it to respond to requests with images. From a simple sentence to a detailed paragraph, ask ChatGPT what you want to see and it will translate your ideas into exceptionally accurate images.',
    full_description: '',
    type: ['feature'],
    impact: 'medium',
    date: 'October 16, 2023',
    year: '2023',
    sources: [
      {
        title: 'DALL·E 3 is now rolling out in beta',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_7b4cec3184',
      },
    ],
  },
  {
    title: 'Custom GPTs Introduction',
    short_description:
      'OpenAI introduced Custom GPTs, allowing users to create specialized versions of ChatGPT tailored for specific purposes without coding.',
    full_description:
      "On November 6, 2023, at its first developer conference (DevDay), OpenAI introduced Custom GPTs, a revolutionary feature that allowed users to create specialized versions of ChatGPT tailored to specific purposes without requiring programming knowledge.\n\nCustom GPTs represented a significant democratization of AI customization, enabling non-technical users to create AI assistants with specialized knowledge, capabilities, and personalities through a simple, guided interface.\n\nThe feature allowed users to define their GPT's purpose, behaviors, and knowledge through natural language instructions, similar to prompting ChatGPT itself, making the creation process intuitive and accessible.\n\nCreators could upload reference files and documents to give their Custom GPTs specialized knowledge beyond what was available in ChatGPT's general training, enabling domain-specific expertise.\n\nThe system included the ability to configure custom actions, allowing GPTs to call external APIs and integrate with other services to perform real-world tasks beyond conversation.\n\nOpenAI introduced a GPT Builder tool that used AI itself to help create Custom GPTs, allowing users to describe what they wanted and have the system generate the configuration automatically.\n\nCustom GPTs could be kept private for personal use, shared with specific organizations or teams, or published to the GPT Store for broader access, creating a flexible permission system.\n\nThe GPT Store, announced alongside Custom GPTs but launched later, created a marketplace for users to discover GPTs created by others, with featured sections and categories for navigation.\n\nOpenAI implemented a revenue sharing program for creators of popular GPTs in the store, establishing an economic incentive for the development of high-quality specialized assistants.\n\nThe feature prompted comparisons to an \"app store for AI,\" suggesting a new paradigm where specialized AI capabilities could be distributed similar to mobile applications.\n\nCustom GPTs maintained OpenAI's safety guidelines while allowing for significant customization, with systems in place to prevent the creation of GPTs that violated content policies.\n\nThe introduction represented a shift in how AI systems could be adapted for specific use cases, moving from requiring API integration and development to a configuration-based approach accessible to everyone.\n\nBusiness users could create internal GPTs with access to proprietary data and tools, effectively creating AI assistants with company-specific knowledge while maintaining data privacy.\n\nOpenAI provided templates and examples to help users get started, showcasing potential applications across education, productivity, entertainment, and specialized professional domains.\n\nThe announcement highlighted how Custom GPTs could serve diverse needs from coding assistants and math tutors to creative writing partners and domain-specific knowledge experts.\n\nUsers could customize the appearance of their GPTs with names, descriptions, and profile images, creating distinctive identities for different specialized assistants.\n\nThe feature allowed for the creation of conversational interfaces to complex workflows, making sophisticated multi-step processes accessible through natural language interaction.\n\nCustom GPTs could be iteratively refined based on feedback and usage patterns, allowing creators to improve their assistants over time without technical redevelopment.\n\nThe introduction of Custom GPTs represented a significant evolution in OpenAI's strategy, moving from a single generalized assistant to an ecosystem of specialized AI tools created by the user community.\n\nThe feature addressed the limitation that a one-size-fits-all AI assistant couldn't excel at every specialized task, instead enabling purpose-built assistants optimized for specific domains and functions.\n\nCustom GPTs became a distinguishing feature of OpenAI's offering in an increasingly competitive AI assistant landscape, providing unique customization capabilities not immediately available from competitors.",
    type: ['feature'],
    impact: 'big',
    date: 'November 6, 2023',
    year: '2023',
    sources: [
      {
        title: 'OpenAI Custom GPTs AI technology',
        url: 'https://lablab.ai/tech/openai/gpts',
      },
    ],
  },
  {
    title: 'GPT-4 Turbo Release',
    short_description:
      'OpenAI launched GPT-4 Turbo with improved performance, longer context window (128k tokens), and more up-to-date knowledge through April 2023.',
    full_description:
      'On November 6, 2023, at its inaugural DevDay conference, OpenAI announced GPT-4 Turbo, a significant enhancement to its flagship language model that offered improved capabilities at a lower cost for developers.\n\nGPT-4 Turbo featured a substantially expanded context window of 128,000 tokens, approximately 300 pages of text, quadrupling the previous limit and enabling the processing of much longer documents and conversations.\n\nThe model included knowledge of world events up to April 2023, a significant update from the previous knowledge cutoff, making it more informed about recent developments without relying on web browsing.\n\nDespite its enhanced capabilities, GPT-4 Turbo was offered at one-third the input token cost and half the output token cost of the standard GPT-4, making advanced AI more economically accessible to developers and businesses.\n\nThe "Turbo" designation referred to both improved performance speed and the optimization of the model for more efficient processing, resulting in faster response times for users.\n\nGPT-4 Turbo incorporated an improved instruction following capability, making it better at precisely executing complex, multi-step requests as specified by users.\n\nOpenAI released GPT-4 Turbo initially as a preview in the API, allowing developers to integrate the enhanced model into their applications while the company continued to refine it.\n\nThe model included enhanced function calling capabilities, supporting multiple functions in a single message and improving the system\'s ability to interact with external tools and services.\n\nGPT-4 Turbo introduced a new JSON mode that ensured the model would return responses in valid JSON format when requested, making it more reliable for programming and data processing applications.\n\nThe release included improvements to logical reasoning capabilities, reducing errors in complex problem-solving scenarios and enhancing performance on tasks requiring multi-step thinking.\n\nGPT-4 Turbo maintained the multimodal capabilities of GPT-4, allowing it to process and reason about images in addition to text, with optimizations to this vision system.\n\nThe model featured reduced instances of "hallucinations" or fabricated information, improving factual reliability while maintaining creative capabilities.\n\nGPT-4 Turbo was designed with improved steerable system messages, giving developers more precise control over the persona, tone, behavior, and capabilities of the AI in their applications.\n\nThe release included optimizations for specific domains like coding, where the model showed improved performance in code generation, debugging, and technical explanation tasks.\n\nOpenAI positioned GPT-4 Turbo as its recommended model for production applications, signaling a shift from treating GPT-4 as an experimental technology to a stable platform for development.\n\nThe model was integrated into ChatGPT for Plus subscribers, upgrading their experience with the longer context window and more recent knowledge base.\n\nGPT-4 Turbo incorporated learnings from monitoring GPT-4 usage patterns, focusing improvements on the most common and valuable use cases identified through analysis of millions of interactions.\n\nThe release represented OpenAI\'s commitment to continual model improvement between major version releases, establishing a pattern of iterative enhancements rather than only giant leaps.\n\nGPT-4 Turbo addressed specific limitations noted by power users of the original GPT-4, particularly the context window constraints that required breaking larger documents into chunks.\n\nThe model maintained the safety guardrails of GPT-4 while expanding capabilities, reflecting OpenAI\'s ongoing balance between increasing utility and ensuring responsible deployment.\n\nGPT-4 Turbo\'s improvements were achieved through a combination of architectural refinements, additional training, and optimized inference processes rather than a fundamental redesign of the base model.',
    type: ['model'],
    impact: 'medium',
    date: 'November 6, 2023',
    year: '2023',
    sources: [
      {
        title:
          'OpenAI unveils GPT-4 Turbo, custom GPTs, and more at OpenAI DevDay',
        url: 'https://cryptoslate.com/openai-unveils-gpt-4-turbo-custom-gpts-and-more-at-openai-devday/',
      },
    ],
  },
  {
    title: 'GPT Store and ChatGPT Team plan',
    short_description:
      "The store introduced a whole new world of custom GPTs developed by the community & OpenAI's partners. New ChatGPT plan for teams of all sizes provides a secure, collaborative workspace to get the most out of ChatGPT at work. GPT Store allowed browsing popular and trending GPTs on the community leaderboard, with categories like DALL·E, writing, research, programming, education, and lifestyle.",
    full_description:
      'Discover what’s trending in the GPT Store: The store features a diverse range of GPTs developed by our partners and the community. Browse popular and trending GPTs on the community leaderboard, with categories like DALL·E, writing, research, programming, education, and lifestyle. Explore GPTs at chatgpt.com/gpts. Use ChatGPT alongside your team:  We’re launching a new ChatGPT plan for teams of all sizes, which provides a secure, collaborative workspace to get the most out of ChatGPT at work. ChatGPT Team offers access to our advanced models like GPT-4 and DALL·E 3, and tools like Advanced Data Analysis. It additionally includes a dedicated collaborative workspace for your team and admin tools for team management. As with ChatGPT Enterprise, you own and control your business data — we do not train on your business data or conversations, and our models don’t learn from your usage. More details on our data privacy practices can be found on our privacy page and Trust Portal.',
    type: ['announcement'],
    impact: 'big',
    date: 'January 10, 2024',
    year: '2024',
    sources: [
      {
        title: 'Introducing the GPT Store and ChatGPT Team plan',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_8f084b7228',
      },
    ],
  },
  {
    title: 'Memory & New Controls',
    short_description:
      'Memory was a very requested feature by millions of users to make ChatGPT remember certain things across all chats to stop repeating information over and over.',
    full_description:
      'You’re in control of ChatGPT’s memory. You can explicitly tell it to remember something, ask it what it remembers, and tell it to forget conversationally or through settings. You can also turn it off entirely. GPTs will have their own distinct memory. Builders will have the option to enable memory for their GPTs',
    type: ['feature', 'update'],
    impact: 'medium',
    date: 'February 13, 2024',
    year: '2024',
    sources: [
      {
        title: 'Memory and new controls for ChatGPT',
        url: 'https://openai.com/index/memory-and-new-controls-for-chatgpt/',
      },
    ],
  },
  {
    title: 'ChatGPT Without Sign-Up',
    short_description:
      'OpenAI made ChatGPT more available by making non-registered users use ChatGPT instantly.',
    full_description:
      "We’re making it easier for people to experience the benefits of AI without needing to sign up. Starting today, you can use ChatGPT instantly, without needing to sign-up. We're rolling this out gradually, with the aim to make AI accessible to anyone curious about its capabilities.",
    date: 'April 1, 2024',
    type: ['announcement', 'update'],
    impact: 'small',
    year: '2024',
    sources: [
      {
        title: 'Start using ChatGPT instantly',
        url: 'https://openai.com/index/start-using-chatgpt-instantly/',
      },
    ],
  },
  {
    title: 'GPT-4o Arrival',
    short_description:
      'OpenAI introduced GPT-4o (omni), offering significantly faster performance, improved capabilities across text, vision, and audio, with reduced latency for real-time interactions.',
    full_description:
      "On May 13, 2024, OpenAI announced GPT-4o (\"omni\"), a groundbreaking multimodal model that represented a significant leap forward in the performance and capabilities of large language models.\n\nGPT-4o was designed from the ground up as a multimodal system, natively integrating text, vision, and audio processing rather than combining separate models, resulting in more coherent cross-modal understanding.\n\nThe model demonstrated dramatically improved response speed, with latency reduced by up to 10x compared to previous models, enabling near real-time interactions that felt more like human conversation.\n\nGPT-4o featured native audio understanding and generation capabilities, processing speech and sound with unprecedented accuracy and responding with natural-sounding voice outputs.\n\nOpenAI made the surprising announcement that GPT-4o would be available to all ChatGPT users, including those on the free tier, representing a significant democratization of access to cutting-edge AI technology.\n\nThe model demonstrated human-level performance across a wide range of benchmarks, showing particular improvements in reasoning, coding, mathematics, and creative tasks.\n\nGPT-4o featured enhanced multilingual capabilities, with improved performance across dozens of languages in both understanding and generation, reducing the performance gap between English and other languages.\n\nThe \"omni\" designation highlighted the model's ability to seamlessly handle multiple input and output modalities, switching between text, images, and audio without degradation in performance.\n\nOpenAI emphasized responsible deployment of GPT-4o, implementing enhanced safety measures to prevent misuse while making the technology widely available.\n\nThe model showed improved performance in understanding cultural nuances, idiomatic expressions, and context-specific meanings across different languages and regions.\n\nGPT-4o's reduced latency made it particularly well-suited for real-time applications like voice conversations, live assistance, and interactive problem-solving sessions.\n\nThe model maintained the 128k token context window of GPT-4 Turbo, allowing it to process lengthy documents and maintain awareness throughout extended conversations.\n\nGPT-4o represented a significantly more cost-effective model for developers, with OpenAI reducing API pricing while improving capabilities, making advanced AI more economically accessible.\n\nThe model demonstrated enhanced reasoning about visual information, including the ability to analyze complex diagrams, understand spatial relationships, and interpret visual metaphors.\n\nOpenAI positioned GPT-4o as a foundation for more natural human-AI interaction, moving beyond the constraints of text-based interfaces to more intuitive multimodal communication.\n\nThe model showed particular improvements in code generation and debugging, with enhanced ability to understand programming concepts and generate efficient, accurate code across multiple languages.\n\nGPT-4o featured improved knowledge of recent events, with a more current training cutoff date than previous models, making it more informed about recent developments.\n\nThe release highlighted OpenAI's accelerating pace of innovation, delivering a major model upgrade less than a year after the introduction of GPT-4 Turbo.\n\nThe model demonstrated enhanced capability to follow complex instructions, particularly when they involved multiple modalities, such as analyzing an image while listening to audio context.\n\nGPT-4o's improved performance-to-cost ratio positioned it to enable new categories of AI applications that had previously been impractical due to technical or economic constraints.\n\nThe release represented OpenAI's vision for AI that could more naturally integrate into human environments and workflows, responding to the full spectrum of human communication methods rather than just text.",
    type: ['model'],
    impact: 'big',
    date: 'May 13, 2024',
    year: '2024',
    sources: [
      {
        title: "OpenAI debuts GPT-4o 'omni' model now powering ChatGPT",
        url: 'https://techcrunch.com/2024/05/13/openais-newest-model-is-gpt-4o/',
      },
      {
        title:
          'OpenAI ChatGPT Event Announcements: GPT-4o Model and Desktop Version',
        url: 'https://coingape.com/openai-chatgpt-event-announcements-gpt-4o-model-and-desktop-version/',
      },
      {
        title: 'GPT-4 - Wikipedia',
        url: 'https://en.wikipedia.org/wiki/GPT-4',
      },
    ],
  },
  {
    title: 'Improvements to data analysis in ChatGPT',
    short_description:
      'Upload the latest file versions directly from Google Drive, Microsoft OneDrive Personal, and Microsoft OneDrive including Sharepoint. Interact with tables and charts in a new expandable view. Customize and download presentation-ready charts and documents',
    full_description:
      'These improvements build on ChatGPT’s ability to understand datasets and complete tasks in natural language. To start, upload one or more data files, and ChatGPT will analyze your data by writing and running Python code on your behalf. It can handle a range of data tasks, like merging and cleaning large datasets, creating charts, and uncovering insights. This makes it easier for beginners to perform in-depth analyses and saves experts time on routine data-cleaning tasks.',
    type: ['feature'],
    date: 'May 16, 2024',
    impact: 'small',
    year: '2024',
    sources: [
      {
        title: 'Improvements to data analysis in ChatGPT',
        url: 'https://openai.com/index/improvements-to-data-analysis-in-chatgpt/',
      },
    ],
  },
  {
    title: 'Introducing GPT-4o mini',
    short_description:
      'GPT-4o mini is the most capable and cost-efficient small model at a time. GPT-4o mini surpasses GPT-3.5 Turbo and other small models on academic benchmarks across both textual intelligence and multimodal reasoning and supports the same range of languages as GPT-4o',
    full_description:
      'GPT‑4o mini enables a broad range of tasks with its low cost and latency, such as applications that chain or parallelize multiple model calls (e.g., calling multiple APIs), pass a large volume of context to the model (e.g., full code base or conversation history), or interact with customers through fast, real-time text responses (e.g., customer support chatbots). Today, GPT‑4o mini supports text and vision in the API, with support for text, image, video and audio inputs and outputs coming in the future. The model has a context window of 128K tokens, supports up to 16K output tokens per request, and has knowledge up to October 2023. Thanks to the improved tokenizer shared with GPT‑4o, handling non-English text is now even more cost effective.',
    impact: 'medium',
    date: 'July 18, 2024',
    type: ['model'],
    year: '2024',
    sources: [
      {
        title: 'Introducing GPT-4o mini',
        url: 'https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/',
      },
    ],
  },
  {
    title: 'o1-preview & o1-mini Release',
    short_description:
      'A new series of reasoning models designed to think before responding to provide better results.',
    full_description:
      'New LLMs trained with reinforcement learning (learning on your mistakes) to reason through the problem before answering. Models produce a chain-of-thought, which is a list of thoughts that the model produces to break-down the task and complete it step-by-step similar to how humans do it.',
    impact: 'medium',
    type: ['model'],
    date: 'September 12, 2024',
    year: '2024',
    sources: [
      {
        title: 'Introducing OpenAI o1',
        url: 'https://openai.com/o1/',
      },
      {
        title: 'OpenAI o1-mini',
        url: 'https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning/',
      },
      {
        title: 'OpenAI o1 System Card',
        url: 'https://openai.com/index/openai-o1-system-card/',
      },
      {
        title: 'Learning to reason with LLMs',
        url: 'https://openai.com/index/learning-to-reason-with-llms/',
      },
    ],
  },
  {
    title: 'ChatGPT Canvas',
    short_description:
      'Canvas feature provided a new interface to work with ChatGPT in a better way on writing & coding projects',
    full_description:
      'People use ChatGPT every day for help with writing and code. Although the chat interface is easy to use and works well for many tasks, it’s limited when you want to work on projects that require editing and revisions. Canvas offers a new interface for this kind of work. With canvas, ChatGPT can better understand the context of what you’re trying to accomplish. You can highlight specific sections to indicate exactly what you want ChatGPT to focus on. Like a copy editor or code reviewer, it can give inline feedback and suggestions with the entire project in mind.You control the project in canvas. You can directly edit text or code. There’s a menu of shortcuts for you to ask ChatGPT to adjust writing length, debug your code, and quickly perform other useful actions. You can also restore previous versions of your work by using the back button in canvas.Canvas opens automatically when ChatGPT detects a scenario in which it could be helpful. You can also include “use canvas” in your prompt to open canvas and use it to work on an existing project.Writing shortcuts include',
    date: 'October 3, 2024',
    type: ['feature'],
    impact: 'medium',
    year: '2024',
    sources: [
      {
        title: 'Introducing canvas',
        url: 'https://openai.com/index/introducing-canvas/',
      },
    ],
  },
  {
    title: "ChatGPT Search",
    short_description: "Search feature allows models to use the internet to get fast up-to-date answers.",
    full_description: "ChatGPT search connects people with original, high-quality content from the web and makes it part of their conversation.",
    date: "October 31, 2024",
    type: ['feature'],
    impact: "small",
    year: '2024',
    sources: [
      {
        title: "Introducing ChatGPT search",
        url: "https://openai.com/index/introducing-chatgpt-search/",
      }
    ]
  },
  {
    title: 'Advanced Voice Mode',
    short_description:
      'Advanced Voice Mode (AVM) enables having real-time, natural conversations with ChatGPT while doing tasks like shopping, planning, writing, and brainstorming.',
    full_description:
      'Starting today, we’re beginning to roll out Advanced Voice Mode on web (already available on mobile and desktop apps). You can now start a voice chat on chatgpt.com on your desktop and have real-time, natural conversations with ChatGPT while doing tasks like shopping, planning, writing, and brainstorming.',
    impact: 'medium',
    date: 'November 19, 2024',
    type: ['feature', 'update'],
    year: '2024',
    sources: [
      {
        title: 'Advanced Voice for ChatGPT Web',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_772c9094ce',
      },
    ],
  },
  {
    title: 'Updates to the ChatGPT Web experience',
    short_description:
      'OpenAI announced a bunch of very useful updates to UI interface to make it more intuitive & improve the immersive experience when using ChatGPT',
    full_description: 'Sidebar redesign',
    impact: 'small',
    date: 'November 22, 2024',
    type: ['update'],
    year: '2024',
    sources: [
      {
        title: 'Updates to the ChatGPT Web experience',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_4082a8d7d4',
      },
    ],
  },
  {
    title: "ChatGPT Pro Release",
    short_description: "A new Pro plan offers higher limits, early beta access to new features with a $200 price",
    full_description: "",
    type: ['announcement'],
    date: "December 5, 2024",
    impact: 'tiny',
    year: '2024',
    sources: [
      {
        title: "Introducing ChatGPT Pro",
        url: "https://openai.com/index/introducing-chatgpt-pro/",
      }
    ]
  },
  {
    title: "Sora Release",
    short_description: "A highly anticipated video-generation tool finally arrived. It lets you generate realistic videos up to 1080p resolution, up to 20 sec long and in different aspect ratios.",
    full_description: "",
    type: ['product'],
    date: "December 9, 2024",
    impact: "medium",
    year: '2024',
    sources: [
      {
        title: "Sora is Here",
        url: "https://openai.com/index/sora-is-here/",
      }
    ]
  },
  {
    title: 'Video & Screen Share in Advanced Voice Mode + Santa Voice',
    short_description:
      'Real-time video, screen share, and image upload capabilities are now available in Advanced Voice Mode (AVM). Santa Voice is available until early January with a holiday spirit!',
    full_description:
      'OpenAI introduced new Santa Voice, Real-Time Video & screen share to AVM (Advanced Voice Mode) on Day 6 of 12 days of OpenAI stream series. Real-Time Video allows ChatGPT to see everything around and help you with various tasks from translation to simple navigation. Screenshare can do pretty the same stuff but it sees what is going on your phone instead.',
    date: 'December 12, 2024',
    type: ['feature', 'update'],
    impact: 'small',
    year: '2024',
    sources: [
      {
        title: 'Santa Voice and Video and Screen Share in Voice Chats',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_97cfc3cc7b',
      },
    ],
  },
  {
    title: 'Projects in ChaGPT',
    short_description:
      'Projects lets you organize your chats, custom instructions, and files together into customizable folders to keep things tidy.',
    full_description:
      'Projects serve as an all-in-one hub. Instead of using multiple apps, you can integrate ChatGPT’s various capabilities—like Canvas for editing text and code, voice mode for real-time audio interaction, or web search for up-to-date info all in a single organized environment. Professionals & Project Managers create projects to keep everything project related organized in one place. Writers & Content Creators can hold research notes, character sketches and other content organized in a single folder. Students & Researchers can create projects for specific subjects, projects + add custom instructions for each project, which ultimately results in productivity boost.',
    type: ['feature'],
    impact: 'medium',
    date: 'December 13, 2024',
    year: '2024',
    sources: [
      {
        title: 'Projects in ChatGPT',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_d673004b21',
      },
      {
        title: 'How To Use Projects in ChatGPT?',
        url: 'https://learnprompting.org/blog/how-to-use-openai-chatgpt-projects',
      },
    ],
  },
  {
    title: 'Scheduled tasks in ChatGPT',
    short_description:
      'ChatGPT Tasks is a new feature that allows you to automate actions by scheduling them right in the ChatGPT',
    full_description:
      "This capability enables ChatGPT to remember our instructions and perform tasks even when we're not online. There are numerous use cases for ChatGPT's scheduled tasks. For instance, we can set up a daily task to receive AI news briefings. If we’re learning a new language, ChatGPT can help us practice daily through scheduled chat sessions.",
    type: ['feature'],
    impact: 'small',
    date: 'January 14, 2024',
    year: '2024',
    sources: [
      {
        title: 'Scheduled tasks in ChatGPT',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_c16236d0f4',
      },
      {
        title: 'ChatGPT Tasks',
        url: 'https://www.datacamp.com/tutorial/chatgpt-tasks',
      },
    ],
  },
  {
    title: 'New Updates to Canvas',
    short_description:
      'Edit a full model response in Canvas + edit block code in Canvas.',
    full_description:
      'This update is available exclusively on the web version with Desktop & Mobile devices not being included in this release',
    type: ['update'],
    impact: 'tiny',
    date: 'January 15, 2025',
    year: '2025',
    sources: [
      {
        title: 'New Updates for Canvas',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_710fb9ad37',
      },
      {
        title: 'New Updates for Canvas',
        url: 'https://community.openai.com/t/new-updates-for-canvas-on-chatgpt/1092965',
      },
    ],
  },
  {
    title: 'Improvements to ChatGPT Customization',
    short_description:
      'Update to Custom Instructions to make ChatGPT customization easier by specyfiyng to traits, style and any other rules',
    full_description:
      "We've updated custom instructions to make it easier to customize how ChatGPT responds to you. With the new UI, you can tell ChatGPT the traits you want it to have, how you want it to talk to you, and any rules you want it to follow.If you're already using custom instructions, this won't change your current settings.The new UI is rolling out now on http://chatgpt.com and desktop on Windows, and is coming to mobile and desktop on MacOS in the next few weeks. Available soon to ChatGPT users in the EU, Norway, Iceland, Liechtenstein, and Switzerland.",
    type: ['update'],
    date: 'January 17, 2025',
    impact: 'small',
    year: '2025',
    sources: [
      {
        title: 'More personalization in Custom Instructions',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_407213a48f',
      },
    ],
  },
  {
    title: 'Operator Release',
    short_description:
      'AI-Agent that perform multi-step web tasks independently on your behalf.',
    full_description:
      'an agent that can go to the web to perform tasks for you. Using its own browser, it can look at a webpage and interact with it by typing, clicking, and scrolling. It is currently a research preview, meaning it has limitations and will evolve based on user feedback. Operator is one of our first agents, which are AIs capable of doing work for you independently—you give it a task and it will execute it.Operator can be asked to handle a wide variety of repetitive browser tasks such as filling out forms, ordering groceries, and even creating memes. The ability to use the same interfaces and tools that humans interact with on a daily basis broadens the utility of AI, helping people save time on everyday tasks while opening up new engagement opportunities for businesses.',
    type: ['product'],
    date: 'January 23, 2025',
    impact: 'medium',
    year: '2025',
    sources: [
      {
        title: 'Introducing Operator',
        url: 'https://openai.com/index/introducing-operator/',
      },
    ],
  },
  {
    title: 'OpenAI o3-mini',
    short_description:
      'Most efficient reasoning model exceling in STEP, especially Math, Science, and Coding',
    full_description: '',
    date: 'January 31, 2025',
    impact: 'medium',
    type: ['model'],
    year: '2025',
    sources: [
      {
        title: 'OpenAI o3-mini',
        url: 'https://openai.com/index/openai-o3-mini/',
      },
    ],
  },
  {
    title: 'DeepResearch Release',
    short_description:
      "DeepResearch is an agent, powered by OpenAI's o3 model to complete complex, multi-task online research",
    full_description:
      "Deep research is built for people who do intensive knowledge work in areas like finance, science, policy, and engineering and need thorough, precise, and reliable research. Deep research is OpenAI's next agent that can do work for you independently—you give it a prompt, and ChatGPT will find, analyze, and synthesize hundreds of online sources to create a comprehensive report at the level of a research analyst. Powered by a version of the upcoming OpenAI o3 model that’s optimized for web browsing and data analysis, it leverages reasoning to search, interpret, and analyze massive amounts of text, images, and PDFs on the internet, pivoting as needed in reaction to information it encounters.",
    date: 'February 2, 2025',
    impact: 'big',
    type: ['feature'],
    year: '2025',
    sources: [
      {
        title: 'Introducing Deep Research',
        url: 'https://openai.com/index/introducing-deep-research/',
      },
      {
        title: 'Deep research System Card',
        url: 'https://openai.com/index/deep-research-system-card/',
      },
    ],
  },
  {
    title: 'Canvas Sharing',
    short_description:
      'You can now share a Canvas as a HTML/REACT code, document, or code.',
    full_description:
      'Users can now share a Canvas asset such as rendered React/HTML code, document, or code with another user, similar to how you share a conversation. You can do this from the Canvas toolbar when Canvas is open.',
    type: ['update'],
    date: 'February 6, 2025',
    impact: 'small',
    year: '2025',
    sources: [
      {
        title: 'Canvas Sharing',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_54c46b74c5',
      },
    ],
  },
  {
    title: 'GPT-4.5 Release',
    short_description:
      "OpenAI's largest model exceling in writing, brainstorming, solving practical problems with less hallucinations.",
    full_description:
      'GPT-4.5 is trained for human collaboration combining deep understanding of the world that makes conversations more naturally warm and intuitive. shows stronger aesthetic intuition and creativity. It excels at helping with writing and design.',
    type: ['model'],
    date: 'February 27, 2025',
    impact: 'medium',
    year: '2025',
    sources: [
      {
        title: 'Introducing GPT-4.5',
        url: 'https://openai.com/index/introducing-gpt-4-5/',
      },
    ],
  },
  {
    title: 'GPT-4o Image Generation',
    short_description:
      'New Image Generation model is a huge jump from DALLE-3 exceling in accurately rendering text, instruction following, in-context learning, photorealism and other awesome styles.',
    full_description:
      "GPT-4o Image Model is the most advanced OpenAI's image generator that not only generates awesome images but also useful infographics, comic strips, diagrams, including those without background. GPT‑4o image generation excels at accurately rendering text, precisely following prompts, and leveraging 4o’s inherent knowledge base and chat context—including transforming uploaded images or using them as visual inspiration. These capabilities make it easier to create exactly the image you envision, helping you communicate more effectively through visuals and advancing image generation into a practical tool with precision and power.",
    impact: 'big',
    date: 'March 27, 2025',
    type: ['feature', 'model'],
    year: '2025',
    sources: [
      {
        title: 'Introducing 4o Image Generation',
        url: 'https://openai.com/index/introducing-4o-image-generation/',
      },
    ],
  },
  {
    title: 'ChatGPT Image Library',
    short_description:
      'A new library that organizes your images allowing you to browser, revisit and reuse your work without digging through past conversations',
    full_description:
      'All images you create with ChatGPT are now automatically saved to a new Library in the sidebar, giving you one place to browse, revisit, and reuse your work without digging through past conversations. The Library is rolling out today on Web, iOS, and Android for Free, Plus, and Pro users (Enterprise / Edu support coming soon). For now, it displays images generated with 4o Image Generation while we backfill older creations, and you can remove an image by deleting the conversation where it was made.',
    type: ['feature'],
    date: 'April 15, 2025',
    impact: 'small',
    year: '2025',
    sources: [
      {
        title: 'ChatGPT Image Library',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_707801a904',
      },
    ],
  },
  {
    title: 'GPT-4 Retirement',
    short_description:
      'Starting April 30, 2025, GPT-4 will retire from ChatGPT and be fully replaced by GPT-4o. Newer, smarter, faster multimodal GPT-4o takes its place.',
    full_description:
      'GPT‑4 marked a pivotal moment in ChatGPT’s evolution with GPT‑4o being built on that foundation to deliver even greater capability, consistency, and creativity. Recent upgrades have further improved GPT‑4o’s instruction following, problem solving, and conversational flow, making it a natural successor to GPT‑4. Note: GPT-4 will still be available in the API.',
    type: ['update'],
    impact: 'tiny',
    date: 'April 10, 2025',
    year: '2025',
    sources: [
      {
        title: 'Sunsetting GPT‑4 in ChatGPT',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_cbb2e4f019',
      },
    ],
  },
  {
    title: 'GPT-4o Significant Improvements',
    short_description:
      'GPT-4o now feels more intuitive, creative, and collaborative with enhanced insturction-following, smarter coding capabilities and clearer communication style',
    full_description:
      'Smarter problem-solving in STEM and coding:GPT-4o has further improved its capability to tackle complex technical and coding problems. It now generates cleaner, simpler frontend code, more accurately thinks through existing code to identify necessary changes, and consistently produces coding outputs that successfully compile and run, streamlining your coding workflows. Enhanced instruction-following and formatting accuracy: GPT-4o is now more adept at following detailed instructions, especially for prompts containing multiple or complex requests. It improves on generating outputs according to the format requested and achieves higher accuracy in classification tasks.',
    type: ['model', 'update'],
    date: 'March 27, 2025',
    impact: 'tiny',
    year: '2025',
    sources: [
      {
        title: 'GPT-4o Updates',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_10dcfa2a17',
      },
    ],
  },
  {
    title: 'BrowseComp - Benchmark for browsing agents',
    short_description:
      'A simple and challenging benchmark for AI Agents that measures their ability to locate find-to-hard information',
    full_description:
      'AI agents that can gather knowledge by browsing the internet are becoming increasingly useful and important. A performant browsing agent should be able to locate information that is hard-to-find, and which might require browsing tens or even hundreds of websites in the process. Existing benchmarks like SimpleQA, which measure models’ ability to retrieve basic isolated facts, are already saturated by models with access to fast browsing tools, such as GPT‑4o with browsing. To measure the ability for AI agents to locate hard-to-find, entangled information on the internet, we are open-sourcing a new benchmark of 1,266 challenging problems called BrowseComp, which stands for “Browsing Competition”. The benchmark is available in OpenAI’s simple evals github repository⁠',
    date: 'April 10, 2025',
    type: ['research'],
    impact: 'medium',
    year: '2025',
    sources: [
      {
        title: 'BrowseComp: a benchmark for browsing agents',
        url: 'https://openai.com/index/browsecomp/',
      },
    ],
  },
  {
    title: "GPT-4.1 Release",
    short_description: "A new series of GPT models focusing on coding, instruction following, and long context. Plus, OpenAI's first-ever nano model.",
    full_description: "Today, we’re launching three new models in the API: GPT‑4.1, GPT‑4.1 mini, and GPT‑4.1 nano. These models outperform GPT‑4o and GPT‑4o mini across the board, with major gains in coding and instruction following. They also have larger context windows—supporting up to 1 million tokens of context—and are able to better use that context with improved long-context comprehension. They feature a refreshed knowledge cutoff of June 2024.",
    date: "APril 14, 2025",
    impact: "small",
    type: ['model'],
    year: '2025',
    sources: [
      {
        title: "Introducing GPT-4.1 in the API",
        url: "https://openai.com/index/gpt-4-1/",
      }
    ]
  },
  {
    title: 'o3 & o4-mini Release',
    short_description:
      'The release of the smartest reasoning models in ChatGPT setting a new standard in both intelligence & usefullnes',
    full_description:
      "Today, we’re releasing OpenAI o3 and o4-mini, the latest in our o-series of models trained to think for longer before responding. These are the smartest models we’ve released to date, representing a step change in ChatGPT's capabilities for everyone from curious users to advanced researchers. For the first time, our reasoning models can agentically use and combine every tool within ChatGPT—this includes searching the web, analyzing uploaded files and other data with Python, reasoning deeply about visual inputs, and even generating images. Critically, these models are trained to reason about when and how to use tools to produce detailed and thoughtful answers in the right output formats, typically in under a minute, to solve more complex problems. This allows them to tackle multi-faceted questions more effectively, a step toward a more agentic ChatGPT that can independently execute tasks on your behalf. The combined power of state-of-the-art reasoning with full tool access translates into significantly stronger performance across academic benchmarks and real-world tasks, setting a new standard in both intelligence and usefulness. Memory with Search: ChatGPT can also use memories to inform search queries when ChatGPT searches the web using third-party search providers.",
    type: ['model', 'announcement'],
    impact: 'big',
    date: 'April 16, 2025',
    year: '2025',
    sources: [
      {
        title: 'Introducing OpenAI o3 and o4-mini',
        url: 'https://openai.com/index/introducing-o3-and-o4-mini/',
      },
      {
        title: 'o3 and o4-mini in ChatGPT',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_40089b1bfc',
      },
    ],
  },
  {
    title: 'GPT-4o Improvements',
    short_description:
      'Improvements aim to improve the model’s default personality to make it feel more intuitive and effective across a variety of tasks.',
    full_description:
      'We’re making additional improvements to GPT-4o, optimizing when it saves memories and enhancing problem-solving capabilities for STEM. We’ve also made subtle changes to the way it responds, making it more proactive and better at guiding conversations toward productive outcomes.',
    date: 'April 29, 2025',
    impact: 'tiny',
    type: ['update'],
    year: '2025',
    sources: [
      {
        title: 'Improvements to GPT-4o',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_c03c420095',
      },
    ],
  },
  {
    title: 'Fixes of GPT-4o Sycophancy',
    short_description:
      'OpenAI reverted the most recent update of GPT-4o due to issues with overly agreeable responses called sycophancy',
    full_description:
      'In last week’s GPT‑4o update, we made adjustments aimed at improving the model’s default personality to make it feel more intuitive and effective across a variety of tasks.When shaping model behavior, we start with baseline principles and instructions outlined in our Model Spec⁠(opens in a new window). We also teach our models how to apply these principles by incorporating user signals like thumbs-up / thumbs-down feedback on ChatGPT responses.However, in this update, we focused too much on short-term feedback, and did not fully account for how users’ interactions with ChatGPT evolve over time. As a result, GPT‑4o skewed towards responses that were overly supportive but disingenuous.',
    type: ['update'],
    impact: 'small',
    date: 'April 29, 2025',
    year: '2025',
    sources: [
      {
        title: 'Sycophancy in GPT-4o',
        url: 'https://openai.com/index/sycophancy-in-gpt-4o/',
      },
      {
        title: 'Updates to GPT-4o',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_8497c8b1d4',
      },
    ],
  },
  {
    title: 'Mobile UI Changes',
    short_description:
      'A row of individual tool icons from the mobile composer was replaced with a consolidated icon to reduce on-screen clutter',
    full_description:
      "We've removed the row of individual tool icons from the mobile composer and replaces it with the new sliders‑style icon to open the Skills menu; tapping that button opens a bottom‑sheet menu where users can choose tools like Create an image or Search the web.  No tools are deprecated—access is simply consolidated to clear space and reduce on‑screen clutter.",
    date: 'May 6, 2025',
    impact: 'tiny',
    type: ['update'],
    year: '2025',
    sources: [
      {
        title: 'Mobile UI (iOS/Android) changing on Free/Plus/Pro plans',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_acfe64e63a',
      },
    ],
  },
  {
    title: 'GitHub + DeepResearch, Enhanced Memory and more!',
    short_description:
      'DeepResearch now integrates with GitHub to deep research and ask questions of a codebase',
    full_description:
      'GitHub + DeepResearch: ChatGPT deep research with GitHub is available globally to Team users. It is also gradually rolling out to Plus and Pro users, except for those in the EEA, Switzerland, and the UK. Enterprise user access will be announced at a later date. Enhanced Memory in ChatGPT: Enhanced memory rolling out to all Plus and Pro users (including the EU). The new memory features are available in the EEA (EU + UK), Switzerland, Norway, Iceland, or Liechtenstein. These features are OFF by default and must be enabled in  Settings > Personalization > Reference  Chat  History. Opt‑in reminders: • Outside the European regions listed above, all Plus and Pro accounts that have memory enabled will receive the upgrade automatically.• If you previously opted out of memory, ChatGPT will not reference past conversations unless you opt back in.',
    type: ['feature', 'update'],
    impact: 'medium',
    date: 'May 8, 2025',
    year: '2025',
    sources: [
      {
        title: 'ChatGPT Release Notes',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_2a285b2c97',
      },
    ],
  },
  {
    title: 'Export DeepResearch as PDF + Sharepoint & OneDrive Integrations',
    short_description:
      'You can now export Deep Research reports as well-formatted PDFs - complete with tables, images citations, and sources. ChatGPT DeepResearch is now integrates with SharePoint & Onedrive.',
    full_description:
      "ChatGPT deep research with Sharepoint and OneDrive is available globally to Team users. It is also gradually rolling out to Plus and Pro users, except for those in the EEA, Switzerland, and the UK. Enterprise user access will be announced at a later date. See: Connecting SharePoint and Microsoft OneDrive to ChatGPT deep research Export Deep Research as PDF for Plus/Pro/TeamYou can now export your deep research reports as well-formatted PDFs—complete with tables, images, linked citations, and sources. To use, click the share icon and select 'Download as PDF.' It works for both new and past reports.",
    type: ['feature', 'update'],
    impact: 'small',
    date: 'May 12, 2025',
    year: '2025',
    sources: [
      {
        title: 'ChatGPT Release Notes',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_95bc392649',
      },
      {
        title:
          'Connecting SharePoint and Microsoft OneDrive to ChatGPT deep research',
        url: 'https://help.openai.com/en/articles/11367239-connect-apps-to-chatgpt-deep-research',
      },
    ],
  },
  {
    title: 'HealthBench - Evaluation for AI Systems',
    short_description:
      'HealthBench is a new benchmark designed to better measure capabilities of AI systems for health in. Built in partnership with 250+ physicians, HealthBench includes 5,000 realistic health conversations, each with a custom physician-created rubric to grade model responses.',
    full_description:
      'Purpose and MotivationHealthBench aims to ensure AI models are meaningful (reflecting real clinical impact), trustworthy (aligned with physician judgement), and unsaturated (leaving space for future improvements), addressing limitations of earlier exam-style datasets.External commentators call the release “unprecedented” in scale and depth, highlighting its potential to become a shared standard for safe medical AI.2. Dataset ConstructionScale & Diversity: 5 000 conversations spanning emergency referrals, global health, expertise-tailored communication and more; 49 languages represented.Clinical Rigor: 262 physicians from 60 countries authored or reviewed prompts and wrote 48 562 rubric criteria, each weighted by clinical importance.Conversation Realism: Although designed for multi-turn exchanges, independent analysis shows 58 % are single-turn, placing extra weight on the model’s first answer.medium.com3. Evaluation MethodologyEvery response is auto-graded by a specialised GPT-4.1 model against the physician rubrics, producing an overall percentage score per conversation.Two curated subsets extend the benchmark: HealthBench Consensus (3 671 heavily cross-validated examples with near-zero grading error) and HealthBench Hard (1 000 questions that frontier models still struggle with).4. Baseline ResultsFrontier performance: OpenAI’s o3 tops the chart and shows a 28 % gain over GPT-4o (Aug 2024), also outperforming Claude 3.7 Sonnet and Gemini 2.5 Pro.Cost–performance frontier: A new family of smaller “reasoning” models (e.g., GPT-4.1 nano) now beats last year’s flagship at 25× lower inference cost, promising accessibility for low-resource settings.Reliability curves reveal markedly better worst-case answers, but sizeable gaps remain—particularly on underspecified queries—which HealthBench Hard is designed to expose.5. Comparison with PhysiciansExpert doctors writing from scratch score below September 2024 model references; with April 2025 model outputs as a starting point, physicians no longer improve the answers, suggesting parity or better performance from o3 on average.',
    date: 'May 12, 2025',
    impact: 'medium',
    type: ['research'],
    year: '2025',
    sources: [
      {
        title: 'Introducing HealthBench',
        url: 'https://openai.com/index/healthbench/',
      },
    ],
  },
  {
    title: 'GPT-4.1 in ChatGPT & GPT-4o-mini retirement',
    short_description:
      "GPT-4.1 is now available in ChatGPT in request for demand. Compared to GPT-4o, it's even stronger at precise instruction following and web development tasks offering an alternative to OpenAI o3 and o4-mini for simpler, everyday coding needs. GPT-4o-mini gets replaced by GPT-4.1",
    full_description:
      "Since its launch in the API in April, GPT-4.1 has become a favorite among developers—by popular demand, we’re making it available directly in ChatGPT.  GPT-4.1 is a specialized model that excels at coding tasks. Compared to GPT-4o, it's even stronger at precise instruction following and web development tasks, and offers an alternative to OpenAI o3 and OpenAI o4-mini for simpler, everyday coding needs. Starting today, Plus, Pro, and Team users can access GPT-4.1 via the more models dropdown in the model picker. Enterprise and Edu users will get access in the coming weeks. GPT-4.1 has the same rate limits as GPT-4o for paid users.  Introducing GPT-4.1 mini, replacing GPT-4o mini, in ChatGPT for all usersGPT-4.1 mini is a fast, capable, and efficient small model, delivering significant improvements compared to GPT-4o mini—in instruction-following, coding, and overall intelligence. Starting today, GPT-4.1 mini replaces GPT-4o mini in the model picker under more models for paid users, and will serve as the fallback model for free users once they reach their GPT-4o usage limits. Rate limits remain the same. Evals for GPT-4.1 and GPT-4.1 mini were originally shared in the blog post accompanying their API release. They also went through standard safety evaluations. Detailed results are available in the newly launched Safety Evaluations Hub.",
    type: ['update'],
    impact: 'medium',
    date: 'May 14, 2025',
    year: '2025',
    sources: [
      {
        title: 'ChatGPT Release Notes',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_ddb7704ab0',
      },
    ],
  },
  {
    title: 'Dropbox Integration with DeepResearch',
    short_description:
      'You can now connect Dropbox to use with DeepResearch making comprehensive reports with your data',
    full_description:
      'ChatGPT deep research with Dropbox is available globally to Team users. It is also gradually rolling out to Plus and Pro users, except for those in the EEA, Switzerland, and the UK. Enterprise user access will be announced at a later date.',
    date: 'May 15, 2025',
    type: ['update'],
    impact: 'tiny',
    year: '2025',
    sources: [
      {
        title: 'ChatGPT Release Notes',
        url: 'https://help.openai.com/en/articles/6825453-chatgpt-release-notes#h_ddb7704ab0',
      },
    ],
  },
  {
    title: 'Codex - Software Engineering Agent',
    short_description:
      "Codex is a Software Engineering Agent that lives in the cloud designed to help you fix bugs, answer questions about your codebase, and more. It's powered by codex-1, a fine-tuned o3 model, optimized for Software Engineering",
    full_description:
      'research preview of Codex: a cloud-based software engineering agent that can work on many tasks in parallel. Codex can perform tasks for you such as writing features, answering questions about your codebase, fixing bugs, and proposing pull requests for review; each task runs in its own cloud sandbox environment, preloaded with your repository.Codex is powered by codex-1, a version of OpenAI o3 optimized for software engineering. It was trained using reinforcement learning on real-world coding tasks in a variety of environments to generate code that closely mirrors human style and PR preferences, adheres precisely to instructions, and can iteratively run tests until it receives a passing result. We’re starting to roll out Codex to ChatGPT Pro, Enterprise, and Team users today, with support for Plus and Edu coming soon.How Codex worksToday you can access Codex through the sidebar in ChatGPT and assign it new coding tasks by typing a prompt and clicking “Code”. If you want to ask Codex a question about your codebase, click “Ask”. Each task is processed independently in a separate, isolated environment preloaded with your codebase. Codex can read and edit files, as well as run commands including test harnesses, linters, and type checkers. Task completion typically takes between 1 and 30 minutes, depending on complexity, and you can monitor Codex’s progress in real time.Once Codex completes a task, it commits its changes in its environment. Codex provides verifiable evidence of its actions through citations of terminal logs and test outputs, allowing you to trace each step taken during task completion. You can then review the results, request further revisions, open a GitHub pull request, or directly integrate the changes into your local environment. In the product, you can configure the Codex environment to match your real development environment as closely as possible.',
    type: ['product'],
    impact: 'medium',
    date: 'May 16, 2025',
    year: '2025',
    sources: [
      {
        title: 'Introducing Codex',
        url: 'https://openai.com/index/introducing-codex/',
      },
    ],
  }
];
