import React, { useState, useEffect } from 'react';
import { X, Users, Download, Mail, Phone, Calendar, RefreshCw, CheckCircle2, Key, ExternalLink } from 'lucide-react';
import { getAllRegisteredUsers, exportUsersToCSV, RegisteredUserRecord } from '../../services/realAuthService';
import { getGoogleClientId, saveGoogleClientId } from '../../services/googleAuthService';

interface AdminLeadManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadManagerModal: React.FC<AdminLeadManagerModalProps> = ({ isOpen, onClose }) => {
  const [users, setUsers] = useState<RegisteredUserRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadMsg, setDownloadMsg] = useState('');
  const [clientIdInput, setClientIdInput] = useState(() => getGoogleClientId());
  const [clientIdSavedMsg, setClientIdSavedMsg] = useState('');

  const loadData = async () => {
    setIsLoading(true);
    try {
      const list = await getAllRegisteredUsers();
      setUsers(list);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
      setClientIdInput(getGoogleClientId());
    }
  }, [isOpen]);

  const handleSaveClientId = () => {
    if (clientIdInput.trim()) {
      saveGoogleClientId(clientIdInput.trim());
      setClientIdSavedMsg('✅ Google OAuth Client ID saved! Google 1-Click Login is now ACTIVE for all students.');
      setTimeout(() => setClientIdSavedMsg(''), 5000);
    }
  };

  const handleExportCSV = async () => {
    const res = await exportUsersToCSV();
    setDownloadMsg(`Downloaded ${res.count} user emails to ${res.filename}!`);
    setTimeout(() => setDownloadMsg(''), 4500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="max-w-3xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Registered Students &amp; Leads Database
              </h3>
              <p className="text-xs text-slate-500">
                Live cloud register of all students who logged in or signed up ({users.length} total)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-200">
          <div className="text-xs text-slate-600 font-semibold">
            Use this data to send promotional offers, course updates, and marketing emails.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              disabled={isLoading}
              className="px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleExportCSV}
              className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/20 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Emails (CSV / Excel)</span>
            </button>
          </div>
        </div>

        {/* Google 1-Click Login Config Card */}
        <div className="mb-4 p-3.5 bg-gradient-to-r from-sky-50 to-indigo-50/60 rounded-2xl border border-sky-200 text-left">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-sky-600" />
              <strong className="text-xs font-bold text-slate-800">
                Google 1-Click Login (Automatic Gmail Detection)
              </strong>
              {clientIdInput ? (
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  Active
                </span>
              ) : (
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                  Setup Required
                </span>
              )}
            </div>
            <a
              href="https://console.cloud.google.com/apis/credentials"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-sky-600 hover:text-sky-800 font-bold inline-flex items-center gap-1"
            >
              <span>Get Free Google Client ID</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-[11px] text-slate-600 mb-2">
            Har student ke laptop &amp; phone me pehle se logged-in Gmail se 1-click automatic login ke liye apna Google OAuth Client ID yahan paste karein:
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="e.g. 1234567890-abcdefgh.apps.googleusercontent.com"
              value={clientIdInput}
              onChange={(e) => setClientIdInput(e.target.value)}
              className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-sky-300 bg-white font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              onClick={handleSaveClientId}
              className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-xs font-bold rounded-xl shadow-xs shrink-0 cursor-pointer"
            >
              Save Client ID
            </button>
          </div>
          {clientIdSavedMsg && (
            <p className="text-[11px] font-bold text-emerald-700 mt-2">{clientIdSavedMsg}</p>
          )}
        </div>

        {downloadMsg && (
          <div className="mb-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{downloadMsg}</span>
          </div>
        )}

        {/* Table list */}
        <div className="flex-1 overflow-y-auto border border-slate-200 rounded-2xl">
          {users.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Users className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <strong className="block text-sm text-slate-700 font-bold">No registered users yet</strong>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                As soon as a new user logs in via Google or signs up on the site, their name, email, and phone will appear here in real time.
              </p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-100 text-slate-600 font-bold sticky top-0 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">Student Name</th>
                  <th className="py-2.5 px-3">Email Address</th>
                  <th className="py-2.5 px-3">Phone</th>
                  <th className="py-2.5 px-3">Referral Code</th>
                  <th className="py-2.5 px-3">Signed Up</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((u, i) => (
                  <tr key={u.uid} className="hover:bg-sky-50/50 transition-colors">
                    <td className="py-2.5 px-3 font-mono text-slate-400">{i + 1}</td>
                    <td className="py-2.5 px-3 font-bold text-slate-800">
                      <div className="flex items-center gap-2">
                        {u.avatar ? (
                          <img src={u.avatar} alt={u.name} className="w-6 h-6 rounded-full object-cover" />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-[10px]">
                            {u.name.charAt(0)}
                          </div>
                        )}
                        <span>{u.name}</span>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 font-medium">
                      {u.email ? (
                        <span className="flex items-center gap-1 text-sky-600">
                          <Mail className="w-3 h-3 text-sky-500" />
                          <span>{u.email}</span>
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      {u.phone ? (
                        <span className="flex items-center gap-1 font-mono">
                          <Phone className="w-3 h-3 text-slate-400" />
                          <span>{u.phone}</span>
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 font-mono font-bold text-slate-700">
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px]">{u.referralCode}</span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-400 whitespace-nowrap">
                      {new Date(u.registeredAt).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Synced with Firebase Firestore &amp; Local Master Register</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
