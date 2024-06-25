'use client';
import { useEffect } from 'react';

import { testAction } from '@/app/_actions/testAction';

export default function ServerActionComponent() {
  useEffect(() => {
    const runMutation = async () => {
      await testAction();
    };
    runMutation();
  }, []);

  return null;
}