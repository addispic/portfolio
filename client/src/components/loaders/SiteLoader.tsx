// components
import SpiderBubbles from "./SpiderBubbles";
export default function SiteLoader() {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-dark-1">
      <div className="flex items-center justify-center gap-3">
        <SpiderBubbles />
      </div>
    </div>
  );
}
