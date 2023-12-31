"use client";

import React from 'react';
import raf from "rc-util/es/raf";
import { useEvent } from 'rc-util';
/**
 * Callback will only execute last one for each raf
 */
export default function useRafDebounce(callback) {
  const executeRef = React.useRef(false);
  const rafRef = React.useRef();
  const wrapperCallback = useEvent(callback);
  return () => {
    if (executeRef.current) {
      return;
    }
    executeRef.current = true;
    wrapperCallback();
    rafRef.current = raf(() => {
      executeRef.current = false;
    });
  };
}