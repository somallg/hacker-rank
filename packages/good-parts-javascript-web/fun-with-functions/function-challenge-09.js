function exp(sae) {
  if (Array.isArray(sae)) {
    const [binary, a, b] = sae;

    return binary(exp(a), exp(b));
  }

  return sae;
}

export { exp };
