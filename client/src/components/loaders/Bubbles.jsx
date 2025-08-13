import { useMemo } from "react";
export default function Bubbles() {
  const bubbles = useMemo(() => {
    const styles = [
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
          style={{
            "--color": style.color,
            "--delay": style.delay,
          }}
        />
      );
    });
  }, []);
  return <div className="bubble">{bubbles}</div>;
}
