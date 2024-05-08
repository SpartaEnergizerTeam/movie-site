const getUrlParamValue = (paramName) => {
  if (!paramName || !window.location.search) return '';

  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
};

export default getUrlParamValue;