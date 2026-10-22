import { siteConfig } from "../data/siteConfig.js";

export default function AnnouncementBar() {
  if (!siteConfig.announcement) return null;
  return (
    <div className="announcement" role="note">
      {siteConfig.announcement}
    </div>
  );
}
