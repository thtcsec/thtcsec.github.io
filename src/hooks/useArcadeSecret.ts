import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export const useArcadeSecret = () => {
  const navigate = useNavigate();
  const konamiIndexRef = useRef(0);
  const keyBufferRef = useRef<string>("");
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerArcade = useCallback((reason: string) => {
    toast.success("🎮 SECRET ARCHIVE UNLOCKED!", {
      description: `${reason} - Welcome to the Gamer Lounge!`,
      duration: 3500,
    });
    navigate("/arcade");
  }, [navigate]);

  // Handle logo / avatar multi-click (5 clicks within 1.5s)
  const handleSecretClick = useCallback(() => {
    clickCountRef.current += 1;

    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      triggerArcade("5x Multi-click Secret");
      return;
    }

    if (clickCountRef.current >= 3) {
      toast.info(`🎮 ${5 - clickCountRef.current} more clicks to unlock secret...`, {
        duration: 1000,
      });
    }

    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 1500);
  }, [triggerArcade]);

  useEffect(() => {
    // 1. Console Secret Message
    const consoleKey = "__arcade_console_logged__";
    if (!sessionStorage.getItem(consoleKey)) {
      sessionStorage.setItem(consoleKey, "true");
      console.log(
        "%c 🎮 [CLASSIFIED ARCHIVE] %c Hey curious dev! Found the secret? Visit /arcade to explore the Gamer Lounge. %c",
        "background: #7c3aed; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;",
        "background: #1e1b4b; color: #a7f3d0; padding: 4px 8px; border-radius: 0 4px 4px 0; font-family: monospace;",
        "background: transparent;"
      );
    }

    // 2. Keyboard Listeners (Konami Code & "arcade" / "game" typing)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keypresses inside inputs/textareas
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // Check Konami Code
      if (e.key.toLowerCase() === KONAMI_CODE[konamiIndexRef.current].toLowerCase()) {
        konamiIndexRef.current += 1;
        if (konamiIndexRef.current === KONAMI_CODE.length) {
          konamiIndexRef.current = 0;
          triggerArcade("Konami Code Unlocked (↑↑↓↓←→←→BA)");
          return;
        }
      } else {
        konamiIndexRef.current = 0;
      }

      // Check Typing Words ("arcade" or "game")
      const char = e.key.toLowerCase();
      if (char.length === 1 && char >= "a" && char <= "z") {
        keyBufferRef.current += char;
        if (keyBufferRef.current.length > 20) {
          keyBufferRef.current = keyBufferRef.current.slice(-20);
        }

        if (keyBufferRef.current.endsWith("arcade")) {
          keyBufferRef.current = "";
          triggerArcade("Typed secret word 'arcade'");
        } else if (keyBufferRef.current.endsWith("game")) {
          keyBufferRef.current = "";
          triggerArcade("Typed secret word 'game'");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [triggerArcade]);

  return { handleSecretClick, triggerArcade };
};
