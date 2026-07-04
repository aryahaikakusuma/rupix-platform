"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <h1 className="text-6xl font-bold text-primary">500</h1>
      <p className="mt-4 text-xl text-neutral-600">Terjadi kesalahan</p>
      <p className="mt-2 text-neutral-500">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:brightness-110"
      >
        Coba Lagi
      </button>
    </div>
  );
}
