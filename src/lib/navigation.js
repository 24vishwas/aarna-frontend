export function prefersReducedMotion() {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  
  /** In-page anchors such as "/#services", from the home page or from any other route. */
  export function scrollToSection(id, navigate) {
    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    const run = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior, block: "start" });
    };
  
    if (window.location.pathname === "/") {
      window.history.replaceState(null, "", `/#${id}`);
      run();
    } else if (navigate) {
      navigate(`/#${id}`);
      window.setTimeout(run, 200);
    } else {
      window.location.assign(`/#${id}`);
    }
  }
  
  /** Returns true when the link was an in-page anchor and has been handled. */
  export function handleHashLink(event, href, navigate) {
    if (!href || !href.startsWith("/#")) return false;
    event.preventDefault();
    scrollToSection(href.slice(2), navigate);
    return true;
  }
  
  export function formatDate(value) {
    if (!value) return "";
    try {
      return new Date(value).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return "";
    }
  }