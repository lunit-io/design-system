export const createElevationCssBaseline = () => {
  return {
    // Tokens
    ":root": {
      "--elevation-0": "none",
      "--elevation-1":
        "0px 4px 8px rgba(0, 0, 0, 0.12), 0px 3px 12px rgba(0, 0, 0, 0.18)",
      "--elevation-2":
        "0px 12px 24px rgba(0, 0, 0, 0.12), 0px 12px 44px rgba(0, 0, 0, 0.18)",
      "--elevation-shadow": "none",
    },

    // Default component styles
    ".MuiPaper-root": {
      "--elevation-shadow": "var(--elevation-2)",
    },
    ".MuiDialog-paper": {
      "--elevation-shadow": "var(--elevation-2)",
    },
    ".MuiPopover-paper": {
      "--elevation-shadow": "var(--elevation-2)",
    },
    // Date Range Picker, Select 등의 Menu element는 MuiMenu-paper에서 상속
    ".MuiMenu-paper": {
      "--elevation-shadow": "var(--elevation-1)",
    },
    ".MuiTooltip-tooltip": {
      "--elevation-shadow": "var(--elevation-1)",
    },
    ".MuiAlert-root": {
      "--elevation-shadow": "var(--elevation-2)",
    },

    // Alternative to Paper `elevation` prop
    ".elevation0, .elevation1, .elevation2": {
      boxShadow: "var(--elevation-shadow)",
    },
    ".elevation3, .elevation4, .elevation5, .elevation6, .elevation7, .elevation8, .elevation9, .elevation10, .elevation11, .elevation12, .elevation13, .elevation14, .elevation15, .elevation16, .elevation17, .elevation18, .elevation19, .elevation20, .elevation21, .elevation22, .elevation23, .elevation24":
      {
        boxShadow: "none",
      },
    ".elevation0": {
      "--elevation-shadow": "var(--elevation-0)",
    },
    ".elevation1": {
      "--elevation-shadow": "var(--elevation-1)",
    },
    ".elevation2": {
      "--elevation-shadow": "var(--elevation-2)",
    },
  };
};
