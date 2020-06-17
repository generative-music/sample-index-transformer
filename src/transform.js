import applyTransformation from './apply-transformation';

const transform = (
  sampleIndex = {},
  sampleNames = [],
  resolveDependencyValue = (value) => Promise.resolve(value)
) => {
  const dependencyNameSet = new Set(sampleNames);
  const subIndex = Object.keys(sampleIndex)
    .filter((dependencyName) => dependencyNameSet.has(dependencyName))
    .reduce((newIndex, dependencyName) => {
      newIndex[dependencyName] = sampleIndex[dependencyName];
      return newIndex;
    }, {});
  return applyTransformation(subIndex, resolveDependencyValue);
};

export default transform;
