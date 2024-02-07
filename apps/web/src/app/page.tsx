"use client";
import { CharacterEditor, Footer } from "@repo/ui";
import "./styles.css";

export default function Page(): JSX.Element {
  return (
    <main className="max-w-screen-xl h-full mx-auto py-16 overflow-hidden">
      <div className="h-full w-full overflow-auto">
        <CharacterEditor />
        <Footer />
      </div>
    </main>
  );
}
