"use client";
import { useEffect, useState } from "react";
import { defaultProgress, loadProgress, type UserProgress } from "./progress";
export function useProgress() { const [progress, setProgress] = useState<UserProgress>(defaultProgress); const [ready, setReady] = useState(false); useEffect(() => { setProgress(loadProgress()); setReady(true); }, []); return { progress, setProgress, ready }; }
