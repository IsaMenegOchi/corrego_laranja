      <section
        id="gallery"
        className="grid grid-flow-col grid-rows-12 grid-cols-6 gap-6 w-full h-[650px] px-8"
      >
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl overflow-hidden relative ${item.className}`}
          >
            <Image src={item.image} alt="teste" fill className="object-fit" />
          </div>
        ))}
      </section>
