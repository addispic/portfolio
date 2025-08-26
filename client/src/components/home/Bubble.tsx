import { useMemo } from "react";
export default function Bubble({ text }: { text: string }) {
  const bubbles = useMemo(() => {
    const styles: { color: string; delay: string }[] = [
      {
        color: "green",
        delay: "-1s",
      },
      {
        color: "yellow",
        delay: "-.8s",
      },
      {
        color: "red",
        delay: "-.6s",
      },
      {
        color: "blue",
        delay: "-.4s",
      },
    ];
    return styles.map((style, index) => {
      return (
        <div
          key={index}
          style={
            {
              "--color": style.color,
              "--delay": style.delay,
            } as React.CSSProperties
          }
        />
      );
    });
  }, []);
  return (
    <div className="flex items-end gap-1 mb-0.5">
      <p className="text-sm">{text}</p>
      <div className="text-bubble">{bubbles}</div>
    </div>
  );
}
