'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { BlogDetailArticle } from '@/data/blog-detail-data';
import styles from './LLMQuickSummaryCard.module.css';

interface LLMQuickSummaryCardProps {
  article: BlogDetailArticle;
}

const UI_STRINGS: Record<
  string,
  {
    badge: string;
    title: string;
    verified: string;
    reviewNote: string;
  }
> = {
  en: {
    badge: 'Clinical Synopsis',
    title: 'Key Findings at a Glance',
    verified: 'Master Smile Studio Medical Board',
    reviewNote: 'Medically reviewed in Antalya, Turkey',
  },
  tr: {
    badge: 'Klinik Özet',
    title: 'Öne Çıkan Bulgular',
    verified: 'Master Smile Studio Hekim Kurulu',
    reviewNote: 'Antalya, Türkiye • Medikal olarak incelenmiştir',
  },
  de: {
    badge: 'Klinische Übersicht',
    title: 'Wichtigste Fakten im Überblick',
    verified: 'Master Smile Studio Ärzteteam',
    reviewNote: 'Medizinisch geprüft in Antalya, Türkei',
  },
  pl: {
    badge: 'Podsumowanie Kliniczne',
    title: 'Kluczowe fakty w skrócie',
    verified: 'Rada Medyczna Master Smile Studio',
    reviewNote: 'Zweryfikowane medycznie w Antalyi, Turcja',
  },
  pt: {
    badge: 'Sinopse Clínica',
    title: 'Factos Principais em Resumo',
    verified: 'Conselho Médico Master Smile Studio',
    reviewNote: 'Revisão médica em Antalya, Turquia',
  },
  es: {
    badge: 'Sinopsis Clínica',
    title: 'Puntos Clave del Tratamiento',
    verified: 'Consejo Médico Master Smile Studio',
    reviewNote: 'Revisión médica en Antalya, Turquía',
  },
  ru: {
    badge: 'Клинический обзор',
    title: 'Ключевые факты кратко',
    verified: 'Медицинский совет Master Smile Studio',
    reviewNote: 'Проверено врачами в Анталье, Турция',
  },
};

export default function LLMQuickSummaryCard({ article }: LLMQuickSummaryCardProps) {
  const locale = useLocale();
  const ui = UI_STRINGS[locale] || UI_STRINGS.en;

  const renderTextWithLinks = (text: string) => {
    if (!text) return null;
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const elements: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        elements.push(text.substring(lastIndex, match.index));
      }
      const linkText = match[1];
      const linkHref = match[2];

      elements.push(
        <Link
          key={match.index}
          href={linkHref}
          className={styles.inlineLink}
        >
          {linkText}
        </Link>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      elements.push(text.substring(lastIndex));
    }

    return elements.length > 0 ? elements : text;
  };

  // Extract explicit or synthesized answer
  const getQuickAnswer = (): string => {
    if (article.llmSummary?.quickAnswer) {
      return (
        article.llmSummary.quickAnswer[locale] ||
        article.llmSummary.quickAnswer.en ||
        article.llmSummary.quickAnswer.tr ||
        ''
      );
    }
    const rawKey = article.keyTakeaway?.[locale] || article.keyTakeaway?.en || article.keyTakeaway?.tr || '';
    if (rawKey) return rawKey;

    const rawIntro = article.intro?.[locale]?.[0] || article.intro?.en?.[0] || article.intro?.tr?.[0] || '';
    return rawIntro;
  };

  // Extract takeaways
  const getKeyTakeaways = (): string[] => {
    if (article.llmSummary?.keyTakeaways) {
      const items =
        article.llmSummary.keyTakeaways[locale] ||
        article.llmSummary.keyTakeaways.en ||
        article.llmSummary.keyTakeaways.tr ||
        [];
      if (items.length > 0) return items;
    }

    const results: string[] = [];
    if (article.stats && article.stats.length > 0) {
      article.stats.slice(0, 3).forEach((stat) => {
        const label = stat.label?.[locale] || stat.label?.en || stat.label?.tr || '';
        if (label) results.push(`${stat.value} — ${label}`);
      });
    }

    if (article.faqs && article.faqs.length > 0 && results.length < 3) {
      const firstFaq = article.faqs[0];
      const q = firstFaq.q?.[locale] || firstFaq.q?.en || firstFaq.q?.tr || '';
      const a = firstFaq.a?.[locale] || firstFaq.a?.en || firstFaq.a?.tr || '';
      if (q && a) results.push(`${q}: ${a.substring(0, 140)}...`);
    }

    return results;
  };

  const getVerdict = (): string => {
    if (article.llmSummary?.medicalVerdict) {
      return (
        article.llmSummary.medicalVerdict[locale] ||
        article.llmSummary.medicalVerdict.en ||
        article.llmSummary.medicalVerdict.tr ||
        ''
      );
    }
    return '';
  };

  const quickAnswer = getQuickAnswer();
  const takeaways = getKeyTakeaways();
  const verdict = getVerdict();
  const badgeLabel = article.llmSummary?.badge?.[locale] || ui.badge;
  // Clean badge label of any accidental emojis
  const cleanBadge = badgeLabel.replace(/^[⚡\s]+/, '').replace(/^AI\s+/i, '');

  if (!quickAnswer && takeaways.length === 0) return null;

  return (
    <section
      className={styles.card}
      aria-label="Clinical Summary and Key Findings"
    >
      <div className={styles.header}>
        <span className={styles.badge}>{cleanBadge || ui.badge}</span>
        <h3 className={styles.title}>{ui.title}</h3>
      </div>

      {quickAnswer && (
        <p className={styles.leadText}>{renderTextWithLinks(quickAnswer)}</p>
      )}

      {takeaways.length > 0 && (
        <ul className={styles.takeawayList}>
          {takeaways.map((item, idx) => (
            <li key={idx} className={styles.takeawayItem}>
              <span className={styles.bulletDot} aria-hidden="true" />
              <div className={styles.itemContent}>{renderTextWithLinks(item)}</div>
            </li>
          ))}
        </ul>
      )}

      {verdict && (
        <div className={styles.verdictCallout}>
          <p className={styles.verdictText}>
            <span className={styles.verdictLabel}>Conclusion: </span>
            {renderTextWithLinks(verdict)}
          </p>
        </div>
      )}

      <footer className={styles.footer}>
        <span className={styles.boardName}>{ui.verified}</span>
        <span className={styles.reviewNote}>{ui.reviewNote}</span>
      </footer>
    </section>
  );
}
