import React, { useState } from "react";
import "./sidePanel.css";
import Slider from "@mui/joy/Slider";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

const SidePanel: React.FC = () => {
  const [value, setValue] = useState<number[]>([1000, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleFilterApply = () => {
    console.log("Applied filters:", {
      categories: selectedCategories,
      priceRange: value,
    });
    // Implement the filter logic here
  };

  const categories = [
    "Антикваріат",
    "Мистецтво",
    "Ювелірні вироби",
    // Ensure no duplicate categories
  ];

  return (
    <aside className="side-panel">
      <div className="categories-section">
        <h3>ТИП ЛОТУ</h3>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="price-filter">
        <h3>Ціна</h3>
        <Slider
          sx={{
            "--Slider-track-color": "#843B62", // track color
            "--Slider-thumb-color": "#843B62", // thumb color
            "--Slider-track-height": "4px",
            "--Slider-thumb-size": "16px",
          }}
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={4000}
        />
        <div className="price-range-inputs">
          <div>від</div>
          <Input
            size="sm"
            placeholder="від"
            value={value[0]}
            onChange={(e) => setValue([+e.target.value, value[1]])}
            type="number"
            slotProps={{
              input: {
                min: 0,
                max: 4000,
              },
            }}
          />
          <div>до</div>
          <Input
            size="sm"
            placeholder="до"
            value={value[1]}
            onChange={(e) => setValue([value[0], +e.target.value])}
            type="number"
            slotProps={{
              input: {
                min: 0,
                max: 4000,
              },
            }}
          />
          <div>грн</div>
        </div>
        <Button variant="solid" size="sm" onClick={handleFilterApply}>
          Застосувати
        </Button>
      </div>
    </aside>
  );
};

export default SidePanel;
