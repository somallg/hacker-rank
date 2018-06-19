function getChallengeName(path: string): string {
  const [, challenge] = path.split('/');

  return challenge;
}

export { getChallengeName };
