import React from "react";
import * as Lucide from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size = 24 }: LucideIconProps) {
  // Safe mapping of icon string names to components
  const IconComponent = (Lucide as any)[name];

  if (!IconComponent) {
    // Return a fallback checkmark or question mark icon
    return <Lucide.HelpCircle className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
