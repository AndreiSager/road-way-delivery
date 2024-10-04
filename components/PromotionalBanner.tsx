export default function PromotionalBanner() {
  return (
    <div className="sectionPadding flex w-full flex-col items-center justify-center gap-6 bg-stone-900 text-center text-white">
      <p className="text-xl font-medium uppercase">
        food. gifts. products. furniture. people. you name it, we deliver!
      </p>
      <h1 className="text-3xl font-extrabold capitalize lg:text-5xl">
        where there's a <span className="text-green-600">road</span>, there's a{" "}
        <span className="text-green-600">way</span>!
      </h1>
    </div>
  );
}
