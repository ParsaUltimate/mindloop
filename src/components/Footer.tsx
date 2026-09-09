import React from "react";
import { useLocale } from "../lib/LocaleContext";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="py-12 px-8 md:px-28 flex flex-col md:flex-row items-center justify-between gap-6 container mx-auto">
      <div className="flex flex-col items-center md:items-start gap-2 text-muted-foreground text-sm">
        <span>{t.footer.rights}</span>
        <span className="text-xs text-muted-foreground/60">
          {t.footer.builtBy} <a href="https://parsaghaei.dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground">parsaghaei.dev</a>
        </span>
      </div>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#privacy" className="hover:text-foreground transition-colors">{t.footer.privacy}</a>
        <a href="#terms" className="hover:text-foreground transition-colors">{t.footer.terms}</a>
        <a href="#contact" className="hover:text-foreground transition-colors">{t.footer.contact}</a>
      </div>
    </footer>
  );
}
