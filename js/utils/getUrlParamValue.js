const getUrlParamValue = (paramName) => {
  if (!paramName) return '';

  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
};

export default getUrlParamValue;