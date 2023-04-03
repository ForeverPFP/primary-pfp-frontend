import { ExternalLink } from "lucide-react";
import { locales } from "@/locales";

export const ExploreLink: React.FC<{ href: string }> = ({
  href,
}): React.ReactElement => (
  <a
    href={href}
    className="mt-2 flex items-baseline underline-offset-4 hover:underline "
  >
    <ExternalLink className="mr-1 h-3 w-3" /> {locales.seeOnExplorer}
  </a>
);
