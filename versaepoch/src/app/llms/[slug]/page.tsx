'use client';

import styles from '@/styles/llmDetailsPage.module.scss';
import { useState, useEffect, ReactElement } from 'react';
import { useParams } from 'next/navigation';
import { Spinner } from '@/components/ui/Spinner';
import Link from 'next/link';
import {
  CircleArrowRightIcon,
  ModalityTextIcon,
  ModalityAudioIcon,
  ModalityVideoIcon,
  ModalityImageIcon,
  ChatgptIcon,
  ClaudeIcon,
  GeminiIcon,
  MetaIcon,
  DeepseekIcon,
  XaiIcon,
  MistralIcon,
} from '@/components/ui/UIIcons';
import { capitalizeWord } from '@/utils/helperFunctions';
import {
  BestForCodingIcon,
  BestForWritingIcon,
  BestForResearchAnalysisIcon,
  BestForBrainstormingIcon,
  BestForProductivityIcon,
  BestForLifestyleIcon,
  BestForCookingIcon,
  BestForGeneralKnowledgeIcon,
  BestForOrganizingIcon,
  BestForImageGenerationIcon,
  BadgeQuestionIcon,
} from '@/components/ui/UIIcons';

interface ModelData {
  id: string;
  modelName: string;
  company: string;
  description: string;
  knowledgeCutoff: string;
  contextWindow: number;
  maxOutput: number;
  releaseDate: string;
  documentation: string;
  bestFor: string[];
  modalities: string[];
  useCases?: string[];
}

