let lenisInstance = null;

export function setLenisInstance(instance) {
  lenisInstance = instance;
}

export function smoothScrollTo(target) {
  const destination = typeof target === 'string'
    ? document.querySelector(target)
    : target;

  if (lenisInstance) {
    lenisInstance.scrollTo(destination ?? 0);
    return;
  }

  if (destination instanceof Element) {
    destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
