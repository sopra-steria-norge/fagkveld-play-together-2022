export const baseConfig = {
  source: ["./tokens/transformed/tokens.json"],
  platforms: {
    web: {
      buildPath: "build/web/stylesheet/",
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/css",
        "designsystem/boxShadow",
        "designsystem/sizeToPx",
        "designsystem/typography",
      ],
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
        },
        {
          destination: "_variables.less",
          format: "less/variables",
          options: {
            outputReferences: true,
          },
        },
        {
          destination: "_variables.scss",
          format: "scss/variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};
