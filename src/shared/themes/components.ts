export default {
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "p",
          h5: "p",
          h6: "p",
          t1: "p",
          t2: "p",
          t3: "p",
          t4: "p",
          t5: "p",
          t6: "p",
          t7: "p",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
        disableElevation: true,
      },
      styleOverrides: {
        sizeSmall: {
          padding: "8px 16px",
          height: "32px",
          borderRadius: "9px",
          fontSize: "14px",
          lineHeight: "20px",
        },
        textSizeSmall: {
          padding: "8px 16px",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16px",
        },
        sizeMedium: {
          height: "40px",
          borderRadius: "10px",
          fontSize: "16px",
          lineHeight: "20px",
        },
        textSizeMedium: {
          padding: "10px 20px",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "20px",
        },
        sizeLarge: {
          height: "68px",
          padding: "20px 50px",
          borderRadius: "12px",
          fontSize: "16px",
          lineHeight: "20px",
        },
        textSizeLarge: {
          padding: "14px 24px",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "20px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    Button: {
      large: {
        height: "48px",
        borderRadius: "12px",
      },
      medium: {
        height: "40px",
        borderRadius: "10px",
      },
      small: {
        height: "32px",
        borderRadius: "9px",
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "50%",
          padding: "11px",
        },
      },
    },
    Modal: {
      desktop: {
        borderRadius: "16px",
        padding: "40px",
        background: "#fff",
        width: "832px", // 800 + padding
      },
      mobile: {
        borderRadius: "12px",
        padding: "16px",
        background: "#fff",
        width: "100%",
      },
    },
  }

}