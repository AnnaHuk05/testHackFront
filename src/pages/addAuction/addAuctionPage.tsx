import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack, Input, Autocomplete, FormLabel, TextField } from "@mui/joy";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "react-day-picker/dist/style.css";
import { SERVER_URL } from "../../constants.ts";
import { auctionCategories } from "../../types.ts"; // Import your AuctionCategory type
import { toast } from 'react-toastify';

const AddAuctionPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [minIncrease, setMinIncrease] = useState("");
  const [endDateTime, setEndDateTime] = useState(new Date());
  const [categories, setCategories] = useState([]); // This should be an array of AuctionCategory
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleCategoryChange = (event, value) => {
    setCategories(value);
  };

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (const file of files) {
      formData.append("files", file);
    }
    const formatDate = (date) => {
      const pad = (num) => num.toString().padStart(2, "0");
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    };
    console.log(formatDate(new Date(endDateTime)));
    formData.append("endDateTime", formatDate(new Date(endDateTime)));
    formData.append("categories", categories[0]);
    formData.append("startPrice", startPrice);
    formData.append("minIncrease", minIncrease);
    formData.append("name", name);
    formData.append("description", description);

    try {
      const response = await fetch(`${SERVER_URL}auction-lots/`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (response.ok) {
        toast.success("Лот успішно додано!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const data = await response.json();
        navigate("/user-info");
      } else {
        console.error("Failed to add auction");
        toast.error("Не вдалося додати лот. Спробуйте ще раз.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Помилка при додаванні лота.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        multiple
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button component="span" sx={{ width: "fit-content" }}>
          Завантажити фото
        </Button>
      </label>
      <Input
        placeholder="Назва лоту"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Опис"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        placeholder="Стартова ціна"
        value={startPrice}
        onChange={(e) => setStartPrice(e.target.value)}
      />

      <Input
        placeholder="Мінімальний крок"
        value={minIncrease}
        onChange={(e) => setMinIncrease(e.target.value)}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker
            label="Дата закінчення аукціону"
            onChange={(newValue) => setEndDateTime(newValue)}
          />  
        </DemoContainer>
      </LocalizationProvider>

      <Autocomplete
        multiple
        id="category-tags-outlined"
        label="Категорії"
        options={auctionCategories}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        onChange={handleCategoryChange}
      />

      <Button type="submit" sx={{ alignSelf: "start" }}>
        Додати аукціон
      </Button>
    </Box>
  );
};

export default AddAuctionPage;
