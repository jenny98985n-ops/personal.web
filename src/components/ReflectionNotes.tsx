import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Check, RotateCcw, Edit3, Bookmark, Heart, Tag } from 'lucide-react';

interface ReflectionNotesProps {
  moduleId: string;
  moduleName: string;
}

interface NoteState {
  text: string;
  resonance: number;
  tags: string[];
  lastUpdated: string;
}

const QUICK_TAGS = [
  '🎯 高度共鳴',
  '💡 深受啟發',
  '🔮 命中核心',
  '⏳ 待時間驗證',
  '📝 實用行動指引',
  '🧩 拼湊出自我拼圖'
];

export default function ReflectionNotes({ moduleId, moduleName }: ReflectionNotesProps) {
  const storageKey = `reflection_notes_${moduleId}`;
  
  const [note, setNote] = useState<NoteState>({
    text: '',
    resonance: 5,
    tags: [],
    lastUpdated: ''
  });
  
  const [isSaved, setIsSaved] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const autoSaveTimeout = useRef<NodeJS.Timeout | null>(null);

  // Load from localStorage on mount or moduleId change
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setNote(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved reflection notes', e);
      }
    } else {
      setNote({
        text: '',
        resonance: 5,
        tags: [],
        lastUpdated: ''
      });
    }
    setIsSaved(false);
    setShowClearConfirm(false);
  }, [moduleId]);

  const saveNote = (updatedNote: NoteState) => {
    const now = new Date();
    const formattedTime = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const noteWithTime = {
      ...updatedNote,
      lastUpdated: formattedTime
    };
    
    localStorage.setItem(storageKey, JSON.stringify(noteWithTime));
    setNote(noteWithTime);
    setIsSaved(true);
    
    // Clear save indicator after 2 seconds
    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  };

  // Debounced auto-save for text changes
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    const updated = { ...note, text: newText };
    setNote(updated);

    if (autoSaveTimeout.current) {
      clearTimeout(autoSaveTimeout.current);
    }

    autoSaveTimeout.current = setTimeout(() => {
      saveNote(updated);
    }, 1000);
  };

  const handleResonanceChange = (score: number) => {
    const updated = { ...note, resonance: score };
    setNote(updated);
    saveNote(updated);
  };

  const toggleTag = (tag: string) => {
    const updatedTags = note.tags.includes(tag)
      ? note.tags.filter(t => t !== tag)
      : [...note.tags, tag];
      
    const updated = { ...note, tags: updatedTags };
    setNote(updated);
    saveNote(updated);
  };

  const handleClear = () => {
    localStorage.removeItem(storageKey);
    setNote({
      text: '',
      resonance: 5,
      tags: [],
      lastUpdated: ''
    });
    setShowClearConfirm(false);
  };

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-slate-900 border border-slate-850 shadow-2xl relative overflow-hidden mt-8">
      {/* Background glow decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
      
      <div className="relative z-10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-850 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center border border-amber-400/20">
              <Edit3 className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="font-display font-black text-slate-100 text-lg tracking-tight">
                {moduleName} ✕ 心得隨手記
              </h3>
              <p className="text-xs text-slate-400">
                傾聽內在聲音，記錄你當下的體悟、啟發與生命反饋
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-xs font-mono">
            {note.lastUpdated && (
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                上次紀錄：{note.lastUpdated}
              </span>
            )}
            
            <AnimatePresence>
              {isSaved && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-emerald-500 font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded"
                >
                  <Check className="w-3.5 h-3.5" />
                  已自動存入本機
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Notes Area */}
          <div className="lg:col-span-8 space-y-4">
            <label className="text-xs text-slate-400 font-bold block uppercase tracking-wider">
              我的覺察與體會
            </label>
            <div className="relative">
              <textarea
                value={note.text}
                onChange={handleTextChange}
                placeholder="寫下你在看這個模組時，內心最深刻的感受。例如：『這段分析非常準確地描述了我對於自由的渴望...』"
                className="w-full h-40 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 transition-all resize-none"
              />
              <div className="absolute bottom-3 right-3 text-[10px] text-slate-500 font-mono">
                自動存檔模式
              </div>
            </div>
          </div>

          {/* Resonance & Quick tags */}
          <div className="lg:col-span-4 space-y-6">
            {/* Resonance Index */}
            <div className="space-y-2">
              <label className="text-xs text-slate-400 font-bold block uppercase tracking-wider flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500/10" />
                本章共鳴指數
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((score) => (
                  <button
                    key={score}
                    onClick={() => handleResonanceChange(score)}
                    className="p-1 hover:scale-125 transition-transform"
                    title={`共鳴度 ${score}/5`}
                  >
                    <Heart
                      className={`w-7 h-7 transition-colors ${
                        score <= note.resonance
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-700 hover:text-amber-400/50'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-slate-400 font-mono ml-2">
                  ({note.resonance}/5)
                </span>
              </div>
            </div>

            {/* Quick Tags */}
            <div className="space-y-2.5">
              <label className="text-xs text-slate-400 font-bold block uppercase tracking-wider flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-amber-500" />
                快速印象標籤
              </label>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_TAGS.map((tag) => {
                  const active = note.tags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all ${
                        active
                          ? 'bg-amber-400/15 border-amber-400 text-amber-400 font-medium'
                          : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-850">
          <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
            <Bookmark className="w-3 h-3" />
            此資料安全存儲於您的個人瀏覽器中
          </span>

          <div className="flex items-center gap-2">
            {!showClearConfirm ? (
              <button
                onClick={() => setShowClearConfirm(true)}
                disabled={!note.text && note.tags.length === 0}
                className="text-xs text-slate-500 hover:text-rose-400 disabled:opacity-40 transition-colors flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-rose-500/5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                清除重寫
              </button>
            ) : (
              <div className="flex items-center gap-2 animate-fade-in">
                <span className="text-xs text-rose-400 font-medium">確定要清除本頁筆記？</span>
                <button
                  onClick={handleClear}
                  className="text-xs bg-rose-500 hover:bg-rose-600 text-white font-medium px-2.5 py-1 rounded"
                >
                  確認
                </button>
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="text-xs bg-slate-950 border border-slate-800 text-slate-400 px-2.5 py-1 rounded"
                >
                  取消
                </button>
              </div>
            )}
            
            <button
              onClick={() => saveNote(note)}
              className="text-xs bg-amber-400 hover:bg-amber-500 text-slate-950 font-black px-4 py-1.5 rounded-xl transition-all shadow-md shadow-amber-400/10 flex items-center gap-1"
            >
              <Check className="w-3.5 h-3.5" />
              立即儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
