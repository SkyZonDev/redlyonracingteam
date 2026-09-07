export function PageHeading({
  kicker,
  children,
}: {
  kicker: string;
  children: string;
}) {
  return (
    <>
      <p className="font-display text-[13px] font-semibold tracking-[0.35em] text-rl-red uppercase">
        {kicker}
      </p>
      <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(44px,8vw,92px)] font-extrabold italic leading-[0.86] tracking-[-0.02em] text-white">
        {children}
        <span className="text-rl-red">.</span>
      </h1>
    </>
  );
}
