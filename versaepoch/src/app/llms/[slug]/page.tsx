'use client';

import styles from '@/styles/llmDetailsPage.module.scss';
import { useState, useEffect } from 'react';
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
          <p>
            If not, click on one of the buttons above to view the LLMs you are
            looking for.
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
            className={styles.bestForElement_icon}
          />
        );
      case 'Writing':
        return (
          <BestForWritingIcon
            color="#000"
            className={styles.bestForElement_icon}
          />
        );
      case 'Brainstorming':
        return (
          <BestForBrainstormingIcon
            color="#000"
            className={styles.bestForElement_icon}
          />
        );
      case 'Productivity':
        return (
          <BestForProductivityIcon
            color="#000"
            className={styles.bestForElement_icon}
          />
        );
      case 'Lifestyle':
        return (
          <BestForLifestyleIcon
            color="#000"
            className={styles.bestForElement_icon}
          />
        );
      case 'Cooking':
        return (
          <BestForCookingIcon
            color="#000"
            className={styles.bestForElement_icon}
          />
        );
      case 'General Knowledge':
        return (
          <BestForGeneralKnowledgeIcon
            color="#000"
            className={styles.bestForElement_icon}
          />
        );
      case 'Organizing':
        return (
          <BestForOrganizingIcon
            color="#000"
            className={styles.bestForElement_icon}
          />
        );
      case 'Image Generation':
        return (
          <BestForImageGenerationIcon
            color="#000"
            className={styles.bestForElement_icon}
          />
        );
      default:
        return;
    }
  };

  return (
    <div className={styles.container}>
      {/* Image for each LLM */}
      <div className={styles.topContainer}>
        {getCompanyIcon(modelData?.company ?? '')}
        <h2 className={styles.title}>{modelData?.modelName}</h2>
      </div>

      <div className={styles.shortDescriptionSection}>
        <h4 className={styles.sectionLabel}>About</h4>

        <div className={styles.shortDescriptionContainer}>
          <h6 className={styles.shortDescriptionContainer__leftContent}>
            Short Description
          </h6>
          <p className={styles.shortDescriptionContainer__rightContent}>
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
          <p className={styles.sectionDescription}>
            See all key parameters that matter
          </p>
        </div>
        <div className={styles.sectionElements}>
          <div className={styles.sectionElement}>
            <div className={styles.sectionElement__leftContent}>
              <div className={styles.companyContainer}>
                <h6>Company</h6>
                <p className={styles.sectionDescription}>
                  Short company description
                </p>
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
              <h6>Knowledge Cutoff</h6>
            </div>
            <span className={styles.sectionElement__rightContent}>
              {modelData?.knowledgeCutoff}
            </span>
          </div>
          <div className={styles.sectionElement}>
            <div className={styles.sectionElement__leftContent}>
              <h6>Max Output</h6>
            </div>
            <span className={styles.sectionElement__rightContent}>
              {modelData?.maxOutput}
            </span>
          </div>
          <div className={styles.sectionElement}>
            <div className={styles.sectionElement__leftContent}>
              <h6>Context Window</h6>
            </div>

            <span className={styles.sectionElement__rightContent}>
              {modelData?.contextWindow}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.otherSection}>
        <div>
          <h4 className={styles.sectionLabel}>Other</h4>
          <p className={styles.sectionDescription}>
            See cool info like Best For, Modalities
          </p>
        </div>

        <div className={styles.sectionElements}>
          {modelData?.bestFor && (
            <div className={styles.sectionElement}>
              <div className={styles.sectionElement__leftContent}>
                <div className={styles.bestForLeftContainer}>
                  <h6>Best For</h6>
                  <p className={styles.sectionDescription}>
                    Understand in what scenarios, cases, and areas{' '}
                    {modelData?.modelName} is best for
                  </p>
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
              <div className={styles.modalitiesLeftContainer}>
                <h6>Modalities</h6>
                <p className={styles.sectionDescription}>
                  See what data type the model supports as an input
                </p>
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
