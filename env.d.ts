/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_X_SECRET_KEY: string;
  readonly VITE_X_API_APP_ID: string;
  readonly VITE_LOGIN: string;
  readonly VITE_PASSWORD: string;
  readonly VITE_CLIENT_ID: number;
  readonly VITE_CLIENT_SECRET: string;
  readonly VITE_HR: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
