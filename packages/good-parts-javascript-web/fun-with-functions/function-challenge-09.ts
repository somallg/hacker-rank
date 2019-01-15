// tslint:disable-next-line
function exp(sae: any): any {
  if (Array.isArray(sae)) {
    // tslint:disable-next-line
    const [binary, a, b]: any = sae;

    return binary(exp(a), exp(b));
  }

  return sae;
}

export { exp };
