"use client";
import { motion } from "framer-motion";
import { Category } from "@/types";
import { cn } from "@/lib/utils";
import { categories, opacityVariants, staggerAnimation } from "@/constants";

interface CategorySliderProps {
  activeCategory: Category;
  onChange: (category: Category) => void;
}

export const CategorySlider = ({
  activeCategory,
  onChange,
}: CategorySliderProps) => {

  return (
    <motion.ul
      {...staggerAnimation}
      className="flex items-center flex-wrap justify-center gap-3"
    >
      {categories.map((category) => (
        <motion.li variants={opacityVariants} key={category}>
          <button
            onClick={() => onChange(category)}
            className={cn(
              "relative whitespace-nowrap rounded-full border px-4 py-1",
            )}
          >
            {category}
            {category === activeCategory && (
              <motion.span
                style={{ borderRadius: "20px" }}
                layoutId="activeCategory"
                className="absolute inset-0 -z-10 bg-gradient-to-r from-green-500 to-lime-800"
              />
            )}
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
};
