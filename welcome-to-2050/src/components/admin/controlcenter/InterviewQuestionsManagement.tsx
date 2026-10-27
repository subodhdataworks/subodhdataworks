import React, { useState } from 'react';
import {
  HelpCircle,
  Plus,
  Trash2,
  Edit2,
  Save,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Search,
  Sparkles,
  BookOpen,
  X,
  Eye,
  Check,
  ChevronDown
} from 'lucide-react';
import {
  PreloadedInterviewQuestion,
  getPreloadedInterviewQuestionsForTopic,
  saveCustomInterviewQuestionsForTopic,
  resetCustomInterviewQuestionsForTopic
} from '../../futureai/data/mockInterviewQuestionBank';
import { TOPICS } from '../../futureai/PythonChapterView';
import { AdminAuthService } from '../../../services/adminAuthService';

interface InterviewQuestionsManagementProps {
  onRefresh?: () => void;
  isDark?: boolean;
}

export const InterviewQuestionsManagement: React.FC<InterviewQuestionsManagementProps> = ({
  onRefresh,
  isDark = false,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<number>(1);
  const [questions, setQuestions] = useState<PreloadedInterviewQuestion[]>(() =>
    getPreloadedInterviewQuestionsForTopic(1)
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Modal State for Add / Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<PreloadedInterviewQuestion | null>(null);

  // Form Fields
  const [formDifficulty, setFormDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');
  const [formQuestionEn, setFormQuestionEn] = useState('');
  const [formQuestionHi, setFormQuestionHi] = useState('');
  const [formHintEn, setFormHintEn] = useState('');
  const [formHintHi, setFormHintHi] = useState('');
  const [formIdealAnswerEn, setFormIdealAnswerEn] = useState('');
  const [formIdealAnswerHi, setFormIdealAnswerHi] = useState('');

  const canManage = AdminAuthService.hasPermission('manage_courses');

  const cardBg = isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90 shadow-sm';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';
  const inputBg = isDark
    ? 'bg-slate-950 border-slate-700/80 text-white placeholder:text-slate-600 focus:border-blue-500'
    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-600';

  const handleSelectTopic = (topicId: number) => {
    setSelectedTopicId(topicId);
    setQuestions(getPreloadedInterviewQuestionsForTopic(topicId));
  };

  const handleOpenAddModal = () => {
    setEditingQuestion(null);
    setFormDifficulty('Easy');
    setFormQuestionEn('');
    setFormQuestionHi('');
    setFormHintEn('Structure your answer with a direct definition and practical application.');
    setFormHintHi('अपने उत्तर को स्पष्ट परिभाषा और व्यावहारिक उपयोग के साथ बताएं।');
    setFormIdealAnswerEn('');
    setFormIdealAnswerHi('');
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (q: PreloadedInterviewQuestion) => {
    setEditingQuestion(q);
    setFormDifficulty(q.difficulty);
    setFormQuestionEn(q.questionEn);
    setFormQuestionHi(q.questionHi);
    setFormHintEn(q.hintEn);
    setFormHintHi(q.hintHi);
    setFormIdealAnswerEn(q.idealAnswerEn);
    setFormIdealAnswerHi(q.idealAnswerHi);
    setIsModalOpen(true);
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canManage) {
      alert('Permission denied to edit interview question bank.');
      return;
    }

    if (!formQuestionEn.trim() || !formIdealAnswerEn.trim()) {
      alert('English Question and Ideal Model Answer are required.');
      return;
    }

    const updatedList = [...questions];

    if (editingQuestion) {
      // Update existing
      const idx = updatedList.findIndex((x) => x.id === editingQuestion.id);
      if (idx >= 0) {
        updatedList[idx] = {
          ...updatedList[idx],
          difficulty: formDifficulty,
          questionEn: formQuestionEn.trim(),
          questionHi: formQuestionHi.trim() || formQuestionEn.trim(),
          hintEn: formHintEn.trim(),
          hintHi: formHintHi.trim() || formHintEn.trim(),
          idealAnswerEn: formIdealAnswerEn.trim(),
          idealAnswerHi: formIdealAnswerHi.trim() || formIdealAnswerEn.trim(),
        };
      }
    } else {
      // Add new
      const newId = updatedList.length > 0 ? Math.max(...updatedList.map((x) => x.id)) + 1 : 1;
      const newQ: PreloadedInterviewQuestion = {
        id: newId,
        topicId: selectedTopicId,
        topic: TOPICS.find((t) => t.id === selectedTopicId)?.title || 'Python Topic',
        difficulty: formDifficulty,
        questionEn: formQuestionEn.trim(),
        questionHi: formQuestionHi.trim() || formQuestionEn.trim(),
        hintEn: formHintEn.trim(),
        hintHi: formHintHi.trim() || formHintEn.trim(),
        idealAnswerEn: formIdealAnswerEn.trim(),
        idealAnswerHi: formIdealAnswerHi.trim() || formIdealAnswerEn.trim(),
        exampleAnswerEn: formIdealAnswerEn.trim(),
        exampleAnswerHi: formIdealAnswerHi.trim() || formIdealAnswerEn.trim(),
        requiredKeywords: [
          {
            id: `k_${Date.now()}_1`,
            labelEn: 'Core Concept',
            labelHi: 'Core Concept',
            weight: 2.5,
            synonyms: formQuestionEn.toLowerCase().split(' ').slice(0, 3),
          },
        ],
        importantConcepts: [],
        commonMistakes: [],
        scoringRules: {
          keywordWeight: 5.0,
          conceptWeight: 3.5,
          structureWeight: 1.5,
          minWordCount: 8,
          maxScore: 10,
        },
      };
      updatedList.push(newQ);
    }

    saveCustomInterviewQuestionsForTopic(selectedTopicId, updatedList);
    setQuestions(updatedList);
    setIsModalOpen(false);
    setFeedbackMsg({
      type: 'success',
      text: editingQuestion ? 'Interview question updated successfully!' : 'New interview question created!',
    });
    setTimeout(() => setFeedbackMsg(null), 4000);
    if (onRefresh) onRefresh();
  };

  const handleDeleteQuestion = (id: number) => {
    if (!canManage) {
      alert('Permission denied to delete questions.');
      return;
    }

    if (!confirm('Are you sure you want to delete this interview question?')) return;

    const filtered = questions.filter((x) => x.id !== id);
    saveCustomInterviewQuestionsForTopic(selectedTopicId, filtered);
    setQuestions(filtered);
    setFeedbackMsg({ type: 'success', text: 'Question removed from question bank.' });
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  const handleResetToDefault = () => {
    if (!canManage) {
      alert('Permission denied.');
      return;
    }

    if (!confirm('Reset all questions for this chapter to built-in factory defaults?')) return;

    resetCustomInterviewQuestionsForTopic(selectedTopicId);
    setQuestions(getPreloadedInterviewQuestionsForTopic(selectedTopicId));
    setFeedbackMsg({ type: 'success', text: `Chapter ${selectedTopicId} questions reset to factory defaults!` });
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  const currentTopic = TOPICS.find((t) => t.id === selectedTopicId) || TOPICS[0];

  const filteredQuestions = questions.filter(
    (q) =>
      !searchQuery.trim() ||
      q.questionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.questionHi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.idealAnswerEn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 text-left">
      {/* Top Banner Alert */}
      {feedbackMsg && (
        <div
          className={`p-4 rounded-2xl flex items-center justify-between text-xs font-bold border transition-all ${
            feedbackMsg.type === 'success'
              ? isDark ? 'bg-emerald-950 border-emerald-500 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
              : isDark ? 'bg-rose-950 border-rose-500 text-rose-200' : 'bg-rose-50 border-rose-200 text-rose-700'
          }`}
        >
          <div className="flex items-center gap-2">
            {feedbackMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-rose-600" />}
            <span>{feedbackMsg.text}</span>
          </div>
          <button type="button" onClick={() => setFeedbackMsg(null)} className="cursor-pointer">
            <X className="w-4 h-4 opacity-70 hover:opacity-100" />
          </button>
        </div>
      )}

      {/* ── Main Container ── */}
      <div className={`${cardBg} border rounded-3xl p-6`}>
        {/* Header with Add & Reset Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className={`text-base font-black ${textPrimary}`}>Mock Interview Question Bank Manager</h2>
              <p className={`text-xs ${textMuted} font-medium`}>Create, edit, or customize AI interview questions evaluated on mobile &amp; desktop</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="button"
              onClick={handleOpenAddModal}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Question</span>
            </button>
          </div>
        </div>

        {/* Topic Selector Tabs (10 Topics) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-200 dark:border-slate-800">
          {TOPICS.map((topic) => {
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => handleSelectTopic(topic.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : isDark
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>Ch {topic.id}: {topic.title.split(':')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Current Topic Subhead & Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <div>
            <span className="text-xs font-black text-blue-600 dark:text-blue-400">Chapter {currentTopic.id} Questions</span>
            <h3 className={`text-sm font-black ${textPrimary}`}>{currentTopic.title} ({questions.length} questions total)</h3>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter questions..."
              className={`w-full pl-9 pr-3 py-1.5 rounded-xl text-xs border focus:outline-none ${inputBg}`}
            />
          </div>
        </div>

        {/* Question Cards List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-500 font-medium">
              No interview questions found. Click "Add New Question" above to create one.
            </div>
          ) : (
            filteredQuestions.map((q, idx) => (
              <div
                key={q.id || idx}
                className={`p-5 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700' : 'bg-slate-50/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-xs">
                      #{idx + 1}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-black border ${
                        q.difficulty === 'Easy'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : q.difficulty === 'Medium'
                          ? 'bg-amber-50 text-amber-700 border-amber-200'
                          : 'bg-rose-50 text-rose-700 border-rose-200'
                      }`}
                    >
                      {q.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleOpenEditModal(q)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 hover:text-blue-600 text-slate-600 dark:text-slate-300 cursor-pointer transition-colors"
                      title="Edit Question"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteQuestion(q.id)}
                      className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 hover:text-rose-600 text-slate-600 dark:text-slate-300 cursor-pointer transition-colors"
                      title="Delete Question"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* English Question */}
                <div className="mb-2">
                  <span className="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 block mb-0.5">English:</span>
                  <p className={`text-xs font-bold ${textPrimary}`}>{q.questionEn}</p>
                </div>

                {/* Hindi Question */}
                {q.questionHi && (
                  <div className="mb-3">
                    <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 block mb-0.5">हिंदी:</span>
                    <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{q.questionHi}</p>
                  </div>
                )}

                {/* Ideal Model Answer */}
                <div className={`p-3 rounded-xl border text-[11px] ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-600'}`}>
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">Expected / Ideal Answer:</span>
                  <p className="leading-relaxed">{q.idealAnswerEn}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Create / Edit Question Modal ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`w-full max-w-2xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col`}>
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h3 className={`text-base font-black ${textPrimary}`}>
                  {editingQuestion ? 'Edit Interview Question' : `Add Question to Chapter ${selectedTopicId}`}
                </h3>
                <p className={`text-xs ${textMuted} font-medium`}>{currentTopic.title}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveQuestion} className="p-6 overflow-y-auto space-y-4 text-left flex-1">
              <div>
                <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
                  Question Difficulty
                </label>
                <select
                  value={formDifficulty}
                  onChange={(e: any) => setFormDifficulty(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold border focus:outline-none ${inputBg}`}
                >
                  <option value="Easy">Easy (Fundamentals)</option>
                  <option value="Medium">Medium (Application)</option>
                  <option value="Hard">Hard (Deep Logic / Architecture)</option>
                </select>
              </div>

              <div>
                <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
                  Question in English *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formQuestionEn}
                  onChange={(e) => setFormQuestionEn(e.target.value)}
                  placeholder="e.g. What is the difference between a variable and a constant in Python?"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs border focus:outline-none ${inputBg}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
                  Question in Hindi (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formQuestionHi}
                  onChange={(e) => setFormQuestionHi(e.target.value)}
                  placeholder="e.g. Python में variable और constant में क्या अंतर होता है?"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs border focus:outline-none ${inputBg}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
                  Expected Ideal Answer (Used by speech evaluator for scoring) *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formIdealAnswerEn}
                  onChange={(e) => setFormIdealAnswerEn(e.target.value)}
                  placeholder="Provide the complete, ideal answer that the AI evaluator will use to award up to 10 points..."
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs border focus:outline-none ${inputBg}`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'} mb-1.5`}>
                  Hint for Student
                </label>
                <input
                  type="text"
                  value={formHintEn}
                  onChange={(e) => setFormHintEn(e.target.value)}
                  placeholder="e.g. Focus on memory mutability and how values are stored."
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs border focus:outline-none ${inputBg}`}
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white rounded-xl text-xs font-black shadow-md shadow-blue-500/25 cursor-pointer"
                >
                  {editingQuestion ? 'Save Changes' : 'Create Question'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
