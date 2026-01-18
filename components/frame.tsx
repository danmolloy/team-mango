export function ViewportFrame({children, color = "bg-neutral-300"}: Readonly<{
  children: React.ReactNode;
  color?: string;
}>) {
  return (
    <div className="relative w-3/4 lg:w-1/2 mt-12 z-0">
  {/* horizontal lines */}
  <span className={`pointer-events-none absolute top-0 left-1/2 h-px w-screen -translate-x-1/2 ${color}`} />
  <span className={`pointer-events-none absolute bottom-0 left-1/2 h-px w-screen -translate-x-1/2 ${color}`} />

  {/* vertical lines */}
  <span className={`pointer-events-none absolute left-0 top-1/2 w-px h-screen -mt-12 -translate-y-1/2 ${color}`} />
  <span className={`pointer-events-none absolute right-0 top-1/2 w-px h-screen -mt-12 -translate-y-1/2 ${color}`} />

  {children}
</div>
  )
}