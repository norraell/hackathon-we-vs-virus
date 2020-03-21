const isLocal = () => {
  const { hostname } = window.location;
  return hostname === "localhost" || hostname === "127.0.0.1";
}

export default isLocal;