export default function LLMDetailsPage() {
  const [modelData, setModelData] = useState<ModelData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const storedData = sessionStorage.getItem('modelData');

    if (storedData) {
      setModelData(JSON.parse(storedData));
      sessionStorage.removeItem('modelData');
      setLoading(false);
    } else {
      fetchModelBySlug(params.slug as string);
    }
  }, [params.slug]);

  const fetchModelBySlug = async (slug: string) => {
    try {
      const response = await fetch('/api/llm-by-slug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ modelName: slug }),
      });

      const data = await response.json();

      if (data.success) {
        setModelData(data.modelData);
      } else {
        setError(data.errorMessage);
        setLoading(false);
        return;
      }
    } catch {
      setError('Failed to fetch model by slug');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <Spinner />
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h3>{error}</h3>
        <div className={styles.navigationPanel}>
          <Link href={'/llms-directory'} className={styles.navigateButton}>
            LLMs Directory
            <CircleArrowRightIcon
              className={styles.navigateButton__icon}
              color="#fff"
            />
          </Link>
          <Link href={'/llms'} className={styles.navigateButton}>
            LLMs Space
            <CircleArrowRightIcon
              className={styles.navigateButton__icon}
              color="#fff"
            />
          </Link>
        </div>
        <div>
          <p className={styles.errorContainerNoticeText}>
            Please make sure you meant correct model.
          </p>
        </div>
      </div>
    );
  }

  const getCompanyIcon = (company: string) => {
    switch (company.toLowerCase()) {
      case 'openai':
        return <ChatgptIcon />;
      case 'anthropic':
        return <ClaudeIcon />;
      case 'google':
        return <GeminiIcon />;
      case 'meta':
        return <MetaIcon />;
      case 'deepseek':
        return <DeepseekIcon />;
      case 'xai':
        return <XaiIcon />;
      case 'mistral':
        return <MistralIcon />;
      default:
        return;
    }
  };

  const getModalityIcon = (modality: string) => {
    switch (modality) {
      case 'text':
        return (
          <ModalityTextIcon
            color="#000"
            className={styles.modalityElement__icon}
          />
        );
      case 'audio':
        return (
          <ModalityAudioIcon
            color="#000"
            className={styles.modalityElement__icon}
          />
        );
      case 'video':
        return (
          <ModalityVideoIcon
            color="#000"
            className={styles.modalityElement__icon}
          />
        );
      case 'image':
        return (
          <ModalityImageIcon
            color="#000"
            className={styles.modalityElement__icon}
          />
        );
      default:
        return;
    }
  };

  const getBestForIcon = (bestFor: string) => {
    switch (bestFor) {
      case 'Research & Analysis':
        return (
          <BestForResearchAnalysisIcon
            color="#000"
            className={styles.bestForElement__icon}
          />
        );
      case 'Coding':
        return (
          <BestForCodingIcon
            color="#000"
            className={styles.bestForElement__icon}
          />
        );
      case 'Writing':
        return (
          <BestForWritingIcon
            color="#000"
            className={styles.bestForElement__icon}
          />
        );
      case 'Brainstorming':
        return (
          <BestForBrainstormingIcon
            color="#000"
            className={styles.bestForElement__icon}
          />
        );
      case 'Productivity':
        return (
          <BestForProductivityIcon
            color="#000"
            className={styles.bestForElement__icon}
          />
        );
      case 'Lifestyle':
        return (
          <BestForLifestyleIcon
            color="#000"
            className={styles.bestForElement__icon}
          />
        );
      case 'Cooking':
        return (
          <BestForCookingIcon
            color="#000"
            className={styles.bestForElement__icon}
          />
        );
      case 'General Knowledge':
        return (
          <BestForGeneralKnowledgeIcon
            color="#000"
            className={styles.bestForElement__icon}
          />
        );
      case 'Organizing':
        return (
          <BestForOrganizingIcon
            color="#000"
            className={styles.bestForElement__icon}
          />
        );
      case 'Image Generation':
        return (
          <BestForImageGenerationIcon
            color="#000"
            className={styles.bestForElement__icon}
          />
        );
      default:
        return;
    }
  };

  const getCompanyDescription = (company: string) => {
    switch (company.toLowerCase()) {
      case 'openai':
        return (
          <p>
            OpenAI is an AI research and deployment company. Their mission is to
            ensure that artificial general intelligence benefits all of
            humanity. AI systems that are generally smarter than humans
          </p>
        );
      case 'anthropic':
        return 'Anthropic is an AI safety and research company. They build reliable, interpretable, and steerable AI systems. They believe AI will have a vast impact on the world. Anthropic is dedicated to building systems that people can rely on and generating research about the opportunities and risks of AI.';
      case 'google':
        return 'Google is an information and computer science company. They believe that AI is a foundational and transformational technology that will provide compelling and helpful benefits to people and society through its capacity to assist, complement, empower, and inspire people in almost every field of human endeavor.';
      case 'meta':
        return 'Meta is driven to build incredible things that connect people in inspiring ways.';
      case 'xai':
        return 'Understand the universe.  AI’s knowledge should be all-encompassing and as far-reaching as possible. We build AI specifically to advance human comprehension and capabilities.';
      case 'deepseek':
        return 'A Chinese AI company founded in 2023 develops LLMs that rival OpenAI reasoning models';
      case 'mistral':
        return 'A pioneering French AI startup founded in 2023. They envision a future where AI is abundant and accessible. They aspire to empower the world to build with—and benefit from—the most significant technology of our time.';
      default:
        return '';
    }
  };

  const modalContents = {
    company: getCompanyDescription(modelData?.company ?? ''),
    knowledgeCutoff: 'The last time model was updated',
    maxOutput: 'Maximum number of tokens a model can output in single response',
    contextWindow: 'Maximum number of tokens model remembers',
    bestFor: `Scenarios & cases model is best for`,
    modalities: 'Data types the model supports as an input',
  };

  const handleModalOpen = (modalId: string) => {
    setActiveModal(modalId);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  const InfoModal = ({
    modalId,
    content,
  }: {
    modalId: string;
    content: string | ReactElement;
  }) => {
    return (
      <>
        <div
          onMouseEnter={() => handleModalOpen(modalId)}
          onMouseLeave={handleModalClose}
          className={styles.moreInfoContainer}>
          <BadgeQuestionIcon color="#000" className={styles.questionIcon} />
        </div>
        {activeModal === modalId && (
          <div className={styles.descriptionModal}>
            {content}
          </div>
        )}
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        {getCompanyIcon(modelData?.company ?? '')}
        <h2 className={styles.title}>{modelData?.modelName}</h2>
      </div>

      <div className={styles.shortDescriptionSection}>
        <h4 className={styles.sectionLabel}>About</h4>

        <div className={styles.sectionElement}>
          <div className={styles.sectionElement__leftContent}>
            <h6>Short Description</h6>
          </div>
          <p className={styles.sectionElement__rightContent}>
            {modelData?.description}
          </p>
        </div>
      </div>

      {modelData?.useCases && (
        <div className={styles.useCasesSection}>
          <h4 className={styles.sectionLabel}>Use Cases</h4>
        </div>
      )}

      <div className={styles.specificationsSection}>
        <div>
          <h4 className={styles.sectionLabel}>Specifications</h4>
        </div>
        <div className={styles.sectionElements}>
          <div className={styles.sectionElement}>
            <div className={styles.sectionElement__leftContent}>
              <div className={styles.companyContainer}>
                <h6>Company</h6>
                <InfoModal modalId="company" content={modalContents.company} />
              </div>
            </div>
            <h6 className={styles.sectionElement__rightContent}>
              {modelData?.company}
            </h6>
          </div>
          <div className={styles.sectionElement}>
            <div className={styles.sectionElement__leftContent}>
              <h6>Release Date</h6>
            </div>
            <span className={styles.sectionElement__rightContent}>
              {modelData?.releaseDate}
            </span>
          </div>
          <div className={styles.sectionElement}>
            <div className={styles.sectionElement__leftContent}>
              <div className={styles.companyContainer}>
                <h6>Knowledge Cutoff</h6>
                <InfoModal modalId='knowledgeCutoff' content={modalContents.knowledgeCutoff} />
              </div>
            </div>
            <span className={styles.sectionElement__rightContent}>
              {modelData?.knowledgeCutoff ?? "None"}
            </span>
          </div>
          <div className={styles.sectionElement}>
            <div className={styles.sectionElement__leftContent}>
              <div className={styles.companyContainer}>
                <h6>Max Output</h6>
                <InfoModal modalId='maxOutput' content={modalContents.maxOutput} />
              </div>
            </div>
            <span className={styles.sectionElement__rightContent}>
              {modelData?.maxOutput ?? "None"}
            </span>
          </div>
          <div className={styles.sectionElement}>
            <div className={styles.sectionElement__leftContent}>
              <div className={styles.companyContainer}>
                <h6>Context Window</h6>
                <InfoModal modalId='contextWindow' content={modalContents.contextWindow} />
              </div>
            </div>
            <span className={styles.sectionElement__rightContent}>
              {modelData?.contextWindow ?? "None"}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.otherSection}>
        <div>
          <h4 className={styles.sectionLabel}>Other</h4>
        </div>

        <div className={styles.sectionElements}>
          {modelData?.bestFor && (
            <div className={styles.sectionElement}>
              <div className={styles.sectionElement__leftContent}>
                <div className={styles.companyContainer}>
                  <h6>Best For</h6>
                  <InfoModal modalId='bestFor' content={modalContents.bestFor} />
                </div>
              </div>

              <div className={styles.sectionElement__rightContent}>
                <ul className={styles.bestForRightContainer}>
                  {modelData?.bestFor.map((bestFor) => (
                    <li key={bestFor} className={styles.bestForElement}>
                      {getBestForIcon(bestFor)}
                      {bestFor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className={styles.sectionElement}>
            <div className={styles.sectionElement__leftContent}>
              <div className={styles.companyContainer}>
                <h6>Modalities</h6>
                <InfoModal modalId='modalities' content={modalContents.modalities} />
              </div>
            </div>
            <div className={styles.sectionElement__rightContent}>
              <ul className={styles.modalitiesRightContainer}>
                {modelData?.modalities.map((modality) => (
                  <li key={modality} className={styles.modalityElement}>
                    {getModalityIcon(modality)}
                    {capitalizeWord(modality)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
