import NextLink from "next/link";

export default function Hero() {
  return (
    <section className=" mx-auto px-6 py-24 ">
      <div className="text-wrapper">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Ciao mondo,
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
          Benvenutə nel mio portfolio!
        </h2>

        <p className="mt-6 text-gray-600 max-w-xl">
          Sono Luigi Forte, sviluppatore front-end da 3 anni. <br />
          Lavoro principalmente con React e Next.js. <br />
        </p>

        <div className="mt-8 flex gap-4">
          <NextLink
            href="./CV_Luigi_Forte.pdf"
            className="btn-secondary"
            target="_blank"
          >
            Vedi il CV
          </NextLink>
          <NextLink href="#" className="btn-primary">
            Dai un&apos;occhiata ai progetti
          </NextLink>
        </div>
      </div>
    </section>
  );
}
