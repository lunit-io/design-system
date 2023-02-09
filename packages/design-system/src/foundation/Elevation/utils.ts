export const createCSSVars = <T extends Record<string, string>>(tokens: T) =>
  Object.entries(tokens).reduce((vars, [name, value]) => {
    vars[`--${name}` as keyof T] = value;
    return vars;
  }, {} as Record<keyof T, string>);

export const createCSSVarNames = <T extends Record<string, string>>(tokens: T) =>
  Object.entries(tokens).reduce((vars, [name, value]) => {
    vars[name as keyof T] = `var(--${name})`;
    return vars;
  }, {} as Record<keyof T, string>);