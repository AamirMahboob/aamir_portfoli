"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import { portfolioTheme } from "@/lib/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          ...portfolioTheme,
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
