"use client";

import React, { useEffect, useState } from "react";

type Comment = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};

const STORAGE_KEY = "guestbook-comments-v1";

export default function CommentsPanel() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setComments(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    } catch {}
  }, [comments]);

  function addComment(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;
    const next: Comment = {
      id: Math.random().toString(36).slice(2),
      name: name.trim() || "Anonymous",
      message: message.trim(),
      createdAt: Date.now(),
    };
    setComments([next, ...comments].slice(0, 50));
    setMessage("");
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[color:var(--color-card)] p-4 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-30px_rgba(0,0,0,0.6)] transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_30px_80px_-40px_rgba(0,0,0,0.7)]">
      <h3 className="px-1 text-base font-semibold">Visitor Comments</h3>
      <form onSubmit={addComment} className="mt-3 space-y-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/30"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say something nice..."
          rows={3}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-white/30"
        />
        <div className="flex justify-end">
          <button type="submit" className="rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15">
            Post
          </button>
        </div>
      </form>

      <ul className="mt-4 space-y-3 max-h-64 overflow-auto pr-1">
        {comments.length === 0 && (
          <li className="text-sm text-white/60">Be the first to comment.</li>
        )}
        {comments.map((c) => (
          <li key={c.id} className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-white/80">{c.name}</span>
              <span className="text-[10px] text-white/50">{new Date(c.createdAt).toLocaleString()}</span>
            </div>
            <p className="mt-1 text-sm text-white/85">{c.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


