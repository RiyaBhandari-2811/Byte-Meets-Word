// Function to get the value of a CSS variable

type GetCssVariable = (variableName: string) => string;

const getCssVariable: GetCssVariable = (variableName) => {
  return getComputedStyle(document.body).getPropertyValue(variableName).trim();
};

export default getCssVariable;
