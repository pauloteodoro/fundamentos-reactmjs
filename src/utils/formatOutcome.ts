function formatOutcome(value: string, type: string): string {
  if (type === 'outcome') {
    return `- ${value}`;
  }

  return value;
}

export default formatOutcome;
