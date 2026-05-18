import type { ThemeConfig } from "antd";

export const portfolioTheme: ThemeConfig = {
  token: {
    colorPrimary: "#00d4ff",
    colorBgContainer: "rgba(255, 255, 255, 0.04)",
    colorBorder: "rgba(255, 255, 255, 0.08)",
    colorText: "#e2e8f0",
    colorTextSecondary: "#64748b",
    fontFamily: '"DM Sans", sans-serif',
    borderRadius: 12,
  },
  components: {
    Button: {
      fontWeight: 700,
    },
    Input: {
      colorBgContainer: "rgba(255, 255, 255, 0.04)",
    },
  },
};
