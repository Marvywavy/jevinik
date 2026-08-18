import { useRef, useEffect } from "react";
import afang from '../assets/Afang.jpg';
import egusi from '../assets/egusi.jpg';
import jollof from '../assets/jollof.jpg';
import fried from '../assets/fired.jpg';

function HistorySwiper() {
  const scrollRef = useRef(null);

  const dishes = [
    { name: "Afang Soup", image: afang },
    { name: "Egusi Soup", image: egusi },
    { name: "Jollof Rice", image: jollof },
    { name: "Fried Rice", image: fried },
    { name: "Afang Soup2", image: afang },
    { name: "Egusi Soup2", image: egusi },
    { name: "Jollof Rice2", image: jollof },
    { name: "Fried Rice2", image: fried },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!el) return;

      const atEnd = el.scrollLeft + el.offsetWidth >= el.scrollWidth - 5;

      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[80%] mx-auto flex flex-col gap-10">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide pb-2"
      >
        {dishes.map((dish, i) => (
          <div
            key={dish.name + i}
            className="shrink-0 w-100 snap-start w-full "
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full  h-70 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistorySwiper;