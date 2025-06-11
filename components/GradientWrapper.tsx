const GradientWrapper = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`relative py-16 overflow-hidden my-16 border-t border-gray-200 sm:my-28 ${
        props.className || ""
      }`}
    >
      <div
        className="absolute inset-0 w-full h-full blur-[140px] -z-10"
        style={{
          background: `
              /* First radial gradient */
              radial-gradient(
                circle at 30% 30%, 
                rgba(237, 78, 80, 0.07), 
                transparent 60%
              ),
              /* Second radial gradient */
              radial-gradient(
                circle at 70% 70%, 
                rgba(152, 103, 240, 0.07), 
                transparent 70%
              ),
              /* Subtle linear gradient */
              linear-gradient(
                202.72deg, 
                rgba(237, 78, 80, 0.05) 14.76%, 
                rgba(152, 103, 240, 0.04) 34.37%, 
                rgba(152, 103, 240, 0) 86.62%
              )
            `,
        }}
      ></div>

      <div className="relative">{children}</div>
    </div>
  );
};

export default GradientWrapper;
