type Params = Record<string, string | number>;

const pathParams = (url: string, params?: Params) => {
  if (!params) return url;

  const pathParamsKeys = Object.keys(params);
  if (pathParamsKeys.length === 0) return url;

  let newUrl = url;
  pathParamsKeys.forEach((paramName) => {
    newUrl = newUrl.replace(`{${paramName}}`, String(params[paramName]));
  });

  return newUrl;
};

export const pathQueryParams = (url: string, params?: Params) => {
  if (!params) return url;

  const pathParamsKeys = Object.keys(params);
  if (pathParamsKeys.length === 0) return url;

  const urlWithoutParams = url.indexOf("?") === -1;

  let newUrl = `${url}${urlWithoutParams ? "?" : "&"}`;

  pathParamsKeys.forEach((paramName, index) => {
    newUrl += `${index !== 0 ? "&" : ""}${paramName}=${encodeURIComponent(
      params[paramName]
    )}`;
  });

  return newUrl;
};

export default pathParams;
