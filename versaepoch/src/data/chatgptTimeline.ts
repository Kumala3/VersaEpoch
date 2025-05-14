
interface Source {
    title: string;
    url: string;
  }
  
export interface TimelineCardData {
title: string;
short_description: string;
full_description: string;
type: 'milestone' | 'update' | 'feature' | 'model' | 'announcement';
impact: 'tiny' | 'small' | 'medium' | 'big';
date: string;
sources: Source[];
}


export const timelineCards: TimelineCardData[] = [
    {
      title: 'ChatGPT Release',
      short_description:
        'OpenAI released ChatGPT to the public. Built on GPT-3.5, it quickly gained popularity for its ability to answer questions and generate content conversationally.',
      full_description:
        "On November 30, 2022, OpenAI released ChatGPT to the public as a free research preview. This marked a significant milestone in the development of conversational AI systems.\n\nBuilt on OpenAI's GPT-3.5 architecture, ChatGPT quickly gained unprecedented popularity, reaching over a million users within just five days of its release.\n\nThe system demonstrated remarkable capabilities in natural language understanding and generation, setting it apart from previous chatbots and AI assistants.\n\nUsers were impressed by ChatGPT's ability to maintain context throughout conversations, answer complex questions, assist with writing and coding tasks, explain difficult concepts, and even engage in creative writing.\n\nThe public release served multiple purposes for OpenAI: gathering user feedback to improve the system, understanding its limitations in real-world use cases, and addressing potential safety concerns.\n\nChatGPT immediately sparked discussions about the future of AI, its impact on various industries, and the ethical considerations surrounding increasingly capable language models.\n\nEducators raised concerns about students using the tool for completing assignments, leading to debates about AI detection tools and changes to educational practices.\n\nBusiness leaders quickly recognized the potential of the technology to transform customer service, content creation, and knowledge management functions.\n\nThe release also initiated a race among tech companies to develop and release competing AI systems, accelerating the pace of innovation in the field.\n\nDespite its impressive capabilities, early versions of ChatGPT had notable limitations, including a knowledge cutoff date, occasional factual errors, and sensitivity to input phrasing.\n\nChatGPT represented a new paradigm in human-AI interaction, moving from keyword-based search to natural conversation, fundamentally changing how people interact with AI systems.\n\nThe system's ability to generate human-like text raised questions about AI attribution, copyright, and the potential for misuse in creating misleading content.\n\nOpenAI implemented various safety measures and content policies to prevent harmful outputs, though these systems continued to evolve based on user feedback.\n\nThe release demonstrated the commercial potential of large language models, setting the stage for OpenAI's subsequent business model developments.\n\nChatGPT's popularity led to frequent capacity issues in its early days, with users often encountering \"at capacity\" messages during peak usage times.\n\nThe technology caught the attention of investors, with Microsoft deepening its partnership with OpenAI shortly after ChatGPT's release.\n\nMany users reported using ChatGPT as a personal tutor, creative partner, or programming assistant, showcasing the versatility of the technology.\n\nThe release also highlighted the computational requirements of running advanced AI systems, sparking discussions about the environmental impact of AI.\n\nChatGPT's debut represented the culmination of years of research in natural language processing, reinforcement learning, and human feedback mechanisms.\n\nIn retrospect, the release of ChatGPT is considered a defining moment in the history of artificial intelligence, bringing sophisticated AI capabilities to the general public for the first time.",
      type: 'milestone',
      impact: 'big',
      date: 'November 30, 2022',
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
      type: 'feature',
      impact: 'medium',
      date: 'February 1, 2023',
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
      type: 'model',
      impact: 'big',
      date: 'March 14, 2023',
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
      type: 'feature',
      impact: 'medium',
      date: 'May 24, 2023',
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
      type: 'feature',
      impact: 'medium',
      date: 'July 6, 2023',
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
      type: 'feature',
      impact: 'big',
      date: 'July 20, 2023',
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
      type: 'update',
      impact: 'medium',
      date: 'July 25, 2023',
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
      title: "ChatGPT Enterprise Introduction",
      short_description: "A launch of ChatGPT Enterprise offers enterprise-grade security and privacy, unlimited higher-speed GPT-4 access, longer context windows for processing longer inputs, advanced data analysis capabilities, customization options, and much more.",
      full_description: "Today we’re launching ChatGPT Enterprise, which offers enterprise-grade security and privacy, unlimited higher-speed GPT-4 access, longer context windows for processing longer inputs, advanced data analysis capabilities, customization options, and much more. ChatGPT Enterprise also provides unlimited access to Advanced Data Analysis, previously known as Code Interpreter. Learn more on our website and connect with our sales team to get started.",
      type: "announcement",
      impact: "medium",
      date: "August 28, 2023",
      sources: [
        {title: "Introducing ChatGPT Enterprise",
          url: "https://openai.com/index/introducing-chatgpt-enterprise/"
        }
      ]
    },
    {
      title: 'Custom GPTs Introduction',
      short_description:
        'OpenAI introduced Custom GPTs, allowing users to create specialized versions of ChatGPT tailored for specific purposes without coding.',
      full_description:
        "On November 6, 2023, at its first developer conference (DevDay), OpenAI introduced Custom GPTs, a revolutionary feature that allowed users to create specialized versions of ChatGPT tailored to specific purposes without requiring programming knowledge.\n\nCustom GPTs represented a significant democratization of AI customization, enabling non-technical users to create AI assistants with specialized knowledge, capabilities, and personalities through a simple, guided interface.\n\nThe feature allowed users to define their GPT's purpose, behaviors, and knowledge through natural language instructions, similar to prompting ChatGPT itself, making the creation process intuitive and accessible.\n\nCreators could upload reference files and documents to give their Custom GPTs specialized knowledge beyond what was available in ChatGPT's general training, enabling domain-specific expertise.\n\nThe system included the ability to configure custom actions, allowing GPTs to call external APIs and integrate with other services to perform real-world tasks beyond conversation.\n\nOpenAI introduced a GPT Builder tool that used AI itself to help create Custom GPTs, allowing users to describe what they wanted and have the system generate the configuration automatically.\n\nCustom GPTs could be kept private for personal use, shared with specific organizations or teams, or published to the GPT Store for broader access, creating a flexible permission system.\n\nThe GPT Store, announced alongside Custom GPTs but launched later, created a marketplace for users to discover GPTs created by others, with featured sections and categories for navigation.\n\nOpenAI implemented a revenue sharing program for creators of popular GPTs in the store, establishing an economic incentive for the development of high-quality specialized assistants.\n\nThe feature prompted comparisons to an \"app store for AI,\" suggesting a new paradigm where specialized AI capabilities could be distributed similar to mobile applications.\n\nCustom GPTs maintained OpenAI's safety guidelines while allowing for significant customization, with systems in place to prevent the creation of GPTs that violated content policies.\n\nThe introduction represented a shift in how AI systems could be adapted for specific use cases, moving from requiring API integration and development to a configuration-based approach accessible to everyone.\n\nBusiness users could create internal GPTs with access to proprietary data and tools, effectively creating AI assistants with company-specific knowledge while maintaining data privacy.\n\nOpenAI provided templates and examples to help users get started, showcasing potential applications across education, productivity, entertainment, and specialized professional domains.\n\nThe announcement highlighted how Custom GPTs could serve diverse needs from coding assistants and math tutors to creative writing partners and domain-specific knowledge experts.\n\nUsers could customize the appearance of their GPTs with names, descriptions, and profile images, creating distinctive identities for different specialized assistants.\n\nThe feature allowed for the creation of conversational interfaces to complex workflows, making sophisticated multi-step processes accessible through natural language interaction.\n\nCustom GPTs could be iteratively refined based on feedback and usage patterns, allowing creators to improve their assistants over time without technical redevelopment.\n\nThe introduction of Custom GPTs represented a significant evolution in OpenAI's strategy, moving from a single generalized assistant to an ecosystem of specialized AI tools created by the user community.\n\nThe feature addressed the limitation that a one-size-fits-all AI assistant couldn't excel at every specialized task, instead enabling purpose-built assistants optimized for specific domains and functions.\n\nCustom GPTs became a distinguishing feature of OpenAI's offering in an increasingly competitive AI assistant landscape, providing unique customization capabilities not immediately available from competitors.",
      type: 'feature',
      impact: 'big',
      date: 'November 6, 2023',
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
      type: 'model',
      impact: 'medium',
      date: 'November 6, 2023',
      sources: [
        {
          title:
            'OpenAI unveils GPT-4 Turbo, custom GPTs, and more at OpenAI DevDay',
          url: 'https://cryptoslate.com/openai-unveils-gpt-4-turbo-custom-gpts-and-more-at-openai-devday/',
        },
      ],
    },
    {
      title: 'Voice and Vision Capabilities',
      short_description:
        'ChatGPT gained multimodal capabilities, allowing it to see images and engage in voice conversations with users for a more natural interaction.',
      full_description:
        "On September 25, 2023, OpenAI announced the addition of voice and vision capabilities to ChatGPT, transforming it from a text-only system to a multimodal AI assistant that could see, hear, and speak.\n\nThe voice feature enabled users to have natural, back-and-forth conversations with ChatGPT, creating a more intuitive and accessible way to interact with the AI without typing.\n\nOpenAI developed five distinct voice options for ChatGPT, allowing users to choose the voice that felt most comfortable or appropriate for their needs and preferences.\n\nThe voice system was designed to respond with natural-sounding speech, including appropriate pauses, inflections, and reactions to conversational cues, moving beyond robotic text-to-speech.\n\nVoice capabilities were built using a new text-to-speech model that could generate human-like audio from just text and a few seconds of sample speech, representing a technical breakthrough in natural voice synthesis.\n\nThe vision capability allowed users to show images to ChatGPT through their camera or from their photo library, enabling the AI to analyze, describe, and answer questions about visual content.\n\nWith vision features, ChatGPT could perform tasks like identifying objects in photos, analyzing charts and graphs, assessing fashion choices, interpreting diagrams, or helping identify plants and animals.\n\nThe system could provide step-by-step guidance for physical tasks when shown images, such as cooking preparation, home repairs, or craft projects, expanding its utility beyond digital assistance.\n\nVoice and vision together enabled new use cases, such as pointing a camera at something while asking questions about it by voice, receiving spoken explanations about what the AI was seeing.\n\nOpenAI implemented specific safety measures for vision features, including techniques to decline requests to analyze or identify images of real people to protect privacy.\n\nThe voice interface was designed with latency optimization to create conversational experiences that felt responsive and natural rather than delayed or disjointed.\n\nThese multimodal capabilities were initially rolled out to ChatGPT Plus and Enterprise customers, following OpenAI's pattern of premium-first feature releases.\n\nThe voice feature in particular positioned ChatGPT as a competitor to voice assistants like Siri, Alexa, and Google Assistant, but with significantly more advanced conversational capabilities.\n\nFor visually impaired users, the combination of vision and voice created powerful accessibility benefits, allowing the AI to describe visual content and provide information through audio.\n\nOpenAI emphasized responsible development of voice technology, acknowledging concerns about voice cloning and implementing safeguards against creating voices that could impersonate specific individuals.\n\nThe vision system was trained to recognize when it might not have enough information to accurately analyze an image, expressing appropriate uncertainty rather than making confident mistakes.\n\nThe introduction of these features represented a shift toward more embodied AI that could perceive and interact with the physical world, bridging digital and physical reality.\n\nVoice capabilities were initially released as an opt-in feature, requiring users to explicitly enable voice conversations rather than automatically activating the microphone.\n\nThe vision system demonstrated remarkable capabilities in understanding complex visual information, from interpreting memes and visual jokes to analyzing technical diagrams.\n\nThese multimodal features represented a significant technical achievement, requiring the integration of advanced models across different domains (language, vision, speech recognition, and speech synthesis) into a cohesive system.\n\nThe combined capabilities moved ChatGPT closer to science fiction depictions of AI assistants, creating more natural human-AI interaction patterns that resembled human-to-human communication.",
      type: 'feature',
      impact: 'big',
      date: 'September 25, 2023',
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
      title: 'GPT-4o Arrival',
      short_description:
        'OpenAI introduced GPT-4o (omni), offering significantly faster performance, improved capabilities across text, vision, and audio, with reduced latency for real-time interactions.',
      full_description:
        "On May 13, 2024, OpenAI announced GPT-4o (\"omni\"), a groundbreaking multimodal model that represented a significant leap forward in the performance and capabilities of large language models.\n\nGPT-4o was designed from the ground up as a multimodal system, natively integrating text, vision, and audio processing rather than combining separate models, resulting in more coherent cross-modal understanding.\n\nThe model demonstrated dramatically improved response speed, with latency reduced by up to 10x compared to previous models, enabling near real-time interactions that felt more like human conversation.\n\nGPT-4o featured native audio understanding and generation capabilities, processing speech and sound with unprecedented accuracy and responding with natural-sounding voice outputs.\n\nOpenAI made the surprising announcement that GPT-4o would be available to all ChatGPT users, including those on the free tier, representing a significant democratization of access to cutting-edge AI technology.\n\nThe model demonstrated human-level performance across a wide range of benchmarks, showing particular improvements in reasoning, coding, mathematics, and creative tasks.\n\nGPT-4o featured enhanced multilingual capabilities, with improved performance across dozens of languages in both understanding and generation, reducing the performance gap between English and other languages.\n\nThe \"omni\" designation highlighted the model's ability to seamlessly handle multiple input and output modalities, switching between text, images, and audio without degradation in performance.\n\nOpenAI emphasized responsible deployment of GPT-4o, implementing enhanced safety measures to prevent misuse while making the technology widely available.\n\nThe model showed improved performance in understanding cultural nuances, idiomatic expressions, and context-specific meanings across different languages and regions.\n\nGPT-4o's reduced latency made it particularly well-suited for real-time applications like voice conversations, live assistance, and interactive problem-solving sessions.\n\nThe model maintained the 128k token context window of GPT-4 Turbo, allowing it to process lengthy documents and maintain awareness throughout extended conversations.\n\nGPT-4o represented a significantly more cost-effective model for developers, with OpenAI reducing API pricing while improving capabilities, making advanced AI more economically accessible.\n\nThe model demonstrated enhanced reasoning about visual information, including the ability to analyze complex diagrams, understand spatial relationships, and interpret visual metaphors.\n\nOpenAI positioned GPT-4o as a foundation for more natural human-AI interaction, moving beyond the constraints of text-based interfaces to more intuitive multimodal communication.\n\nThe model showed particular improvements in code generation and debugging, with enhanced ability to understand programming concepts and generate efficient, accurate code across multiple languages.\n\nGPT-4o featured improved knowledge of recent events, with a more current training cutoff date than previous models, making it more informed about recent developments.\n\nThe release highlighted OpenAI's accelerating pace of innovation, delivering a major model upgrade less than a year after the introduction of GPT-4 Turbo.\n\nThe model demonstrated enhanced capability to follow complex instructions, particularly when they involved multiple modalities, such as analyzing an image while listening to audio context.\n\nGPT-4o's improved performance-to-cost ratio positioned it to enable new categories of AI applications that had previously been impractical due to technical or economic constraints.\n\nThe release represented OpenAI's vision for AI that could more naturally integrate into human environments and workflows, responding to the full spectrum of human communication methods rather than just text.",
      type: 'model',
      impact: 'big',
      date: 'May 13, 2024',
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
  ];
