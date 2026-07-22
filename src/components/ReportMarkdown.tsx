import React from 'react';
import Markdown from 'react-markdown';
import { Sparkles, Quote, CheckCircle2, ShieldAlert, Zap, BookOpen, Star, AlertCircle, ArrowRight } from 'lucide-react';

interface ReportMarkdownProps {
  content: string;
  className?: string;
  fontSize?: 'normal' | 'large' | 'xlarge';
}

export default function ReportMarkdown({ content, className = '', fontSize = 'normal' }: ReportMarkdownProps) {
  const fontClasses = {
    normal: 'text-xs md:text-sm',
    large: 'text-sm md:text-base',
    xlarge: 'text-base md:text-lg',
  }[fontSize];

  return (
    <div className={`report-markdown-container space-y-3 ${fontClasses} ${className}`}>
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-xl md:text-2xl font-black font-display text-slate-100 dark:text-slate-100 border-b border-amber-400/30 pb-2 mb-4 mt-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 animate-pulse" />
              <span>{children}</span>
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg md:text-xl font-black font-display text-amber-300 dark:text-amber-300 mt-5 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-sm md:text-base font-bold text-slate-100 dark:text-slate-100 mt-4 mb-2 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{children}</span>
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xs md:text-sm font-bold text-slate-200 dark:text-slate-200 mt-3 mb-1.5">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-slate-300 dark:text-slate-300 leading-relaxed mb-3">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-extrabold text-amber-400 dark:text-amber-300 font-sans tracking-wide px-0.5">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-indigo-300 dark:text-indigo-300 font-serif">
              {children}
            </em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-4 p-4 rounded-2xl bg-amber-400/5 dark:bg-amber-400/10 border-l-4 border-amber-400 text-slate-200 dark:text-slate-200 italic shadow-md relative overflow-hidden font-serif">
              <div className="flex items-start gap-2.5">
                <Quote className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">{children}</div>
              </div>
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2.5 my-3">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2.5 my-3 list-decimal list-inside text-slate-300 dark:text-slate-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-slate-300 dark:text-slate-300 leading-relaxed bg-slate-950/70 p-3 rounded-xl border border-slate-850 shadow-sm transition-all hover:border-slate-750">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">{children}</div>
              </div>
            </li>
          ),
          code: ({ children }) => (
            <code className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 font-mono text-xs">
              {children}
            </code>
          ),
          hr: () => (
            <hr className="my-6 border-t border-slate-800/80" />
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

interface FeatureCardBlockProps {
  title: string;
  badge?: string;
  icon?: React.ElementType;
  variant?: 'amber' | 'emerald' | 'indigo' | 'rose' | 'teal' | 'slate';
  children: React.ReactNode;
}

export function FeatureCardBlock({
  title,
  badge,
  icon: Icon = Star,
  variant = 'slate',
  children
}: FeatureCardBlockProps) {
  const variantStyles = {
    amber: {
      border: 'border-amber-400/30',
      bg: 'bg-amber-400/5',
      badgeBg: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
      iconColor: 'text-amber-400',
    },
    emerald: {
      border: 'border-emerald-400/30',
      bg: 'bg-emerald-400/5',
      badgeBg: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
      iconColor: 'text-emerald-400',
    },
    indigo: {
      border: 'border-indigo-400/30',
      bg: 'bg-indigo-400/5',
      badgeBg: 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20',
      iconColor: 'text-indigo-400',
    },
    rose: {
      border: 'border-rose-400/30',
      bg: 'bg-rose-400/5',
      badgeBg: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
      iconColor: 'text-rose-400',
    },
    teal: {
      border: 'border-teal-400/30',
      bg: 'bg-teal-400/5',
      badgeBg: 'bg-teal-400/10 text-teal-400 border-teal-400/20',
      iconColor: 'text-teal-400',
    },
    slate: {
      border: 'border-slate-850',
      bg: 'bg-slate-950/80',
      badgeBg: 'bg-slate-800 text-slate-300 border-slate-700',
      iconColor: 'text-amber-400',
    }
  }[variant];

  return (
    <div className={`p-4 md:p-5 rounded-2xl ${variantStyles.bg} border ${variantStyles.border} shadow-lg space-y-2.5 relative overflow-hidden transition-all hover:shadow-xl`}>
      <div className="flex items-center justify-between gap-3 border-b border-slate-800/60 pb-2.5">
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${variantStyles.iconColor}`} />
          <h4 className="text-xs md:text-sm font-black text-slate-100 tracking-tight">
            {title}
          </h4>
        </div>
        {badge && (
          <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${variantStyles.badgeBg}`}>
            {badge}
          </span>
        )}
      </div>
      <div className="text-xs md:text-sm text-slate-300 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
