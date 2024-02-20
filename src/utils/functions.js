export const useMobileMediaQuery = (setState) => {
  // Check if we are on a mobile device using a media query
  const mediaQuery = window.matchMedia("(max-width: 500px)");
  setState(mediaQuery.matches);

  const handleMediaQueryChange = (event) => {
    setState(event.matches);
  };

  mediaQuery.addEventListener("change", handleMediaQueryChange);

  return () => {
    mediaQuery.removeEventListener("change", handleMediaQueryChange);
  };
};
