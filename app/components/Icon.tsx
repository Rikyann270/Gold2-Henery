const paths: Record<string, string> = {
  shield: "M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-1 14-4-4 1.4-1.4L11 13.2l4.6-4.6L17 10l-6 6Z",
  truck: "M3 6h11v9H3V6Zm11 3h4l3 3v3h-7V9ZM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  vault: "M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Z",
  refresh: "M12 5V2L8 6l4 4V7a5 5 0 0 1 4.6 7h2.1A7 7 0 0 0 12 5Zm-4.6 5H5.3A7 7 0 0 0 12 19v3l4-4-4-4v3a5 5 0 0 1-4.6-7Z",
  chat: "M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-5 4V5a1 1 0 0 1 1-1Z",
  globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 9h-3a15 15 0 0 0-1.2-5A8 8 0 0 1 18.9 11ZM12 4c.9 1.2 1.7 3.1 2 7H10c.3-3.9 1.1-5.8 2-7ZM9.3 6a15 15 0 0 0-1.2 5h-3A8 8 0 0 1 9.300 6ZM5.100 13h3a15 15 0 0 0 1.200 5A8 8 0 0 1 5.100 13ZM10 13h4c-.3 3.900-1.100 5.800-2 7-.9-1.200-1.700-3.100-2-7Zm4.700 5a15 15 0 0 0 1.200-5h3a8 8 0 0 1-4.200 5Z",
  chart: "M4 20V4h2v14h14v2H4Zm4-4V9h3v7H8Zm5 0V6h3v10h-3Zm5 0v-5h3v5h-3Z",
  scale: "M11 3h2v2.1l5 1.4V8l3 6a4 4 0 0 1-6 0l3-6-4-1.2V19h4v2H7v-2h4V6.8L7 8l3 6a4 4 0 0 1-6 0l3-6V6.500l4-1.400V3Z",
  arrow: "M5 12h12.2l-4.600-4.600L14 6l7 7-7 7-1.400-1.400 4.600-4.600H5v-2Z",
  play: "M8 5v14l11-7L8 5Z",
};

export default function Icon({
  name,
  size = 26,
}: {
  name: keyof typeof paths | string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={paths[name] ?? paths.shield} />
    </svg>
  );
}
