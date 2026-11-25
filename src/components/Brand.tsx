import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface BrandProps {
  className?: string;
  onClick?: () => void;
}

/**
 * Identitas AToM berupa aset SVG: huruf A geometris dilingkari orbit.
 * Aset dibuat ulang dari arah brief dan belum merupakan logo final yang disetujui.
 */
export function Brand({ className = "", onClick }: BrandProps) {
  return (
    <Link
      href="#beranda"
      onClick={onClick}
      className={`inline-flex shrink-0 items-center rounded-sm ${className}`}
    >
      <Image
        src={siteConfig.brand.logo.main}
        alt={`${siteConfig.brand.name} — ke beranda`}
        width={123}
        height={40}
        unoptimized
        className="h-10 w-auto max-w-none"
      />
    </Link>
  );
}
