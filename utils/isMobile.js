const isMobile = () => {
if (typeof window !== "undefined") {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // This threshold can be adjusted according to your definition of 'mobile' screen size
    return width < 768;
}
// Return a default value for SSR or SSG. Adjust according to your needs.
return false;
};

export default isMobile;