"use client";

import React, { useEffect, useMemo, useState } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-xl text-center space-y-4 p-6">
        <h1 className="text-3xl font-semibold">
          Chicas Verdes — Teacher Playbook
        </h1>
        <p className="text-muted-foreground">
          This app will help teachers run Chicas Verdes lessons using the
          SELF · NATURE · SOCIETY framework.
        </p>
        <p className="text-sm text-muted-foreground">
          ✅ Your app is successfully running locally.<br />
          Next step: adding the full lesson library.
        </p>
      </div>
    </div>
  );
}
